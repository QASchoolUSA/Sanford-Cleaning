import React, { useEffect } from 'react';

// Declare Tawk_API on window object
declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

const FloatingChatButton = () => {
  useEffect(() => {
    // Exact Tawk.to script implementation
    var Tawk_API = window.Tawk_API || {};
    var Tawk_LoadStart = new Date();
    
    (function(){
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/68a64afc4ebc491927e0d78f/1j34p9qkd';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin','*');
      if (s0 && s0.parentNode) {
        s0.parentNode.insertBefore(s1,s0);
      }
    })();

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src*="embed.tawk.to"]');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  const openTawkToChat = () => {
    // Check if Tawk_API is available and open the chat
    if (window.Tawk_API) {
      window.Tawk_API.toggle();
    }
  };

  return (
    <button
      onClick={openTawkToChat}
      className="fixed bottom-6 right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
      aria-label="Chat with us"
    >
      {/* Chat Icon SVG */}
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
      </svg>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
        Chat with us
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </button>
  );
};

export default FloatingChatButton;