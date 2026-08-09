import PriceCalculatorLoader from './PriceCalculatorLoader';
import { getPricingConfig } from '@/lib/pricing-config';

/** Renders the calculator with the live prices already resolved on the server. */
const PriceCalculatorServer = async () => {
  const config = await getPricingConfig();
  return <PriceCalculatorLoader config={config} />;
};

export default PriceCalculatorServer;
