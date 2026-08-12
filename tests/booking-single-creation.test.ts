/**
 * Ensures a demo booking creates exactly one Booking Broom record,
 * even when confirm/forward is invoked concurrently with the same bookingId.
 */
import assert from 'node:assert/strict';
import http from 'node:http';
import { after, before, beforeEach, describe, test } from 'node:test';

import {
  clearBookingBroomForwardCache,
  forwardToBookingBroom,
  type SanfordBookingPayload,
} from '../src/lib/booking-broom';

const DEMO_BOOKING: SanfordBookingPayload = {
  firstName: 'Demo',
  lastName: 'TestUser',
  email: 'demo.booking.test@example.com',
  phone: '3215550100',
  address: '100 Demo Test St, Sanford, FL 32771',
  keyInfo: 'DEMO / TESTING BOOKING — safe to ignore',
  service: 'House Cleaning',
  squareFootage: '1500',
  bedrooms: 3,
  bathrooms: 2,
  paymentComment: 'Automation demo text — booking validation',
  scheduledDate: '2026-07-17',
  scheduledTime: '10:00',
  estimatedPrice: 159,
  frequency: 'One-time',
};

describe('booking single creation', () => {
  let server: http.Server;
  let baseUrl: string;
  let receivedBodies: unknown[];

  before(async () => {
    receivedBodies = [];
    server = http.createServer(async (req, res) => {
      if (req.method === 'POST' && req.url === '/api/bookings') {
        const chunks: Buffer[] = [];
        for await (const chunk of req) {
          chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
        }
        const raw = Buffer.concat(chunks).toString('utf8');
        const body = raw ? JSON.parse(raw) : {};
        receivedBodies.push(body);
        // Simulate a slow upstream so concurrent callers overlap.
        await new Promise((r) => setTimeout(r, 40));
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ id: `bb_${receivedBodies.length}` }));
        return;
      }
      res.writeHead(404);
      res.end();
    });

    await new Promise<void>((resolve) => {
      server.listen(0, '127.0.0.1', () => resolve());
    });
    const addr = server.address();
    if (!addr || typeof addr === 'string') throw new Error('Failed to bind mock Booking Broom');
    baseUrl = `http://127.0.0.1:${addr.port}`;
    process.env.BOOKING_BROOM_URL = baseUrl;
    process.env.BOOKING_BROOM_API_KEY = 'test-api-key';
    process.env.BOOKING_BROOM_SITE_SLUG = 'sanford';
  });

  beforeEach(() => {
    receivedBodies = [];
    clearBookingBroomForwardCache();
  });

  after(async () => {
    await new Promise<void>((resolve, reject) => {
      server.close((err) => (err ? reject(err) : resolve()));
    });
    delete process.env.BOOKING_BROOM_URL;
    delete process.env.BOOKING_BROOM_API_KEY;
    delete process.env.BOOKING_BROOM_SITE_SLUG;
  });

  test('demo booking creates exactly one Booking Broom record', async () => {
    const bookingId = 'BK-DEMO-SINGLE-001';
    const result = await forwardToBookingBroom(DEMO_BOOKING, bookingId);

    assert.equal(result.forwarded, true);
    assert.equal(result.deduped, undefined);
    assert.equal(receivedBodies.length, 1);

    const body = receivedBodies[0] as Record<string, unknown>;
    assert.equal(body.customer_name, 'Demo TestUser');
    assert.equal(body.email, DEMO_BOOKING.email);
    assert.equal(body.idempotency_key, bookingId);
    assert.equal(body.external_id, bookingId);
    assert.match(String(body.notes), /DEMO \/ TESTING BOOKING/);
    const quote = body.quote as Record<string, unknown>;
    assert.equal(quote.payment_terms, 'Due after cleaning is complete');
  });

  test('concurrent forwards with the same bookingId create only one record', async () => {
    const bookingId = 'BK-DEMO-SINGLE-002';

    const [a, b, c] = await Promise.all([
      forwardToBookingBroom(DEMO_BOOKING, bookingId),
      forwardToBookingBroom(DEMO_BOOKING, bookingId),
      forwardToBookingBroom(DEMO_BOOKING, bookingId),
    ]);

    assert.equal(receivedBodies.length, 1, 'expected a single upstream POST');
    assert.equal(a.forwarded, true);
    assert.equal(b.forwarded, true);
    assert.equal(c.forwarded, true);

    const dedupedCount = [a, b, c].filter((r) => r.deduped).length;
    assert.equal(dedupedCount, 2, 'two callers should reuse the in-flight forward');
    assert.equal(a.id, b.id);
    assert.equal(b.id, c.id);
  });

  test('sequential retries with the same bookingId still create only one record', async () => {
    const bookingId = 'BK-DEMO-SINGLE-003';

    const first = await forwardToBookingBroom(DEMO_BOOKING, bookingId);
    const second = await forwardToBookingBroom(DEMO_BOOKING, bookingId);

    assert.equal(receivedBodies.length, 1);
    assert.equal(first.forwarded, true);
    assert.equal(second.forwarded, true);
    assert.equal(second.deduped, true);
    assert.equal(first.id, second.id);
  });
});
