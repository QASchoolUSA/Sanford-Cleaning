"use client";

import React from 'react';
import { Calculator } from 'lucide-react';

export default function ScrollToCalculatorButton() {
    return (
        <button
            onClick={() => document.getElementById('price-calculator')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-blue-600 transform hover:-translate-y-0.5"
        >
            <Calculator className="w-5 h-5" />
            Get Instant Quote
        </button>
    );
}
