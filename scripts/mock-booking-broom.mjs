/**
 * Minimal Booking Broom stand-in for local booking validation.
 * Counts POSTs to /api/bookings and exposes GET /_count.
 */
import http from 'node:http';

const port = Number(process.env.MOCK_BB_PORT || 4099);
const bookings = [];

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://127.0.0.1:${port}`);

  if (req.method === 'POST' && url.pathname === '/api/bookings') {
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    }
    const body = JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
    const id = `mock_${bookings.length + 1}`;
    bookings.push({ id, ...body, receivedAt: new Date().toISOString() });
    console.log(`[mock-bb] created ${id} (total=${bookings.length})`);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ id }));
    return;
  }

  if (req.method === 'GET' && url.pathname === '/_count') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ count: bookings.length, bookings }));
    return;
  }

  if (req.method === 'POST' && url.pathname === '/_reset') {
    bookings.length = 0;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true }));
    return;
  }

  res.writeHead(404);
  res.end('not found');
});

server.listen(port, '127.0.0.1', () => {
  console.log(`[mock-bb] listening on http://127.0.0.1:${port}`);
});
