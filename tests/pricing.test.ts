/**
 * Pins the sqft-rate-min quote engine (Davenport pattern, STANDARD rates).
 */
import assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import {
  DEFAULT_PRICING_CONFIG,
  calculatePrice,
  isUsablePricingConfig,
  type PricingConfig,
  type PricingInput,
} from '../src/lib/pricing';

function input(overrides: Partial<PricingInput> = {}): PricingInput {
  return {
    serviceType: 'deep',
    sqft: 1000,
    bedrooms: 1,
    bathrooms: 1,
    frequency: 'one-time',
    addons: [],
    ...overrides,
  };
}

describe('DEFAULT_PRICING_CONFIG', () => {
  test('is sqft-rate-min with STANDARD rates', () => {
    assert.equal(DEFAULT_PRICING_CONFIG.kind, 'sqft-rate-min');
    assert.equal(DEFAULT_PRICING_CONFIG.bedroomRate, 18);
    assert.equal(DEFAULT_PRICING_CONFIG.bathroomRate, 28);
    const house = DEFAULT_PRICING_CONFIG.serviceRates.find((r) => r.key === 'house');
    assert.deepEqual(house, { key: 'house', perSqft: 0.15, minBase: 129 });
    const post = DEFAULT_PRICING_CONFIG.serviceRates.find(
      (r) => r.key === 'post-construction',
    );
    assert.deepEqual(post, {
      key: 'post-construction',
      perSqft: 0.39,
      minBase: 249,
    });
  });

  test('isUsablePricingConfig accepts the shipped default', () => {
    assert.equal(isUsablePricingConfig(DEFAULT_PRICING_CONFIG), true);
  });

  test('isUsablePricingConfig rejects inline-wizard', () => {
    assert.equal(
      isUsablePricingConfig({ ...DEFAULT_PRICING_CONFIG, kind: 'inline-wizard' }),
      false,
    );
  });
});

describe('calculatePrice', () => {
  test('uses minBase when sqft×rate is below the floor', () => {
    // deep: max(199, round(400 * 0.2)) + 1*18 + 1*28 = 199 + 46 = 245
    assert.equal(calculatePrice(input({ sqft: 400 })).total, 245);
  });

  test('charges per-sqft when above the floor', () => {
    // house: max(129, round(1600 * 0.15)) = 240; + 3*18 + 2*28 = 240+54+56 = 350
    assert.equal(
      calculatePrice(
        input({
          serviceType: 'house',
          sqft: 1600,
          bedrooms: 3,
          bathrooms: 2,
        }),
      ).total,
      350,
    );
  });

  test('applies frequency multipliers', () => {
    const oneTime = calculatePrice(input({ frequency: 'one-time' })).total;
    const weekly = calculatePrice(input({ frequency: 'weekly' })).total;
    assert.equal(weekly, Math.round(oneTime * 0.85));
  });

  test('adds configured add-ons', () => {
    const base = calculatePrice(input()).total;
    const withOven = calculatePrice(input({ addons: ['oven'] })).total;
    assert.equal(withOven, base + 35);
  });

  test('post-construction has its own rate (not deep)', () => {
    const deep = calculatePrice(input({ serviceType: 'deep', sqft: 2000 })).total;
    const post = calculatePrice(
      input({ serviceType: 'post-construction', sqft: 2000 }),
    ).total;
    assert.notEqual(deep, post);
    // post: max(249, round(2000*0.39))=780; +18+28=826
    assert.equal(post, 826);
  });

  test('honors an alternate config object', () => {
    const config: PricingConfig = {
      ...DEFAULT_PRICING_CONFIG,
      serviceRates: DEFAULT_PRICING_CONFIG.serviceRates.map((r) =>
        r.key === 'deep' ? { ...r, minBase: 500, perSqft: 0 } : r,
      ),
      bedroomRate: 0,
      bathroomRate: 0,
    };
    assert.equal(calculatePrice(input({ sqft: 100 }), config).total, 500);
  });
});
