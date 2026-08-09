"use client";

import dynamic from 'next/dynamic';
import { DEFAULT_PRICING_CONFIG, type PricingConfig } from '@/lib/pricing';

const PriceCalculator = dynamic(() => import('./PriceCalculator'));

/** Keeps the code-split boundary on the client while the prices arrive from the server. */
const PriceCalculatorLoader = ({
  config = DEFAULT_PRICING_CONFIG,
}: {
  config?: PricingConfig;
}) => <PriceCalculator config={config} />;

export default PriceCalculatorLoader;
