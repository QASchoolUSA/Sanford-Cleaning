/**
 * Sanford's quote engine, lifted verbatim out of `PriceCalculator.tsx` so the
 * numbers can be edited in Booking Broom and the math can be tested.
 *
 * Behaviour is deliberately unchanged, including its quirks: "Deep Cleaning" and
 * "Post-construction Cleaning" price off the same standard base, the discount is
 * unconditional, and house condition only moves a move-in/move-out quote.
 */

export interface Extra {
  name: string;
  price: number;
  hasQuantity: boolean;
  unit?: string;
}

export interface SelectedExtra {
  name: string;
  quantity?: number;
}

export interface SqftBand {
  label: string;
  value: number;
}

export interface PricingConfig {
  kind: "inline-wizard";
  /** Base for maintenance, deep and post-construction cleans. */
  standardBase: number;
  per1000SqFtOver: number;
  perBedroomOver: number;
  perBathroomOver: number;
  /** Square footage, bedroom and bathroom count included in every base. */
  includedSqFt: number;
  moveOut: {
    base: number;
    per1000SqFtOver: number;
    perBedroomOver: number;
    perBathroomOver: number;
  };
  /** Only applied to move in / move out. */
  conditionSurcharges: { key: string; label: string; price: number }[];
  hourlyRate: number;
  maintenance: {
    byFrequency: { key: string; value: number }[];
    per1000SqFt: number;
    perBedroom: number;
    perBathroom: number;
  };
  extras: Extra[];
  /** Extras that also recur on a maintenance plan rather than just the first visit. */
  maintenanceIncludedExtras: string[];
  /** Applied to every quote, e.g. 0.85 for the standing 15% off. */
  discountMultiplier: number;
  sqftBands: SqftBand[];
}

export const DEFAULT_PRICING_CONFIG: PricingConfig = {
  kind: "inline-wizard",
  standardBase: 157,
  per1000SqFtOver: 10,
  perBedroomOver: 10,
  perBathroomOver: 12,
  includedSqFt: 1000,
  moveOut: {
    base: 277,
    per1000SqFtOver: 10,
    perBedroomOver: 10,
    perBathroomOver: 6.5,
  },
  conditionSurcharges: [
    { key: "Very clean", label: "Very clean", price: 0 },
    { key: "Pretty clean", label: "Pretty clean", price: 25 },
    { key: "Average", label: "Average", price: 55 },
    { key: "Pretty dirty", label: "Pretty dirty", price: 115 },
    { key: "Very dirty", label: "Very dirty", price: 195 },
  ],
  hourlyRate: 55,
  maintenance: {
    byFrequency: [
      { key: "Weekly", value: 109.9 },
      { key: "Every Other Week", value: 120.89 },
      { key: "Every 4 Weeks", value: 141.3 },
    ],
    per1000SqFt: 7,
    perBedroom: 7,
    perBathroom: 8.2,
  },
  extras: [
    { name: "Behind fridge", price: 20, hasQuantity: false },
    { name: "Behind oven", price: 20, hasQuantity: false },
    { name: "Inside oven", price: 35, hasQuantity: false },
    { name: "Deep Cleaning", price: 40, hasQuantity: false },
    { name: "Heavy Duty", price: 80, hasQuantity: false },
    { name: "Inside fridge", price: 30, hasQuantity: false },
    { name: "Patio windows in/out", price: 10, hasQuantity: true, unit: "window" },
    {
      name: "Interior windows (all, excludes patio)",
      price: 30,
      hasQuantity: false,
    },
    { name: "Wet wipe window blinds", price: 10, hasQuantity: true, unit: "blind" },
    { name: "Organization (30 min)", price: 20, hasQuantity: false },
    { name: "Green Cleaning", price: 0, hasQuantity: false },
    { name: "Dishes", price: 10, hasQuantity: false },
    { name: "Laundry & Folding", price: 20, hasQuantity: false },
    { name: "Carpet Cleaning", price: 20, hasQuantity: true, unit: "area" },
  ],
  maintenanceIncludedExtras: ["Inside oven", "Dishes", "Laundry & Folding"],
  discountMultiplier: 0.85,
  sqftBands: [
    { label: "Under 1,000", value: 900 },
    { label: "1,000–1,500", value: 1250 },
    { label: "1,500–2,500", value: 2000 },
    { label: "2,500–4,000", value: 3200 },
    { label: "4,000+", value: 4500 },
  ],
};

export const HOURLY_SERVICE = "Hourly Cleaning";
export const MOVE_SERVICE = "Move In / Move Out Cleaning";
export const MAINTENANCE_SERVICE = "Maintenance Cleaning";

export interface QuoteInput {
  service: string;
  frequency?: string;
  hours?: number;
  minutes?: number;
  squareFootage: string;
  bedrooms: string;
  bathrooms: string;
  houseCondition: string;
  extras: SelectedExtra[];
}

export interface Quote {
  /** What the first visit costs, after the standing discount. */
  price: number;
  /** What each recurring maintenance visit costs; 0 for one-off services. */
  maintenancePrice: number;
}

/**
 * Guards a config that arrived over the wire, checking only enough to know the
 * engine can run on it. A wrong-shaped payload must fall back to the compiled
 * prices rather than quote nonsense.
 */
export function isUsablePricingConfig(value: unknown): value is PricingConfig {
  if (!value || typeof value !== "object") return false;
  const config = value as Partial<PricingConfig>;
  if (config.kind !== "inline-wizard") return false;
  if (typeof config.standardBase !== "number") return false;
  if (typeof config.hourlyRate !== "number") return false;
  if (typeof config.discountMultiplier !== "number") return false;
  if (typeof config.moveOut?.base !== "number") return false;
  if (!Array.isArray(config.extras) || config.extras.length === 0) return false;
  if (!Array.isArray(config.conditionSurcharges)) return false;
  if (!Array.isArray(config.maintenance?.byFrequency)) return false;
  if (!Array.isArray(config.sqftBands) || config.sqftBands.length === 0) {
    return false;
  }
  return true;
}

function roundMoney(value: number): number {
  return Math.round(value * 100) / 100;
}

/** Charged per whole 1,000 sq ft started above the included footage. */
function sqftBlocks(sqft: number, includedSqFt: number): number {
  if (sqft <= includedSqFt) return 0;
  return Math.ceil((sqft - includedSqFt) / 1000);
}

function conditionSurcharge(condition: string, config: PricingConfig): number {
  return config.conditionSurcharges.find((c) => c.key === condition)?.price ?? 0;
}

function maintenanceBase(frequency: string | undefined, config: PricingConfig): number {
  const rows = config.maintenance.byFrequency;
  const match = frequency ? rows.find((row) => row.key === frequency) : undefined;
  return match?.value ?? rows[0]?.value ?? 0;
}

export function extrasTotal(
  selected: SelectedExtra[],
  config: PricingConfig = DEFAULT_PRICING_CONFIG,
): number {
  return selected.reduce((sum, choice) => {
    const extra = config.extras.find((option) => option.name === choice.name);
    if (!extra) return sum;
    return sum + extra.price * (choice.quantity || 1);
  }, 0);
}

/** Only the subset of extras that keep applying on a maintenance plan. */
export function recurringExtrasTotal(
  selected: SelectedExtra[],
  config: PricingConfig = DEFAULT_PRICING_CONFIG,
): number {
  return extrasTotal(
    selected.filter((choice) =>
      config.maintenanceIncludedExtras.includes(choice.name),
    ),
    config,
  );
}

export function calculateQuote(
  input: QuoteInput,
  config: PricingConfig = DEFAULT_PRICING_CONFIG,
): Quote {
  const sqft = parseInt(input.squareFootage) || 0;
  const bedrooms = parseInt(input.bedrooms) || 0;
  const bathrooms = parseFloat(input.bathrooms) || 0;
  const blocks = sqftBlocks(sqft, config.includedSqFt);
  const extraBedrooms = Math.max(0, bedrooms - 1);
  const extraBathrooms = Math.max(0, bathrooms - 1);

  let price = 0;
  let maintenancePrice = 0;

  if (input.service === HOURLY_SERVICE) {
    const totalMinutes = (input.hours || 0) * 60 + (input.minutes || 0);
    price = (totalMinutes / 60) * config.hourlyRate;
  } else if (input.service === MOVE_SERVICE) {
    const move = config.moveOut;
    price =
      move.base +
      blocks * move.per1000SqFtOver +
      extraBedrooms * move.perBedroomOver +
      extraBathrooms * move.perBathroomOver +
      conditionSurcharge(input.houseCondition, config);
  } else {
    price =
      config.standardBase +
      blocks * config.per1000SqFtOver +
      extraBedrooms * config.perBedroomOver +
      extraBathrooms * config.perBathroomOver;

    if (input.service === MAINTENANCE_SERVICE && input.frequency) {
      const recurring = config.maintenance;
      maintenancePrice =
        maintenanceBase(input.frequency, config) +
        blocks * recurring.per1000SqFt +
        extraBedrooms * recurring.perBedroom +
        extraBathrooms * recurring.perBathroom;
    }
  }

  // Hourly is time-and-materials, so extras are not stacked on top of it.
  if (input.service !== HOURLY_SERVICE) {
    price += extrasTotal(input.extras, config);
    if (input.service === MAINTENANCE_SERVICE) {
      maintenancePrice += recurringExtrasTotal(input.extras, config);
    }
  }

  return {
    price: roundMoney(price * config.discountMultiplier),
    maintenancePrice: roundMoney(maintenancePrice * config.discountMultiplier),
  };
}
