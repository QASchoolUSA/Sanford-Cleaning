"use client";
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown, CreditCard, Check } from 'lucide-react';
import { DatePicker } from '@/components/ui/date-picker';
import { TimeSlotPicker } from '@/components/ui/time-slot-picker';
import AddressAutocomplete from '@/components/ui/address-autocomplete';

interface FormData {
  // Step 1: Service Selection
  service: string;
  frequency?: string;
  hours?: number;
  minutes?: number;

  // Step 2: Home Details
  squareFootage: string;
  bedrooms: string;
  bathrooms: string;
  excludeAreas: boolean;
  excludedAreas: string[];
  extras: { name: string; quantity?: number }[];
  extraQuantities: { [key: string]: number };

  // Step 3: Tell Us More
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
  paymentType: string;
}

const PriceCalculator = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const calculatorRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(() => {
    const param = searchParams.get('returnToStep');
    const parsed = param ? Number(param) : NaN;
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
  });
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [maintenancePrice, setMaintenancePrice] = useState(0);
  const [showExtras, setShowExtras] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [formData, setFormData] = useState<FormData>({
    service: '',
    squareFootage: '',
    bedrooms: '1',
    bathrooms: '1',
    excludeAreas: false,
    excludedAreas: [],
    extras: [],
    extraQuantities: {},
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
    paymentType: ''
  });

  const serviceOptions = [
    'Maintenance Cleaning',
    'Deep Cleaning',
    'Move In / Move Out Cleaning',
    'Post-construction Cleaning',
    'Hourly Cleaning'
  ];

  const frequencyOptions = ['Weekly', 'Every Other Week', 'Every 4 Weeks'];

  const bedroomOptions = ['1', '2', '3', '4', '5', '6'];

  const bathroomOptions = ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5'];

  const areaOptions = ['Bedroom', 'Full Bathroom', 'Kitchen', 'Living/Dining Room'];

  const extraOptions = useMemo(() => ([
    { name: 'Behind fridge', price: 20, hasQuantity: false },
    { name: 'Behind oven', price: 20, hasQuantity: false },
    { name: 'Inside oven', price: 35, hasQuantity: false },
    { name: 'Deep Cleaning', price: 40, hasQuantity: false },
    { name: 'Heavy Duty', price: 80, hasQuantity: false },
    { name: 'Inside fridge', price: 30, hasQuantity: false },
    { name: 'Patio windows in/out', price: 10, hasQuantity: true, unit: 'window' },
    { name: 'Interior windows (all, excludes patio)', price: 30, hasQuantity: false },
    { name: 'Wet wipe window blinds', price: 10, hasQuantity: true, unit: 'blind' },
    { name: 'Organization (30 min)', price: 20, hasQuantity: false },
    { name: 'Green Cleaning', price: 0, hasQuantity: false },
    { name: 'Dishes', price: 10, hasQuantity: false },
    { name: 'Laundry & Folding', price: 20, hasQuantity: false },
    { name: 'Carpet Cleaning', price: 20, hasQuantity: true, unit: 'area' }
  ]), []);

  const conditionOptions = ['Very clean', 'Pretty clean', 'Average', 'Pretty dirty', 'Very dirty'];

  const peopleOptions = ['1', '2', '3', '4', '5+'];

  const keyInfoOptions = [
    'Someone will be at home',
    'I will hide the keys',
    'Keep key with provider'
  ];

  const paymentOptions = ['Zelle', 'Cash', 'Check', 'Credit Card'];

  // Phone number formatting and validation functions
  const formatPhoneNumber = (value: string): string => {
    // Remove all non-numeric characters
    const phoneNumber = value.replace(/\D/g, '');

    // Limit to 10 digits
    const limitedPhoneNumber = phoneNumber.substring(0, 10);

    // Format as (XXX) XXX-XXXX
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
    // Remove all non-numeric characters and check if it's exactly 10 digits
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    return cleanPhone.length === 10;
  };

  const handlePhoneChange = (value: string, field: 'phone') => {
    // Extract only numeric characters
    const numericValue = value.replace(/\D/g, '');

    // Limit to 10 digits
    if (numericValue.length <= 10) {
      const formattedValue = formatPhoneNumber(numericValue);
      updateFormData(field, formattedValue);

      // Validate and set error messages
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

    // Handle backspace and delete keys
    if (e.key === 'Backspace' || e.key === 'Delete') {
      const cursorPosition = target.selectionStart || 0;

      // If backspace is pressed and cursor is at a formatting character, move cursor back
      if (e.key === 'Backspace' && cursorPosition > 0) {
        const charBeforeCursor = currentValue[cursorPosition - 1];
        if (charBeforeCursor === '(' || charBeforeCursor === ')' || charBeforeCursor === ' ' || charBeforeCursor === '-') {
          e.preventDefault();
          // Find the previous numeric character and remove it
          const numericValue = currentValue.replace(/\D/g, '');
          if (numericValue.length > 0) {
            const newNumericValue = numericValue.slice(0, -1);
            const newFormattedValue = formatPhoneNumber(newNumericValue);
            updateFormData(field, newFormattedValue);

            // Update validation
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

  // Calculate estimated price based on form data
  useEffect(() => {
    let finalPrice = 0;
    let maintenanceRecurringPrice = 0;

    if (formData.service === 'Hourly Cleaning') {
      // Hourly Cleaning service: $55/hour, no sqft/bed/bath modifiers
      const totalMinutes = (formData.hours || 0) * 60 + (formData.minutes || 0);
      finalPrice = (totalMinutes / 60) * 55;
    } else if (formData.service === 'Move In / Move Out Cleaning') {
      // Move In / Move Out service: special pricing with house condition modifiers
      let basePrice = 277; // Base price for <1000sqft, 1 bedroom, 1 bathroom

      const sqft = parseInt(formData.squareFootage) || 0;
      const bedrooms = parseInt(formData.bedrooms) || 0;
      const bathrooms = parseFloat(formData.bathrooms) || 0;

      // For every 1000 sqft above 1000, add $10
      if (sqft > 1000) {
        const additionalThousands = Math.ceil((sqft - 1000) / 1000);
        basePrice += additionalThousands * 10;
      }

      // For bedrooms above 1, add $10 each
      if (bedrooms > 1) {
        basePrice += (bedrooms - 1) * 10;
      }

      // For bathrooms above 1, add $6.50 each
      if (bathrooms > 1) {
        basePrice += (bathrooms - 1) * 6.5;
      }

      // Add house condition modifier
      switch (formData.houseCondition) {
        case 'Very clean':
          // No additional charge
          break;
        case 'Pretty clean':
          basePrice += 25;
          break;
        case 'Average':
          basePrice += 55;
          break;
        case 'Pretty dirty':
          basePrice += 115;
          break;
        case 'Very dirty':
          basePrice += 195;
          break;
      }

      finalPrice = basePrice;
    } else {
      // All other services start with base price calculation
      let basePrice = 157;

      // Apply sqft/bed/bath modifiers
      const sqft = parseInt(formData.squareFootage) || 0;
      const bedrooms = parseInt(formData.bedrooms) || 0;
      const bathrooms = parseFloat(formData.bathrooms) || 0;

      // For every 1000 sqft above 1000, add $10
      if (sqft > 1000) {
        const additionalThousands = Math.ceil((sqft - 1000) / 1000);
        basePrice += additionalThousands * 10;
      }

      // For bedrooms above 1, add $10 each
      if (bedrooms > 1) {
        basePrice += (bedrooms - 1) * 10;
      }

      // For bathrooms above 1, add $12 each
      if (bathrooms > 1) {
        basePrice += (bathrooms - 1) * 12;
      }

      // For Maintenance Cleaning, calculate both initial and recurring prices
      if (formData.service === 'Maintenance Cleaning' && formData.frequency) {
        // Initial cleaning uses full calculated price
        finalPrice = basePrice;

        // Recurring service uses base frequency pricing plus modifiers
        let baseMaintenancePrice = 0;
        switch (formData.frequency) {
          case 'Weekly':
            baseMaintenancePrice = 109.90;
            break;
          case 'Every Other Week':
            baseMaintenancePrice = 120.89;
            break;
          case 'Every 4 Weeks':
            baseMaintenancePrice = 141.30;
            break;
          default:
            baseMaintenancePrice = 109.90;
        }

        // Apply same modifiers to maintenance price
        maintenanceRecurringPrice = baseMaintenancePrice;

        // Add sqft modifier to maintenance price
        if (sqft > 1000) {
          const additionalThousands = Math.ceil((sqft - 1000) / 1000);
          maintenanceRecurringPrice += additionalThousands * 7; // $7 per 1000 sqft for maintenance
        }

        // Add bedroom modifier to maintenance price
        if (bedrooms > 1) {
          maintenanceRecurringPrice += (bedrooms - 1) * 7; // $7 per extra bedroom for maintenance
        }

        // Add bathroom modifier to maintenance price
        if (bathrooms > 1) {
          maintenanceRecurringPrice += (bathrooms - 1) * 8.2; // $8.20 per extra bathroom for maintenance
        }
      } else {
        // Use the calculated base price for initial cleaning or other services
        finalPrice = basePrice;
      }
    }

    // Add extras pricing (only for non-Hourly Cleaning services)
    if (formData.service !== 'Hourly Cleaning') {
      let extrasTotal = 0;
      let maintenanceExtrasTotal = 0;

      // Extras that apply to both initial and maintenance cleaning
      const maintenanceIncludedExtras = ['Inside oven', 'Dishes', 'Laundry & Folding'];

      formData.extras.forEach(extra => {
        const extraOption = extraOptions.find(opt => opt.name === extra.name);
        if (extraOption) {
          const quantity = extra.quantity || 1;
          const extraCost = extraOption.price * quantity;

          // Add to initial cleaning price
          extrasTotal += extraCost;

          // Add to maintenance price if it's in the included list
          if (maintenanceIncludedExtras.includes(extra.name)) {
            maintenanceExtrasTotal += extraCost;
          }
        }
      });

      finalPrice += extrasTotal;
      // Add specific extras to maintenance recurring price
      if (formData.service === 'Maintenance Cleaning') {
        maintenanceRecurringPrice += maintenanceExtrasTotal;
      }
    }

    // Auto-suggest Heavy Duty if last cleaning was over 90 days ago
    if (formData.lastCleaning) {
      const lastCleaningDate = new Date(formData.lastCleaning);
      const daysSinceLastCleaning = (Date.now() - lastCleaningDate.getTime()) / (1000 * 60 * 60 * 24);

      if (daysSinceLastCleaning > 90 && !formData.wasProfessional) {
        const hasHeavyDuty = formData.extras.some(extra => extra.name === 'Heavy Duty');
        if (!hasHeavyDuty) {
          // Auto-add Heavy Duty suggestion (you might want to show this as a suggestion instead)
          // For now, we'll just note it in the calculation
        }
      }
    }

    // Apply 15% discount to estimates
    const DISCOUNT_MULTIPLIER = 0.85;

    setEstimatedPrice(Math.round(finalPrice * DISCOUNT_MULTIPLIER * 100) / 100); // 15% off
    setMaintenancePrice(Math.round(maintenanceRecurringPrice * DISCOUNT_MULTIPLIER * 100) / 100); // 15% off
  }, [formData, extraOptions]);

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

  const handleExtraToggle = (extraName: string) => {
    setFormData(prev => {
      const existingExtra = prev.extras.find(extra => extra.name === extraName);
      if (existingExtra) {
        // Remove the extra
        return {
          ...prev,
          extras: prev.extras.filter(extra => extra.name !== extraName)
        };
      } else {
        // Add the extra
        const extraOption = extraOptions.find(opt => opt.name === extraName);
        const defaultQuantity = extraOption?.hasQuantity ? 1 : undefined;
        return {
          ...prev,
          extras: [...prev.extras, { name: extraName, quantity: defaultQuantity }]
        };
      }
    });
  };

  const updateExtraQuantity = (extraName: string, quantity: number) => {
    setFormData(prev => ({
      ...prev,
      extras: prev.extras.map(extra =>
        extra.name === extraName ? { ...extra, quantity } : extra
      )
    }));
  };

  const scrollToCalculatorTop = () => {
    if (calculatorRef.current) {
      // Get the calculator container position
      const rect = calculatorRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Calculate position to include some padding above the progress bar
      const targetPosition = rect.top + scrollTop - 100; // 100px padding above

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth'
      });
    }
  };

  // Handle return to specific step via query param and scroll position
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
      // Scroll to top of calculator form after state update
      setTimeout(() => {
        scrollToCalculatorTop();
      }, 100);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      // Scroll to top of calculator form after state update
      setTimeout(() => {
        scrollToCalculatorTop();
      }, 100);
    }
  };

  const handleSubmit = async () => {

    const bookingData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      aptUnit: formData.aptUnit || undefined,
      keyInfo: formData.keyInfo,
      service: formData.service || 'Cleaning Service',
      squareFootage: formData.squareFootage || '',
      bedrooms: Number(formData.bedrooms),
      bathrooms: Number(formData.bathrooms),
      paymentType: formData.paymentType || '',
      paymentComment: formData.customerNote || undefined,
      maintenancePrice: typeof maintenancePrice === 'number' && maintenancePrice > 0 ? maintenancePrice : undefined,
    };
    const bookingId = `BK${Date.now()}`;

    if (formData.paymentType === 'Credit Card') {
      try {
        await fetch('/api/emails/confirm-booking', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ bookingData, bookingId }),
        });
      } catch { }
      // Persist latest payment details for fallback use on the Stripe page
      try {
        const lastStripePayment = {
          amount: typeof estimatedPrice === 'number' ? estimatedPrice : Number(estimatedPrice),
          service: formData.service || 'Cleaning Service',
          email: formData.email || undefined,
          address: formData.address || '',
          squareFootage: formData.squareFootage || '',
        };
        if (!isNaN(lastStripePayment.amount) && lastStripePayment.amount > 0) {
          localStorage.setItem('lastStripePayment', JSON.stringify(lastStripePayment));
        }
      } catch {
        // ignore storage errors
      }

      // Directly create Stripe Checkout session and redirect
      (async () => {
        try {
          const resp = await fetch('/api/stripe/create-checkout-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              amount: typeof estimatedPrice === 'number' ? estimatedPrice : Number(estimatedPrice),
              service: formData.service || 'Cleaning Service',
              customerEmail: formData.email || undefined,
              address: formData.address || '',
              squareFootage: formData.squareFootage || '',
            }),
          });

          if (!resp.ok) {
            const data = await resp.json().catch(() => ({}));
            throw new Error(data?.error || 'Failed to create checkout session.');
          }

          const { url } = await resp.json();
          if (!url) throw new Error('No checkout URL returned.');
          window.location.href = url;
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : String(err);
          console.error('Stripe checkout error:', message);
          alert('Unable to start Stripe checkout. Please try again or choose another payment method.');
        }
      })();
    } else {
      try {
        await fetch('/api/emails/confirm-booking', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ bookingData, bookingId }),
        });
      } catch { }
      // Persist latest booking details so user can still pay later from booking success
      try {
        const lastStripePayment = {
          amount: typeof estimatedPrice === 'number' ? estimatedPrice : Number(estimatedPrice),
          service: formData.service || 'Cleaning Service',
          email: formData.email || undefined,
          address: formData.address || '',
          squareFootage: formData.squareFootage || '',
        };
        if (!isNaN(lastStripePayment.amount) && lastStripePayment.amount > 0) {
          localStorage.setItem('lastStripePayment', JSON.stringify(lastStripePayment));
        }
      } catch {
        // ignore storage errors
      }
      router.push('/booking-success');
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Choose Your Service</label>
        <select
          value={formData.service}
          onChange={(e) => updateFormData('service', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          data-cy="service-select"
        >
          <option value="">Select service</option>
          {serviceOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      {formData.service === 'Maintenance Cleaning' && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Frequency</label>
          <select
            value={formData.frequency || ''}
            onChange={(e) => updateFormData('frequency', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            data-cy="frequency-select"
          >
            <option value="">Select frequency</option>
            {frequencyOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      )}

      {formData.service === 'Hourly Cleaning' && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Hours</label>
            <input
              type="number"
              min="0"
              max="12"
              value={formData.hours || ''}
              onChange={(e) => updateFormData('hours', parseInt(e.target.value) || 0)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="0"
              data-cy="hours-input"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Minutes</label>
            <input
              type="number"
              min="0"
              max="59"
              step="15"
              value={formData.minutes || ''}
              onChange={(e) => updateFormData('minutes', parseInt(e.target.value) || 0)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="0"
              data-cy="minutes-input"
            />
          </div>
        </div>
      )}
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Total Square Footage</label>
        <input
          type="number"
          value={formData.squareFootage}
          onChange={(e) => updateFormData('squareFootage', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g. 1500"
          data-cy="square-footage-input"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Bedrooms</label>
          <select
            value={formData.bedrooms}
            onChange={(e) => updateFormData('bedrooms', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            data-cy="bedrooms-select"
          >
            {bedroomOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Bathrooms</label>
          <select
            value={formData.bathrooms}
            onChange={(e) => updateFormData('bathrooms', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            data-cy="bathrooms-select"
          >
            {bathroomOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
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
            <label className="block text-sm font-semibold text-gray-700">Select Extras</label>
            <p className="text-sm text-gray-600 mt-1">✨ Enhance your cleaning with our premium extras</p>
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
                Hide Extras
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-1" />
                View Extras
              </>
            )}
          </button>
        </div>

        {showExtras && (
          <div className="space-y-3">
            {extraOptions.map(extra => {
              const isSelected = formData.extras.some(e => e.name === extra.name);
              const selectedExtra = formData.extras.find(e => e.name === extra.name);

              return (
                <div key={extra.name} className="border rounded-lg p-3 hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-3 cursor-pointer flex-1">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleExtraToggle(extra.name)}
                        className="w-4 h-4 text-blue-600 rounded"
                        data-cy={`extra-${extra.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '').replace(/\//g, '-')}`}
                      />
                      <span className="text-gray-700">{extra.name}</span>
                    </label>
                    <span className="text-blue-600 font-semibold">
                      ${extra.price}{extra.hasQuantity ? ` per ${extra.unit}` : ''}
                      {extra.price === 0 ? ' (Free)' : ''}
                    </span>
                  </div>

                  {isSelected && extra.hasQuantity && (
                    <div className="mt-3 flex items-center space-x-2">
                      <label className="text-sm text-gray-600">Quantity:</label>
                      <input
                        type="number"
                        min="1"
                        max="20"
                        value={selectedExtra?.quantity || 1}
                        onChange={(e) => updateExtraQuantity(extra.name, parseInt(e.target.value) || 1)}
                        className="w-20 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        data-cy={`extra-quantity-${extra.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '').replace(/\//g, '-')}`}
                      />
                      <span className="text-sm text-gray-500">{extra.unit}(s)</span>
                    </div>
                  )}
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
          >
            {conditionOptions.map(option => (
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

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Payment Type</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {paymentOptions.map(option => (
            <label key={option} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
              <input
                type="radio"
                name="paymentType"
                value={option}
                checked={formData.paymentType === option}
                onChange={(e) => updateFormData('paymentType', e.target.value)}
                className="w-4 h-4 text-blue-600 mr-3"
                data-cy={`payment-type-${option.toLowerCase().replace(/\s+/g, '-')}`}
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.service !== '';
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
    <section id="price-calculator" className="pt-0 pb-2 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Removed duplicate header; handled by parent section/card header */}

          <div ref={calculatorRef} className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-blue-50 p-6">
              {/* Overall Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-gray-600 mb-2">
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

              {/* Step Indicators - Mobile Compact Version */}
              <div className="md:hidden">
                <div className="flex items-center justify-between">
                  {[
                    { number: 1, title: 'Service Selection' },
                    { number: 2, title: 'Home Details & Extras' },
                    { number: 3, title: 'Schedule & Details' },
                    { number: 4, title: 'Contact & Payment' }
                  ].map((step, index) => (
                    <div key={step.number} className="flex items-center">
                      <div className={`flex flex-col items-center ${step.number === currentStep
                          ? 'text-blue-600'
                          : step.number < currentStep
                            ? 'text-green-600'
                            : 'text-gray-400'
                        }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-1 ${step.number === currentStep
                            ? 'bg-blue-600 text-white'
                            : step.number < currentStep
                              ? 'bg-green-600 text-white'
                              : 'bg-gray-300 text-gray-600'
                          }`}>
                          {step.number < currentStep ? <Check className="w-4 h-4" /> : step.number}
                        </div>
                        <span className="text-xs font-medium text-center leading-tight max-w-16">
                          {step.title.split(' ')[0]}
                          {step.title.split(' ')[1] && <br />}
                          {step.title.split(' ').slice(1).join(' ')}
                        </span>
                      </div>
                      {index < 3 && (
                        <div className={`w-4 h-0.5 mx-1 ${step.number < currentStep ? 'bg-green-600' : 'bg-gray-300'
                          }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Indicators - Desktop Version */}
              <div className="hidden md:grid md:grid-cols-4 gap-4">
                {[
                  { number: 1, title: 'Service Selection', subtitle: 'Choose your service type' },
                  { number: 2, title: 'Home Details & Extras', subtitle: 'Size, rooms & add-ons' },
                  { number: 3, title: 'Schedule & Details', subtitle: 'When & house condition' },
                  { number: 4, title: 'Contact & Payment', subtitle: 'Your info & payment method' }
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
                    <p className={`text-xs opacity-75 ${step.number === currentStep ? 'text-blue-100' : ''
                      }`}>
                      {step.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <div className="p-8">
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}
              {currentStep === 4 && renderStep4()}
            </div>

            {/* Price Estimate - Only show after sufficient information is provided */}
            {estimatedPrice > 0 && currentStep >= 2 && formData.service && formData.squareFootage && (
              <div className="bg-blue-50 p-6 border-t">
                {formData.service === 'Maintenance Cleaning' && maintenancePrice > 0 ? (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 text-center mb-4">Maintenance Cleaning Pricing</h3>

                    {/* Initial Cleaning Price */}
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-gray-900">Initial Cleaning</h4>
                          <p className="text-sm text-gray-600">First-time deep clean to establish baseline</p>
                        </div>
                        <div className="text-2xl font-bold text-blue-600">
                          ${estimatedPrice.toFixed(2)}
                        </div>
                      </div>
                    </div>

                    {/* Recurring Maintenance Price */}
                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-gray-900">Ongoing Maintenance</h4>
                          <p className="text-sm text-gray-600">
                            {formData.frequency} service
                          </p>
                        </div>
                        <div className="text-2xl font-bold text-green-600">
                          ${maintenancePrice.toFixed(2)}
                        </div>
                      </div>
                    </div>

                    <div className="text-xs text-gray-500 text-center">
                      💡 You&apos;ll pay the initial cleaning price for your first service, then the maintenance price for ongoing cleanings
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">Estimated Price</p>
                    <p className="text-3xl font-bold text-blue-600">${estimatedPrice.toFixed(2)}</p>
                    {formData.service === 'Maintenance Cleaning' && !formData.frequency && (
                      <p className="text-sm text-orange-600 mt-1">*Select frequency to see recurring pricing</p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">*Final price may vary based on actual conditions</p>
                  </div>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="bg-gray-50 p-6 flex justify-between items-center">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors ${currentStep === 1
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-600 text-white hover:bg-gray-700'
                  }`}
                data-cy="previous-step-button"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {currentStep < 4 ? (
                <button
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors ${!isStepValid()
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  data-cy="next-step-button"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!isStepValid()}
                  className={`flex items-center space-x-2 px-8 py-3 rounded-lg transition-colors ${!isStepValid()
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  data-cy="submit-button"
                >
                  {formData.paymentType === 'Credit Card' ? (
                    <>
                      <CreditCard className="w-4 h-4" />
                      <span>Proceed to Payment</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Continue</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
