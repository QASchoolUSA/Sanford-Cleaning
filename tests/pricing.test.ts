/**
 * Pins the quote engine that used to live inside PriceCalculator.tsx. These
 * numbers are what the calculator showed before the extraction, so a failure
 * here means prices moved.
 */
import assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import {
  DEFAULT_PRICING_CONFIG,
  calculateQuote,
  extrasTotal,
  recurringExtrasTotal,
  type PricingConfig,
  type QuoteInput,
} from '../src/lib/pricing';

function input(overrides: Partial<QuoteInput> = {}): QuoteInput {
  return {
    service: 'Deep Cleaning',
    squareFootage: '',
    bedrooms: '1',
    bathrooms: '1',
    houseCondition: 'Very clean',
    extras: [],
    ...overrides,
  };
}

describe('calculateQuote', () => {
  test('standard base with nothing extra is the discounted base', () => {
    // 157 * 0.85
    assert.equal(calculateQuote(input()).price, 133.45);
  });

  test('post-construction prices off the same base as a deep clean', () => {
    assert.equal(
      calculateQuote(input({ service: 'Post-construction Cleaning' })).price,
      calculateQuote(input({ service: 'Deep Cleaning' })).price,
    );
  });

  test('square footage is charged per whole 1,000 started above 1,000', () => {
    // 157 + 10 = 167, * 0.85
    assert.equal(calculateQuote(input({ squareFootage: '1200' })).price, 141.95);
    // Still one block at exactly 2,000.
    assert.equal(calculateQuote(input({ squareFootage: '2000' })).price, 141.95);
    // 157 + 20 = 177, * 0.85
    assert.equal(calculateQuote(input({ squareFootage: '2100' })).price, 150.45);
  });

  test('bedrooms and bathrooms above the first are charged', () => {
    // 157 + (2 * 10) + (1.5 * 12) = 195, * 0.85
    assert.equal(
      calculateQuote(input({ bedrooms: '3', bathrooms: '2.5' })).price,
      165.75,
    );
  });

  test('hourly bills time only, ignoring size and extras', () => {
    const quote = calculateQuote(
      input({
        service: 'Hourly Cleaning',
        hours: 2,
        minutes: 30,
        squareFootage: '4000',
        bedrooms: '5',
        extras: [{ name: 'Inside oven' }],
      }),
    );
    // 2.5h * $55 = 137.50, * 0.85
    assert.equal(quote.price, 116.88);
    assert.equal(quote.maintenancePrice, 0);
  });

  test('move in / move out uses its own base and the condition surcharge', () => {
    // 277 + 195 = 472, * 0.85
    assert.equal(
      calculateQuote(
        input({
          service: 'Move In / Move Out Cleaning',
          houseCondition: 'Very dirty',
        }),
      ).price,
      401.2,
    );
  });

  test('house condition does not move a non-move quote', () => {
    assert.equal(
      calculateQuote(input({ houseCondition: 'Very dirty' })).price,
      calculateQuote(input({ houseCondition: 'Very clean' })).price,
    );
  });

  test('maintenance quotes the first visit and the recurring visit separately', () => {
    const quote = calculateQuote(
      input({
        service: 'Maintenance Cleaning',
        frequency: 'Every Other Week',
        squareFootage: '2200',
        bedrooms: '3',
        bathrooms: '2',
      }),
    );
    // First visit: 157 + 20 + 20 + 12 = 209, * 0.85
    assert.equal(quote.price, 177.65);
    // Recurring: 120.89 + 14 + 14 + 8.2 = 157.09, * 0.85
    assert.equal(quote.maintenancePrice, 133.53);
  });

  test('maintenance without a frequency has no recurring price', () => {
    assert.equal(
      calculateQuote(input({ service: 'Maintenance Cleaning' })).maintenancePrice,
      0,
    );
  });

  test('only some extras carry over to the recurring visit', () => {
    const extras = [
      { name: 'Inside oven' },
      { name: 'Heavy Duty' },
      { name: 'Patio windows in/out', quantity: 3 },
    ];
    // 35 + 80 + 30 = 145
    assert.equal(extrasTotal(extras), 145);
    // Only "Inside oven" recurs.
    assert.equal(recurringExtrasTotal(extras), 35);

    const quote = calculateQuote(
      input({ service: 'Maintenance Cleaning', frequency: 'Weekly', extras }),
    );
    // (157 + 145) * 0.85
    assert.equal(quote.price, 256.7);
    // (109.90 + 35) * 0.85
    assert.equal(quote.maintenancePrice, 123.17);
  });

  test('a raised base from the config flows straight through', () => {
    const config: PricingConfig = {
      ...DEFAULT_PRICING_CONFIG,
      standardBase: 200,
      discountMultiplier: 1,
    };
    assert.equal(calculateQuote(input(), config).price, 200);
  });
});
