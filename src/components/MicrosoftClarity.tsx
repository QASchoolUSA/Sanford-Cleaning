import { useEffect } from 'react';

// Extend window interface for TypeScript
declare global {
  interface Window {
    clarity?: {
      q?: any[];
    };
  }
}

const MicrosoftClarity = () => {
  useEffect(() => {
    const clarityProjectId = import.meta.env.VITE_CLARITY_PROJECT_ID;
    
    if (!clarityProjectId || clarityProjectId === 'YOUR_PROJECT_ID') {
      console.warn('Microsoft Clarity Project ID not configured. Please set VITE_CLARITY_PROJECT_ID in your .env file.');
      return;
    }

    // Check if Clarity is already initialized
    if (window.clarity) {
      console.log('Microsoft Clarity already initialized');
      return;
    }

    // Initialize Microsoft Clarity with proper error handling
    try {
      (function(c: any, l: Document, a: string, r: string, i: string, t?: HTMLScriptElement, y?: Element) {
        c[a] = c[a] || function() {
          (c[a].q = c[a].q || []).push(arguments);
        };
        t = l.createElement(r) as HTMLScriptElement;
         t.async = true;
         t.src = "https://www.clarity.ms/tag/" + i;
         y = l.getElementsByTagName(r)[0];
         y.parentNode!.insertBefore(t, y);
        
        // Add error handling for script loading
        t.onerror = function() {
          console.error('Failed to load Microsoft Clarity script');
        };
        
        t.onload = function() {
          console.log('Microsoft Clarity loaded successfully');
        };
      })(window, document, "clarity", "script", clarityProjectId);
    } catch (error) {
      console.error('Error initializing Microsoft Clarity:', error);
    }
  }, []);

  return null;
};

export default MicrosoftClarity;