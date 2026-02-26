import React from 'react';

type FAQItem = {
    question: string;
    answer: string;
};

type ConversationalFAQProps = {
    title?: string;
    items: FAQItem[];
    className?: string;
};

export default function ConversationalFAQ({
    title = "Frequently Asked Questions",
    items,
    className = ""
}: ConversationalFAQProps) {
    // Generate JSON-LD schema
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };

    return (
        <section className={`py-12 bg-white ${className}`} aria-labelledby="faq-heading">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                    {title}
                </h2>
                <div className="space-y-6">
                    {items.map((item, index) => (
                        <article
                            key={index}
                            className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm"
                            itemScope
                            itemProp="mainEntity"
                            itemType="https://schema.org/Question"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-3" itemProp="name">
                                {item.question}
                            </h3>
                            <div
                                className="text-gray-700 leading-relaxed"
                                itemScope
                                itemProp="acceptedAnswer"
                                itemType="https://schema.org/Answer"
                            >
                                <div itemProp="text">
                                    {/* Dangerously set HTML if we want to allow links in the future, but plain text is safer for strict GEO schema for now */}
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            {/* Inject JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>
    );
}
