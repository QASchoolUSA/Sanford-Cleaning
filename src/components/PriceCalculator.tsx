"use client";
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Check, Loader2 } from 'lucide-react';
import { DatePicker } from '@/components/ui/date-picker';
import { TimeSlotPicker } from '@/components/ui/time-slot-picker';
import AddressAutocomplete from '@/components/ui/address-autocomplete';
import {
  DEFAULT_PRICING_CONFIG,
  calculatePrice,
  formatUSD,
  frequencyDiscountLabels,
  frequencyLabels,
  type AddonId,
  type FrequencyId,
  type PricingConfig,
  type ServiceTypeId,
} from '@/lib/pricing';
import { createSoftLeadTracker } from '@/lib/soft-lead';

const SERVICE_OPTIONS: { id: ServiceTypeId; label: string }[] = [
  { id: 'house', label: 'House Cleaning' },
  { id: 'apartment', label: 'Apartment Cleaning' },
  { id: 'maintenance', label: 'Maintenance Cleaning' },
  { id: 'deep', label: 'Deep Cleaning' },
  { id: 'move', label: 'Move In / Move Out Cleaning' },
  { id: 'airbnb', label: 'Airbnb Turnover' },
  { id: 'post-construction', label: 'Post-construction Cleaning' },
];

const CONDITION_OPTIONS = [
  'Very clean',
  'Pretty clean',
  'Average',
  'Pretty dirty',
  'Very dirty',
];

interface FormData {
  serviceType: ServiceTypeId | '';
  frequency: FrequencyId;
  squareFootage: string;
  squareFootageBand: string;
  bedrooms: string;
  bathrooms: string;
  excludeAreas: boolean;
  excludedAreas: string[];
  addons: AddonId[];
  houseCondition: string;
  peopleCount: string;
  lastCleaning: Date | undefined;
  wasProfessional: boolean;
  scheduledDate: Date | undefined;
  scheduledTime: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  aptUnit: string;
  keyInfo: string;
  customerNote: string;
}

function serviceLabel(id: ServiceTypeId | ''): string {
  return SERVICE_OPTIONS.find((s) => s.id === id)?.label ?? 'Cleaning Service';
}

const PriceCalculator = ({
  config = DEFAULT_PRICING_CONFIG,
}: {
  config?: PricingConfig;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const calculatorRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(() => {
    const param = searchParams.get('returnToStep');
    const parsed = param ? Number(param) : NaN;
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
  });
  const [showExtras, setShowExtras] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  /** Sync guard — React state alone can miss rapid double-clicks before re-render. */
  const isSubmittingRef = useRef(false);
  const softLead = useRef<ReturnType<typeof createSoftLeadTracker> | null>(null);
  if (!softLead.current) {
    softLead.current = createSoftLeadTracker();
  }
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState('');
  const [formData, setFormData] = useState<FormData>({
    serviceType: '',
    frequency: 'one-time',
    squareFootage: '',
    squareFootageBand: '',
    bedrooms: '3',
    bathrooms: '2',
    excludeAreas: false,
    excludedAreas: [],
    addons: [],
    houseCondition: 'Very clean',
    peopleCount: '1',
    lastCleaning: undefined,
    wasProfessional: false,
    scheduledDate: undefined,
    scheduledTime: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    aptUnit: '',
    keyInfo: '',
    customerNote: '',
  });

  const frequencyOptions = useMemo(
    () => config.frequencyMultipliers.map((row) => row.key as FrequencyId),
    [config],
  );
  const freqLabels = useMemo(() => frequencyLabels(config), [config]);
  const freqDiscounts = useMemo(() => frequencyDiscountLabels(config), [config]);
  const SQFT_BANDS = config.sqftPresets;
  const bedroomOptions = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const bathroomOptions = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const areaOptions = ['Bedroom', 'Full Bathroom', 'Kitchen', 'Living/Dining Room'];
  const addonOptions = config.addOns;
  const peopleOptions = ['1', '2', '3', '4', '5+'];
  const keyInfoOptions = [
    'Someone will be at home',
    'I will hide the keys',
    'Keep key with provider',
  ];

  const formatPhoneNumber = (value: string): string => {
    const phoneNumber = value.replace(/\D/g, '');
    const limitedPhoneNumber = phoneNumber.substring(0, 10);
    if (limitedPhoneNumber.length >= 6) {
      return `(${limitedPhoneNumber.substring(0, 3)}) ${limitedPhoneNumber.substring(3, 6)}-${limitedPhoneNumber.substring(6)}`;
    } else if (limitedPhoneNumber.length >= 3) {
      return `(${limitedPhoneNumber.substring(0, 3)}) ${limitedPhoneNumber.substring(3)}`;
    } else if (limitedPhoneNumber.length > 0) {
      return `(${limitedPhoneNumber}`;
    }
    return limitedPhoneNumber;
  };

  const validatePhoneNumber = (phoneNumber: string): boolean => {
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    return cleanPhone.length === 10;
  };

  const handlePhoneChange = (value: string, field: 'phone') => {
    const numericValue = value.replace(/\D/g, '');
    if (numericValue.length <= 10) {
      const formattedValue = formatPhoneNumber(numericValue);
      updateFormData(field, formattedValue);
      if (numericValue.length > 0 && !validatePhoneNumber(formattedValue)) {
        setPhoneError('Please enter a valid 10-digit phone number');
      } else {
        setPhoneError('');
      }
    }
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, field: 'phone') => {
    const target = e.target as HTMLInputElement;
    const currentValue = target.value;
    if (e.key === 'Backspace' || e.key === 'Delete') {
      const cursorPosition = target.selectionStart || 0;
      if (e.key === 'Backspace' && cursorPosition > 0) {
        const charBeforeCursor = currentValue[cursorPosition - 1];
        if (charBeforeCursor === '(' || charBeforeCursor === ')' || charBeforeCursor === ' ' || charBeforeCursor === '-') {
          e.preventDefault();
          const numericValue = currentValue.replace(/\D/g, '');
          if (numericValue.length > 0) {
            const newNumericValue = numericValue.slice(0, -1);
            const newFormattedValue = formatPhoneNumber(newNumericValue);
            updateFormData(field, newFormattedValue);
            if (newNumericValue.length > 0 && !validatePhoneNumber(newFormattedValue)) {
              setPhoneError('Please enter a valid 10-digit phone number');
            } else {
              setPhoneError('');
            }
          }
        }
      }
    }
  };

  const breakdown = useMemo(() => {
    if (!formData.serviceType || !formData.squareFootage) return null;
    const sqft = Number(formData.squareFootage.replace(/[^0-9]/g, ''));
    if (!Number.isFinite(sqft) || sqft <= 0) return null;
    return calculatePrice(
      {
        serviceType: formData.serviceType,
        sqft,
        bedrooms: Number(formData.bedrooms) || 0,
        bathrooms: Number(formData.bathrooms) || 1,
        frequency: formData.frequency,
        addons: formData.addons,
      },
      config,
    );
  }, [formData, config]);

  const estimatedPrice = breakdown?.total ?? 0;

  useEffect(() => {
    const tracker = softLead.current;
    return () => tracker?.dispose();
  }, []);

  useEffect(() => {
    const name = `${formData.firstName} ${formData.lastName}`.trim();
    const address = formData.aptUnit
      ? `${formData.address}, ${formData.aptUnit}`
      : formData.address;
    softLead.current?.schedule({
      customer_name: name || undefined,
      email: formData.email,
      phone: formData.phone,
      address: address || undefined,
      service_type: formData.serviceType
        ? serviceLabel(formData.serviceType)
        : undefined,
      preferred_date: formData.scheduledDate
        ? formData.scheduledDate.toISOString().split('T')[0]
        : undefined,
      preferred_time: formData.scheduledTime || undefined,
      intent: 'book',
      last_step: String(currentStep),
      property: {
        bedrooms: formData.bedrooms ? Number(formData.bedrooms) : undefined,
        bathrooms: formData.bathrooms ? Number(formData.bathrooms) : undefined,
        size_label: formData.squareFootageBand || undefined,
        square_feet: formData.squareFootage
          ? Number(formData.squareFootage.replace(/[^0-9]/g, '')) || undefined
          : undefined,
        condition: formData.houseCondition || undefined,
        occupants: formData.peopleCount
          ? Number(formData.peopleCount) || undefined
          : undefined,
        excluded_areas:
          formData.excludeAreas && formData.excludedAreas.length
            ? formData.excludedAreas
            : undefined,
      },
      quote: {
        estimate: estimatedPrice > 0 ? estimatedPrice : undefined,
        currency: 'USD',
        frequency: freqLabels[formData.frequency] ?? formData.frequency,
      },
    });
  }, [formData, currentStep, estimatedPrice, freqLabels]);

  const updateFormData = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayToggle = (field: 'excludedAreas', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleAddonToggle = (key: AddonId) => {
    setFormData(prev => ({
      ...prev,
      addons: prev.addons.includes(key)
        ? prev.addons.filter(id => id !== key)
        : [...prev.addons, key],
    }));
  };

  const scrollToCalculatorTop = () => {
    if (calculatorRef.current) {
      const rect = calculatorRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = rect.top + scrollTop - 100;
      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const returnToStep = searchParams.get('returnToStep');
    if (returnToStep) {
      setTimeout(() => {
        scrollToCalculatorTop();
      }, 100);
    }
  }, [searchParams]);

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      setTimeout(() => {
        scrollToCalculatorTop();
      }, 100);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setTimeout(() => {
        scrollToCalculatorTop();
      }, 100);
    }
  };

  const handleSubmit = async () => {
    if (isSubmittingRef.current) return;
    isSubmittingRef.current = true;
    setIsSubmitting(true);
    setSubmitError(null);

    const scheduledDateIso = formData.scheduledDate
      ? formData.scheduledDate.toISOString().split('T')[0]
      : undefined;
    const bookingData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      aptUnit: formData.aptUnit || undefined,
      keyInfo: formData.keyInfo,
      service: serviceLabel(formData.serviceType),
      squareFootage: formData.squareFootage || '',
      squareFootageLabel: formData.squareFootageBand || undefined,
      bedrooms: Number(formData.bedrooms),
      bathrooms: Number(formData.bathrooms),
      customerNote: formData.customerNote || undefined,
      houseCondition: formData.houseCondition || undefined,
      peopleCount: formData.peopleCount || undefined,
      lastCleaning: formData.lastCleaning
        ? formData.lastCleaning.toISOString().split('T')[0]
        : undefined,
      wasProfessional: formData.lastCleaning ? formData.wasProfessional : undefined,
      excludedAreas:
        formData.excludeAreas && formData.excludedAreas.length
          ? formData.excludedAreas
          : undefined,
      scheduledDate: scheduledDateIso,
      scheduledTime: formData.scheduledTime || undefined,
      estimatedPrice: estimatedPrice > 0 ? estimatedPrice : undefined,
      frequency: freqLabels[formData.frequency] ?? formData.frequency,
      extras: formData.addons.length
        ? formData.addons.map((id) => {
            const addon = addonOptions.find((a) => a.key === id);
            return { name: addon?.label ?? id, price: addon?.price };
          })
        : undefined,
      sessionKey: softLead.current?.sessionKey,
    };
    const bookingId = `BK${Date.now()}`;

    try {
      const response = await fetch('/api/emails/confirm-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookingData, bookingId }),
      });
      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string };
        setSubmitError(data.error || 'Could not submit booking. Please try again or call us.');
        isSubmittingRef.current = false;
        setIsSubmitting(false);
        return;
      }
      router.push('/booking-success');
    } catch {
      setSubmitError('Could not submit booking. Please try again or call us.');
      isSubmittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  const renderStep1 = () => (
    <div className="space-y-8">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-4">Choose Your Service</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" data-cy="service-select">
          {SERVICE_OPTIONS.map(option => (
            <button
              key={option.id}
              type="button"
              onClick={() => updateFormData('serviceType', option.id)}
              className={`p-4 rounded-xl text-left transition-all duration-200 border-2 ${formData.serviceType === option.id
                ? 'border-blue-600 bg-blue-50/50 shadow-md ring-1 ring-blue-600'
                : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-gray-50'
                }`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-semibold ${formData.serviceType === option.id ? 'text-blue-900' : 'text-gray-700'}`}>
                  {option.label}
                </span>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${formData.serviceType === option.id ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                  }`}>
                  {formData.serviceType === option.id && <Check className="w-3 h-3 text-white" />}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {formData.serviceType && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-300">
          <label className="block text-sm font-semibold text-gray-700 mb-4">Frequency</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" data-cy="frequency-select">
            {frequencyOptions.map(option => (
              <button
                key={option}
                type="button"
                onClick={() => updateFormData('frequency', option)}
                className={`p-4 rounded-xl text-center transition-all duration-200 border-2 ${formData.frequency === option
                  ? 'border-blue-600 bg-blue-50/50 shadow-md ring-1 ring-blue-600'
                  : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-gray-50'
                  }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${formData.frequency === option ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                    }`}>
                    {formData.frequency === option && <Check className="w-3 h-3 text-white" />}
                  </div>
                  <span className={`font-semibold text-sm ${formData.frequency === option ? 'text-blue-900' : 'text-gray-700'}`}>
                    {freqLabels[option]}
                  </span>
                  {freqDiscounts[option] ? (
                    <span className="text-xs text-green-700">{freqDiscounts[option]}</span>
                  ) : null}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Total Square Footage</label>
        <div className="flex flex-wrap gap-2 mb-3" role="radiogroup" aria-label="Square footage range">
          {SQFT_BANDS.map(band => {
            const selected = formData.squareFootageBand === band.label;
            return (
              <button
                key={band.label}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() =>
                  setFormData(prev => ({
                    ...prev,
                    squareFootage: String(band.value),
                    squareFootageBand: band.label,
                  }))
                }
                className={`px-4 h-12 rounded-full font-semibold transition-all duration-200 border-2 ${selected
                  ? 'bg-blue-600 border-blue-600 text-white'
                  : 'bg-white border-gray-300 text-gray-700 hover:border-blue-500'
                  }`}
              >
                {band.label}
              </button>
            );
          })}
        </div>
        <input
          type="number"
          value={formData.squareFootage}
          onChange={(e) =>
            setFormData(prev => ({
              ...prev,
              squareFootage: e.target.value,
              squareFootageBand: '',
            }))
          }
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Or enter exact sq ft, e.g. 1500"
          data-cy="square-footage-input"
        />
      </div>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Bedrooms</label>
          <div className="flex flex-wrap gap-2" data-cy="bedrooms-select">
            {bedroomOptions.map(option => (
              <button
                key={option}
                type="button"
                onClick={() => updateFormData('bedrooms', option)}
                className={`w-12 h-12 rounded-full font-semibold transition-all duration-200 border-2 flex items-center justify-center ${formData.bedrooms === option
                  ? 'border-blue-600 bg-blue-600 text-white shadow-md'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                  }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Bathrooms</label>
          <div className="flex flex-wrap gap-2" data-cy="bathrooms-select">
            {bathroomOptions.map(option => (
              <button
                key={option}
                type="button"
                onClick={() => updateFormData('bathrooms', option)}
                className={`w-12 h-12 rounded-full font-semibold transition-all duration-200 border-2 flex items-center justify-center ${formData.bathrooms === option
                  ? 'border-blue-600 bg-blue-600 text-white shadow-md'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                  }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.excludeAreas}
            onChange={(e) => updateFormData('excludeAreas', e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded"
            data-cy="exclude-areas-checkbox"
          />
          <span className="text-gray-700">I do NOT need my entire home cleaned</span>
        </label>
      </div>

      {formData.excludeAreas && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Areas to Exclude</label>
          <div className="grid grid-cols-2 gap-3">
            {areaOptions.map(area => (
              <label key={area} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.excludedAreas.includes(area)}
                  onChange={() => handleArrayToggle('excludedAreas', area)}
                  className="w-4 h-4 text-blue-600 rounded"
                  data-cy={`exclude-area-${area.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-')}`}
                />
                <span className="text-gray-700">{area}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-3">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Select Add-ons</label>
            <p className="text-sm text-gray-600 mt-1">Optional extras — only what you need</p>
          </div>
          <button
            type="button"
            onClick={() => setShowExtras(!showExtras)}
            className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            data-cy="toggle-extras-button"
          >
            {showExtras ? (
              <>
                <ChevronUp className="w-4 h-4 mr-1" />
                Hide Add-ons
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-1" />
                View Add-ons
              </>
            )}
          </button>
        </div>

        {showExtras && (
          <div className="space-y-3">
            {addonOptions.map(addon => {
              const isSelected = formData.addons.includes(addon.key as AddonId);
              return (
                <div key={addon.key} className="border rounded-lg p-2.5 hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-3 cursor-pointer flex-1">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleAddonToggle(addon.key as AddonId)}
                        className="w-4 h-4 text-blue-600 rounded"
                        data-cy={`extra-${addon.key}`}
                      />
                      <span className="text-gray-700 text-sm">{addon.label}</span>
                    </label>
                    <span className="text-blue-600 font-semibold text-sm">
                      {formatUSD(addon.price)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            House condition?
          </label>
          <select
            value={formData.houseCondition}
            onChange={(e) => updateFormData('houseCondition', e.target.value)}
            className="w-full p-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            data-cy="house-condition-select"
            aria-label="Select house condition"
          >
            {CONDITION_OPTIONS.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">How many people live in a house?</label>
          <select
            value={formData.peopleCount}
            onChange={(e) => updateFormData('peopleCount', e.target.value)}
            className="w-full p-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            data-cy="people-count-select"
            aria-label="Select number of people"
          >
            {peopleOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last cleaning?</label>
          <DatePicker
            date={formData.lastCleaning}
            onDateChange={(date) => updateFormData('lastCleaning', date)}
            placeholder="Select date"
            maxDate={new Date()}
            className="p-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            data-cy="last-cleaning-date"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select date for Service</label>
          <DatePicker
            date={formData.scheduledDate}
            onDateChange={(date) => {
              updateFormData('scheduledDate', date);
              if (formData.scheduledTime) {
                updateFormData('scheduledTime', '');
              }
            }}
            placeholder="Select service date"
            minDate={new Date()}
            className="p-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            data-cy="scheduled-date"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Was it professional?</label>
          <select
            value={formData.wasProfessional ? 'YES' : 'NO'}
            onChange={(e) => updateFormData('wasProfessional', e.target.value === 'YES')}
            className="w-full p-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            data-cy="was-professional-select"
            aria-label="Was the last cleaning professional?"
          >
            <option value="NO">NO</option>
            <option value="YES">YES</option>
          </select>
        </div>
      </div>

      {formData.scheduledDate && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Time</label>
          <TimeSlotPicker
            selectedTime={formData.scheduledTime}
            onTimeChange={(time) => updateFormData('scheduledTime', time)}
            className="mt-1"
            data-cy="time-slot-picker"
          />
        </div>
      )}
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">First Name *</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => updateFormData('firstName', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
            data-cy="first-name-input"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Last Name *</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => updateFormData('lastName', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
            data-cy="last-name-input"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Email *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => updateFormData('email', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
            data-cy="email-input"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Phone Number *</label>
          <input
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            value={formData.phone}
            onChange={(e) => handlePhoneChange(e.target.value, 'phone')}
            onKeyDown={(e) => handlePhoneKeyDown(e, 'phone')}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${phoneError ? 'border-red-500' : 'border-gray-300'
              }`}
            placeholder="(555) 123-4567"
            maxLength={14}
            required
            data-cy="phone-input"
          />
          {phoneError && (
            <p className="mt-1 text-sm text-red-600">{phoneError}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-3">Address *</label>
          <AddressAutocomplete
            value={formData.address}
            onChange={(value) => updateFormData('address', value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Start typing your address..."
            required
            data-cy="address-input"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Apt/Unit #</label>
          <input
            type="text"
            value={formData.aptUnit}
            onChange={(e) => updateFormData('aptUnit', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            data-cy="apt-unit-input"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Key Information *</label>
        <select
          value={formData.keyInfo}
          onChange={(e) => updateFormData('keyInfo', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
          data-cy="key-info-select"
          aria-label="Select key information"
        >
          <option value="">Select key arrangement</option>
          {keyInfoOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Customer Note for Provider</label>
        <textarea
          value={formData.customerNote}
          onChange={(e) => updateFormData('customerNote', e.target.value)}
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Any special instructions or requests..."
          data-cy="customer-note-textarea"
        />
      </div>

      <p className="text-sm text-gray-600 text-center md:text-left">
        No payment required to book · Pay when your clean is complete
      </p>
    </div>
  );

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.serviceType !== '';
      case 2:
        return formData.squareFootage !== '';
      case 3:
        return formData.scheduledDate !== undefined && formData.scheduledTime !== '';
      case 4:
        return formData.firstName !== '' && formData.lastName !== '' && formData.email !== '' && formData.phone !== '' && formData.address !== '' && formData.keyInfo !== '' && validatePhoneNumber(formData.phone);
      default:
        return false;
    }
  };

  return (
    <section id="price-calculator" className="pt-0 md:pb-2 bg-gray-50 md:bg-transparent">
      <div className="container mx-auto px-0 md:px-4">
        <div className="max-w-4xl mx-auto w-full">
          <div ref={calculatorRef} className="bg-white md:rounded-xl md:shadow-lg overflow-hidden">
            <div className="bg-blue-50 p-4 md:p-6 shrink-0 z-10 shadow-sm md:shadow-none">
              <div className="mb-0 md:mb-6">
                <div className="hidden md:flex justify-between text-xs text-gray-600 mb-2">
                  <span>Step {currentStep} of 4</span>
                  <span>{Math.round((currentStep / 4) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-in-out"
                    style={{ width: `${(currentStep / 4) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="md:hidden flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900 text-sm">
                    Step {currentStep}: {
                      currentStep === 1 ? 'Service Selection' :
                        currentStep === 2 ? 'Home Details' :
                          currentStep === 3 ? 'Schedule' : 'Contact'
                    }
                  </span>
                </div>
              </div>

              <div className="hidden md:grid md:grid-cols-4 gap-4">
                {[
                  { number: 1, title: 'Service Selection', subtitle: 'Choose your service type' },
                  { number: 2, title: 'Home Details & Extras', subtitle: 'Size, rooms & add-ons' },
                  { number: 3, title: 'Schedule & Details', subtitle: 'When & house condition' },
                  { number: 4, title: 'Contact', subtitle: 'Your info to confirm booking' }
                ].map(step => (
                  <div key={step.number} className={`text-center p-3 rounded-lg transition-all duration-200 ${step.number === currentStep
                    ? 'bg-blue-600 text-white shadow-lg'
                    : step.number < currentStep
                      ? 'bg-green-100 text-green-800'
                      : 'bg-white text-gray-600'
                    }`}>
                    <div className="flex items-center justify-center mb-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step.number === currentStep
                        ? 'bg-white text-blue-600'
                        : step.number < currentStep
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-300 text-gray-600'
                        }`}>
                        {step.number < currentStep ? <Check className="w-3 h-3" /> : step.number}
                      </div>
                    </div>
                    <h4 className={`text-sm font-semibold mb-1 ${step.number === currentStep ? 'text-white' : ''
                      }`}>
                      {step.title}
                    </h4>
                    <p className={`text-xs mt-1 ${step.number === currentStep
                      ? 'text-blue-50'
                      : step.number < currentStep
                        ? 'text-green-800'
                        : 'text-gray-600'
                      }`}>
                      {step.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 md:p-8">
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}
              {currentStep === 4 && renderStep4()}
            </div>

            <div className="w-full bg-white md:shadow-[0_-8px_30px_rgba(0,0,0,0.12)] border-t border-gray-200 flex flex-col shrink-0 mt-4 rounded-b-2xl">
              {estimatedPrice > 0 && currentStep >= 2 && formData.serviceType && formData.squareFootage && (
                <div className="bg-blue-50/90 backdrop-blur-md py-2 px-4 md:p-6 border-b border-blue-100">
                  <div className="flex flex-row justify-between items-center md:block md:text-center">
                    <div className="flex flex-col">
                      <span className="text-xs md:text-sm font-medium text-gray-600">Estimated Price</span>
                      {breakdown && breakdown.frequencyDiscount > 0 ? (
                        <span className="text-[10px] sm:text-xs text-green-700">
                          Includes {freqDiscounts[formData.frequency]}
                        </span>
                      ) : null}
                    </div>
                    <span className="text-xl md:text-3xl font-bold text-blue-600">{formatUSD(estimatedPrice)}</span>
                  </div>
                </div>
              )}

              <div className="p-3 md:p-6 flex flex-col gap-3">
                {submitError ? (
                  <p className="text-sm text-red-600" role="alert">
                    {submitError}
                  </p>
                ) : null}
                <div className="flex justify-between items-center gap-3">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`flex-1 md:flex-none flex items-center justify-center space-x-1 md:space-x-2 px-4 md:px-6 py-2.5 md:py-3 rounded-lg transition-colors font-medium text-sm md:text-base ${currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200 border'
                    }`}
                  data-cy="previous-step-button"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                {currentStep < 4 ? (
                  <button
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className={`flex-[2] md:flex-none flex items-center justify-center space-x-1 md:space-x-2 px-4 md:px-6 py-2.5 md:py-3 rounded-lg transition-colors font-semibold shadow-sm text-sm md:text-base ${!isStepValid()
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                      : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md'
                      }`}
                    data-cy="next-step-button"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4 relative top-[1px]" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!isStepValid() || isSubmitting}
                    className={`flex-[2] md:flex-none flex items-center justify-center space-x-2 px-4 md:px-8 py-2.5 md:py-3 rounded-lg transition-colors font-semibold shadow-sm text-sm md:text-base ${(!isStepValid() || isSubmitting)
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                      : 'bg-green-600 text-white hover:bg-green-700 hover:shadow-md'
                      }`}
                    data-cy="submit-button"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <Check className="w-4 h-4 hidden sm:block" />
                        <span>Book Now</span>
                      </>
                    )}
                  </button>
                )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
