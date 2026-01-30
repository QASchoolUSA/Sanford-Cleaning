"use client";
import React from 'react';

const ServiceAreas = () => {
    const areas = [
        "Sanford, FL",
        "Lake Mary, FL",
        "Longwood, FL",
        "Altamonte Springs, FL",
        "Winter Springs, FL",
        "Casselberry, FL",
        "Oviedo, FL",
        "Winter Park, FL"
    ];

    return (
        <section className="bg-white border-t border-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
                    Proudly Serving Sanford & Surrounding Areas
                </h2>
                <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                    {areas.map((area) => (
                        <span
                            key={area}
                            className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100 hover:bg-blue-100 transition-colors"
                        >
                            {area}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceAreas;
