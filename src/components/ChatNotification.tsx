import React, { useState, useEffect } from 'react';
import { MessageSquare, ChevronDown } from 'lucide-react';

const ChatNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Check if notification was previously hidden
    const hiddenState = localStorage.getItem('chatNotificationHidden');
    if (hiddenState === 'true') {
      setIsHidden(true);
      return;
    }

    const showNotification = () => {
      if (!isHidden) {
        setIsVisible(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 10000); // Hide after 10 seconds
      }
    };

    // Initial delay before the first appearance
    const initialTimeout = setTimeout(showNotification, 7000); // Show after 7 seconds

    // Set an interval to show the notification periodically
    const interval = setInterval(() => {
      showNotification();
    }, 30000); // Re-appear every 30 seconds

    // Cleanup timeouts and intervals on component unmount
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [isHidden]);

  const openChat = () => {
    if ((window as any).chatwootSDK) {
      (window as any).chatwootSDK.toggle();
    }
    setIsVisible(false); // Hide notification when chat is opened
  };

  const hideNotification = () => {
    setIsVisible(false);
    setIsHidden(true);
    localStorage.setItem('chatNotificationHidden', 'true');
  };

  if (!isVisible || isHidden) {
    return null;
  }

  return (
    <div className="fixed bottom-24 right-4 z-50 animate-bounce-slow">
      <div className="max-w-xs bg-white rounded-lg shadow-lg p-4 border border-blue-100">
        <div className="flex items-center justify-between">
          <button 
            onClick={openChat}
            className="flex items-center space-x-3 flex-1"
          >
            <div className="flex-shrink-0 bg-blue-100 rounded-full p-2">
              <MessageSquare className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-gray-900">Have a question?</p>
              <p className="text-xs text-gray-600">Start a chat with our team</p>
            </div>
          </button>
          <button 
            onClick={hideNotification}
            className="ml-3 flex-shrink-0 p-1 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Hide notification"
          >
            <ChevronDown className="h-7 w-7 text-blue-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatNotification;
