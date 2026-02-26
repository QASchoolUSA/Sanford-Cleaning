"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, Phone, Calculator, X } from 'lucide-react';

export default function FloatingInteractiveWidgets() {
    const [showWidgets, setShowWidgets] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Only show after a slight scroll so it doesn't immediately block hero components
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowWidgets(true);
            } else {
                setShowWidgets(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const phoneNumber = "(321) 236-0618";
    const rawPhone = "3212360618";
    const smsHref = `sms:${rawPhone}&body=Hi Sanford Cleaning, I'd like to get a quick quote!`;

    return (
        <>
            {/* --- DESKTOP FLOATING SMS WIDGET --- */}
            {/* Hidden on mobile, shows on md+ screens */}
            <div
                className={`hidden md:flex fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${showWidgets ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative flex items-center">
                    {/* Expanded text tab */}
                    <div className={`absolute right-full mr-4 bg-white px-4 py-3 rounded-xl shadow-xl border border-gray-100 transition-all duration-300 origin-right whitespace-nowrap flex flex-col items-end ${isHovered ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none'}`}>
                        <p className="font-semibold text-gray-900 mb-1">Text us for a quick quote!</p>
                        <a href={smsHref} className="text-blue-600 font-bold hover:underline flex items-center">
                            {phoneNumber}
                        </a>
                        {/* Tailwind Triangle */}
                        <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-y-8 border-y-transparent border-l-8 border-l-white"></div>
                    </div>

                    {/* Main FAB Button */}
                    <a
                        href={smsHref}
                        className="w-14 h-14 bg-blue-600 rounded-full text-white shadow-2xl flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition-all duration-200 border-2 border-white cursor-pointer group animate-bounce-slow"
                        aria-label="Send SMS"
                    >
                        <MessageCircle className="w-6 h-6 group-hover:hidden" />
                        <MessageCircle className="w-6 h-6 hidden group-hover:block" fill="currentColor" />
                    </a>
                </div>
            </div>

            {/* --- MOBILE STICKY CTA BAR --- */}
            {/* Shows only on mobile (below md break) */}
            <div className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] transition-transform duration-300 ${showWidgets ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className="flex px-2 py-3 gap-2">
                    <a
                        href="tel:3212360618"
                        className="flex-1 bg-gray-100 text-gray-900 font-semibold py-3 rounded-lg flex items-center justify-center border border-gray-200 hover:bg-gray-200 active:scale-95 transition-all text-sm"
                    >
                        <Phone className="w-4 h-4 mr-2 text-gray-700" />
                        Call Now
                    </a>
                    <Link
                        href="/custom-quote"
                        className="flex-[1.5] bg-blue-600 text-white font-bold py-3 rounded-lg flex items-center justify-center shadow-md hover:bg-blue-700 active:scale-95 transition-all text-sm"
                    >
                        <Calculator className="w-4 h-4 mr-2" />
                        Instant Quote
                    </Link>
                </div>
                {/* iOS Safe Area Padding */}
                <div className="pb-safe" />
            </div>
        </>
    );
}
