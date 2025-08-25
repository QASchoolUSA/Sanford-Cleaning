import React, { useRef, useEffect, useState } from 'react';
import './address-autocomplete.css';

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  required?: boolean;
}

interface AddressComponents {
  street_number?: string;
  route?: string;
  locality?: string;
  administrative_area_level_1?: string;
  postal_code?: string;
  country?: string;
}

// Type for Google Maps Autocomplete
type GoogleAutocomplete = {
  addListener: (event: string, handler: () => void) => void;
  getPlace: () => {
    address_components?: Array<{
      long_name: string;
      short_name: string;
      types: string[];
    }>;
    formatted_address?: string;
    geometry?: {
      location: {
        lat: () => number;
        lng: () => number;
      };
    };
  };
};

const AddressAutocomplete: React.FC<AddressAutocompleteProps> = ({
  value,
  onChange,
  className = '',
  placeholder = 'Enter your address',
  required = false
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<GoogleAutocomplete | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isUserTyping, setIsUserTyping] = useState(false);
  const [lastAutocompleteValue, setLastAutocompleteValue] = useState('');
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Load Google Maps API script dynamically
    const loadGoogleMapsAPI = () => {
      const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
      
      if (!apiKey || apiKey === 'YOUR_GOOGLE_MAPS_API_KEY') {
        console.warn('Google Maps API key not configured. Address autocomplete will not work.');
        return;
      }

      // Check if Google Maps API is already loaded
      if ((window as any).google && (window as any).google.maps && (window as any).google.maps.places) {
        setIsLoaded(true);
        return;
      }

      // Check if script is already being loaded
      if (document.querySelector('script[src*="maps.googleapis.com"]')) {
        // Script is loading, wait for it
        const checkGoogleMaps = () => {
          if ((window as any).google && (window as any).google.maps && (window as any).google.maps.places) {
            setIsLoaded(true);
          } else {
            setTimeout(checkGoogleMaps, 100);
          }
        };
        checkGoogleMaps();
        return;
      }

      // Load the script
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        setIsLoaded(true);
      };
      
      script.onerror = () => {
        console.error('Failed to load Google Maps API');
      };
      
      document.head.appendChild(script);
    };

    loadGoogleMapsAPI();
  }, []);

  // Store onChange in a ref to avoid recreating autocomplete on every change
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useEffect(() => {
    if (!isLoaded || !inputRef.current) return;

    // Initialize Google Places Autocomplete only once
    const google = (window as any).google;
    
    if (!google || !google.maps || !google.maps.places) {
      return;
    }

    // Only create autocomplete if it doesn't exist
    if (!autocompleteRef.current) {
      autocompleteRef.current = new google.maps.places.Autocomplete(
        inputRef.current,
        {
          types: ['address'],
          componentRestrictions: { country: 'us' },
          fields: ['formatted_address']
        }
      );

      // Handle place selection
      const handlePlaceSelect = () => {
        if (autocompleteRef.current) {
          const place = autocompleteRef.current.getPlace();
          if (place && place.formatted_address) {
            console.log('Address selected from autocomplete:', place.formatted_address);
            setIsUserTyping(false);
            setLastAutocompleteValue(place.formatted_address);
            onChangeRef.current(place.formatted_address);
          }
        }
      };

      if (autocompleteRef.current) {
         autocompleteRef.current.addListener('place_changed', handlePlaceSelect);
       }
     }

     // Cleanup
     return () => {
       if (autocompleteRef.current && (window as any).google) {
         const google = (window as any).google;
         google.maps.event.clearInstanceListeners(autocompleteRef.current);
         autocompleteRef.current = null;
       }
     };
  }, [isLoaded]); // Remove onChange from dependencies

  // Effect to handle potential Google Places interference with user input
  useEffect(() => {
    if (!inputRef.current || !isUserTyping) return;

    const inputElement = inputRef.current;
    
    // Less aggressive protection to avoid interfering with autocomplete dropdown
    const protectUserInput = () => {
      // Only protect if user is actively typing and the value differs significantly
      if (isUserTyping && inputElement.value !== value && Math.abs(inputElement.value.length - value.length) > 1) {
        console.log('Detected significant interference! Restoring user input:', value, 'from:', inputElement.value);
        inputElement.value = value;
      }
    };

    // Use less frequent checking to avoid interfering with dropdown selection
    const intervalId = setInterval(protectUserInput, 200); // Less frequent checking

    return () => {
      clearInterval(intervalId);
    };
  }, [value, isUserTyping]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    console.log('User typing address:', newValue, 'Previous autocomplete:', lastAutocompleteValue);
    
    // Only set typing state if this is actual user input (not autocomplete selection)
    if (e.nativeEvent && (e.nativeEvent as InputEvent).inputType !== 'insertReplacementText') {
      setIsUserTyping(true);
    }
    
    // Always update the value
    onChangeRef.current(newValue);
    
    // If user clears the field completely, reset autocomplete tracking
    if (newValue.length === 0) {
      setLastAutocompleteValue('');
      setIsUserTyping(false);
      console.log('Field cleared, reset autocomplete tracking');
    }
    // Only reset autocomplete tracking if user significantly modifies the address
    // (removes more than half of the original autocomplete value)
    else if (lastAutocompleteValue && lastAutocompleteValue.length > 10) {
      const significantPortion = lastAutocompleteValue.substring(0, Math.floor(lastAutocompleteValue.length / 2));
      if (!newValue.toLowerCase().includes(significantPortion.toLowerCase())) {
        setLastAutocompleteValue('');
        console.log('Reset autocomplete tracking due to significant change');
      }
    }
    
    // Clear any existing timeout to debounce the typing state reset
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    
    // Set a new timeout to clear the typing state (shorter delay for better UX)
    typingTimeoutRef.current = setTimeout(() => {
      if (inputRef.current && inputRef.current.value === newValue) {
        setIsUserTyping(false);
        console.log('User stopped typing, final address value:', newValue);
      }
      typingTimeoutRef.current = null;
    }, 1000); // Reduced to 1 second delay
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Prevent form submission when Enter is pressed on autocomplete suggestions
    if (e.key === 'Enter') {
      e.preventDefault();
      // If user pressed Enter while typing, stop the typing state after a delay
      setTimeout(() => setIsUserTyping(false), 500);
    }
  };

  const handleFocus = () => {
    // Don't immediately set typing state on focus to allow autocomplete dropdown to work
    console.log('Address field focused');
  };

  const handleBlur = () => {
    // Stop tracking user typing when input loses focus, with delay to allow autocomplete selection
    setTimeout(() => {
      setIsUserTyping(false);
      console.log('Address field blurred, stopped typing tracking');
    }, 500); // Increased delay to allow autocomplete selection
  };

  return (
    <div className="address-autocomplete-container">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`address-autocomplete-input ${!isLoaded ? 'address-autocomplete-loading' : ''} ${className}`}
        placeholder={placeholder}
        required={required}
      />
      <div className="address-autocomplete-icon">
        📍
      </div>
    </div>
  );
};

export default AddressAutocomplete;