"use client";
import { useEffect } from 'react';

// Extend window interface for TypeScript
declare global {
  interface Window {
    clarity?: ((...args: unknown[]) => void) & { q?: unknown[] };
  }
}

const MicrosoftClarity = () => {
  useEffect(() => {
    const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
    
    if (!clarityProjectId || clarityProjectId === 'YOUR_PROJECT_ID') {
      console.warn('Microsoft Clarity Project ID not configured. Please set NEXT_PUBLIC_CLARITY_PROJECT_ID in your .env file.');
      return;
    }

    // Check if Clarity is already initialized
    if (window.clarity) {
      console.log('Microsoft Clarity already initialized');
      return;
    }

    // Initialize Microsoft Clarity with proper error handling
    try {
      (function(
        c: Record<string, ((...args: unknown[]) => void) & { q?: unknown[] }> & Window,
        l: Document,
        a: string,
        r: string,
        i: string,
        t?: HTMLScriptElement,
        y?: Element
      ) {
        c[a] = c[a] || ((...args: unknown[]) => {
          (c[a].q = c[a].q || []).push(args);
        });
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
      })(window as unknown as Record<string, ((...args: unknown[]) => void) & { q?: unknown[] }> & Window, document, "clarity", "script", clarityProjectId);
    } catch (error) {
      console.error('Error initializing Microsoft Clarity:', error);
    }
  }, []);

  return null;
};

export default MicrosoftClarity;