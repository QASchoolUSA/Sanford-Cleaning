"use client";

import React, { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export default function BeforeAfterSlider() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left; // x position within the element
        const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(position);
    };

    const onMouseMove = (e: globalThis.MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const onTouchMove = (e: globalThis.TouchEvent) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    };

    const stopDragging = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', stopDragging);
            window.addEventListener('touchmove', onTouchMove, { passive: false });
            window.addEventListener('touchend', stopDragging);
        } else {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', stopDragging);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', stopDragging);
        }

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', stopDragging);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', stopDragging);
        };
    }, [isDragging]);

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        handleMove(e.clientX);
    };

    const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
    };

    return (
        <section className="py-16 bg-white overflow-hidden border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <div className="flex items-center justify-center space-x-2 mb-3">
                        <Sparkles className="w-6 h-6 text-blue-600" />
                        <h2 className="text-3xl font-bold text-gray-900">See The Difference</h2>
                        <Sparkles className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-lg text-gray-600">
                        Slide to reveal the professional clean. We handle the mess so you don't have to.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div
                        ref={containerRef}
                        className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none touch-none group"
                        onMouseDown={handleMouseDown}
                        onTouchStart={handleTouchStart}
                    >
                        {/* Base Image (Underneath) - AFTER image because clip-path reveals what's under */}
                        <div className="absolute inset-0 w-full h-full bg-gray-200">
                            <Image
                                src="/after-cleaning.png"
                                alt="Clean room"
                                fill
                                className="object-cover object-center"
                                draggable={false}
                                priority
                            />
                            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md pointer-events-none">
                                After
                            </div>
                        </div>

                        {/* Top Image (Before) - Gets sliced by clip-path */}
                        <div
                            className="absolute inset-0 w-full h-full bg-gray-300"
                            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                        >
                            <Image
                                src="/before-cleaning.png"
                                alt="Messy room"
                                fill
                                className="object-cover object-center"
                                draggable={false}
                                priority
                            />
                            <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md pointer-events-none">
                                Before
                            </div>
                        </div>

                        {/* Slider Line & Handle */}
                        <div
                            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 hover:w-1.5 transition-all duration-150"
                            style={{ left: `calc(${sliderPosition}% - 2px)` }}
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center pointer-events-none border-2 border-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                    <polyline points="9 18 15 12 9 6" opacity="0.5" className="hidden"></polyline>
                                </svg>
                                {/* Custom double ended arrow */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 absolute">
                                    <path d="M8 8l-4 4 4 4M16 8l4 4-4 4" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
