"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { X, Gift } from 'lucide-react';
import Link from 'next/link';

export default function ExitIntentPopup() {
    const [showPopup, setShowPopup] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);

    // Use useCallback so we can safely remove the listener
    const mouseEvent = useCallback((e: globalThis.MouseEvent) => {
        // If we've already triggered it this session, don't show it again
        if (hasTriggered) return;

        // If mouse leaves top of viewport (usually heading for back button or URL bar)
        if (e.clientY < 50) {
            setShowPopup(true);
            setHasTriggered(true);
            sessionStorage.setItem('exitPopupShown', 'true');

            // Remove event listener immediately so it doesn't trigger again
            document.removeEventListener('mouseleave', mouseEvent);
        }
    }, [hasTriggered]);

    useEffect(() => {
        // Check if we've shown it this session
        if (sessionStorage.getItem('exitPopupShown')) {
            return;
        }

        // --- DESKTOP ONLY: Mouse leave viewport targeting top edge
        // Disable on mobile entirely to prevent annoying scroll-up triggers
        if (window.innerWidth < 768) return;

        document.addEventListener('mouseleave', mouseEvent);

        return () => {
            document.removeEventListener('mouseleave', mouseEvent);
        };
    }, [hasTriggered, mouseEvent]);

    if (!showPopup) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
                onClick={() => setShowPopup(false)}
            />

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
                <button
                    onClick={() => setShowPopup(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 z-10 p-1 bg-white/50 rounded-full"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-center text-white">
                    <Gift className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                    <h2 className="text-3xl font-bold mb-2">Wait! Don't leave your house dirty.</h2>
                    <p className="text-blue-100 text-lg">Get <span className="font-bold text-yellow-300">$20 OFF</span> your first cleaning if you book today.</p>
                </div>

                <div className="p-8 text-center bg-gray-50 text-gray-900">
                    <p className="mb-6 font-medium">Use code <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-lg font-bold border border-blue-200">CLEAN20</span> at checkout.</p>

                    <Link
                        href="/custom-quote"
                        onClick={() => setShowPopup(false)}
                        className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all mb-3 text-lg"
                    >
                        Claim My $20 Off Now
                    </Link>

                    <button
                        onClick={() => setShowPopup(false)}
                        className="text-gray-500 hover:text-gray-800 text-sm font-medium underline"
                    >
                        No thanks, I prefer a dirty house
                    </button>
                </div>
            </div>
        </div>
    );
}
