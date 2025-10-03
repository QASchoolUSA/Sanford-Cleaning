import React, { useState, useRef, useEffect } from 'react';
import './address-autocomplete.css';

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  required?: boolean;
}

// Geoapify API response types
interface GeoapifySuggestion {
  properties: {
    formatted: string;
    address_line1?: string;
    address_line2?: string;
    city?: string;
    state?: string;
    postcode?: string;
    country?: string;
    lat?: number;
    lon?: number;
  };
  geometry?: {
    coordinates: [number, number];
  };
}

const AddressAutocomplete: React.FC<AddressAutocompleteProps> = ({
  value,
  onChange,
  className = '',
  placeholder = 'Enter your address',
  required = false
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [suggestions, setSuggestions] = useState<GeoapifySuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Debounced search function
  const searchAddresses = async (query: string) => {
    if (query.length < 2) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    // Cancel previous request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new abort controller
    abortControllerRef.current = new AbortController();

    setIsLoading(true);
    
    try {
      const apiKey = import.meta.env.VITE_GEOAPIFY_API_KEY || '15fa9bcbf42d4beb9af335c51886b984';
      const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(query)}&limit=5&apiKey=${apiKey}&filter=countrycode:us&format=json`;
      
      const response = await fetch(url, {
        signal: abortControllerRef.current.signal
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.results && Array.isArray(data.results)) {
        setSuggestions(data.results);
        setShowDropdown(true);
        setSelectedIndex(-1);
      } else {
        setSuggestions([]);
        setShowDropdown(false);
      }
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        console.error('Error fetching address suggestions:', error);
        setSuggestions([]);
        setShowDropdown(false);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Handle input changes with debouncing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    
    // Clear existing timeout
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    
    // Set new timeout for debounced search
    debounceTimeoutRef.current = setTimeout(() => {
      searchAddresses(newValue);
    }, 300);
  };

  // Handle suggestion selection
  const handleSuggestionSelect = (suggestion: GeoapifySuggestion) => {
    const formattedAddress = suggestion.properties.formatted;
    onChange(formattedAddress);
    setShowDropdown(false);
    setSuggestions([]);
    setSelectedIndex(-1);
    
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown || suggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          handleSuggestionSelect(suggestions[selectedIndex]);
        }
        break;
      case 'Escape':
        setShowDropdown(false);
        setSelectedIndex(-1);
        break;
    }
  };

  // Handle clicks outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return (
    <div className="address-autocomplete-container" ref={dropdownRef}>
      <div className="address-autocomplete-input-wrapper">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="address-autocomplete-input"
          autoComplete="off"
        />
        <span className="address-autocomplete-icon">📍</span>
       </div>
       
       {showDropdown && suggestions.length > 0 && (
         <div className="address-autocomplete-dropdown">
           {suggestions.map((suggestion, index) => (
             <div
               key={`${suggestion.properties.formatted}-${index}`}
               className={`address-autocomplete-suggestion ${
                 index === selectedIndex ? 'selected' : ''
               }`}
               onClick={() => handleSuggestionSelect(suggestion)}
               onMouseEnter={() => setSelectedIndex(index)}
             >
              <div className="suggestion-main">
                {suggestion.properties.formatted}
              </div>
              {suggestion.properties.address_line2 && (
                <div className="suggestion-secondary">
                  {suggestion.properties.address_line2}
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="address-autocomplete-loading">
              Searching...
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AddressAutocomplete;