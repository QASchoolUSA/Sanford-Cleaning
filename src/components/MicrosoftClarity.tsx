import { useEffect } from 'react';

const MicrosoftClarity = () => {
  useEffect(() => {
    const clarityProjectId = import.meta.env.VITE_CLARITY_PROJECT_ID;
    
    if (!clarityProjectId || clarityProjectId === 'YOUR_PROJECT_ID') {
      console.warn('Microsoft Clarity Project ID not configured. Please set VITE_CLARITY_PROJECT_ID in your .env file.');
      return;
    }

    // Initialize Microsoft Clarity
    (function(c: any, l: Document, a: string, r: string, i: string, t?: HTMLScriptElement, y?: Element) {
      c[a] = c[a] || function() {
        (c[a].q = c[a].q || []).push(arguments);
      };
      t = l.createElement(r) as HTMLScriptElement;
      t.async = true;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode!.insertBefore(t, y);
    })(window, document, "clarity", "script", clarityProjectId);
  }, []);

  return null;
};

export default MicrosoftClarity;