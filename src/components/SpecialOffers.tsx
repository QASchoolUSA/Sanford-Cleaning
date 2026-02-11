import Link from 'next/link';
import { Tag, Sparkles, Clock, ArrowRight, CheckCircle } from 'lucide-react';

export default function SpecialOffers() {
    return (
        <section className="py-12 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400 rounded-full mix-blend-overlay blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-10">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-400/20 text-yellow-300 text-sm font-bold tracking-wide uppercase mb-4 border border-yellow-400/30">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Limited Time Offers
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Sanford's Best Cleaning Deals
                    </h2>
                    <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                        Save big on your first professional cleaning or lock in long-term savings with our recurring plans.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {/* Offer 1: First Time Client */}
                    <div className="bg-white rounded-2xl p-1 shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                        <div className="bg-gradient-to-b from-white to-blue-50 rounded-xl p-8 h-full flex flex-col relative border border-blue-100">
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                                NEW CUSTOMERS
                            </div>

                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">First Time Cleaning</h3>
                                    <div className="flex items-baseline space-x-2">
                                        <span className="text-4xl font-extrabold text-blue-600">$20 OFF</span>
                                        <span className="text-gray-500 line-through text-lg">Regular Price</span>
                                    </div>
                                </div>
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <Tag className="w-8 h-8 text-blue-600" />
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8 flex-grow">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Valid for any <strong>Deep</strong> or <strong>Move-In/Out</strong> Clean</span>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Includes all premium supplies & equipment</span>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                    <span>100% Satisfaction Guarantee</span>
                                </li>
                            </ul>

                            <div className="mt-auto">
                                <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                                    <span className="text-sm text-gray-600 font-medium">Use Promo Code:</span>
                                    <span className="text-lg font-mono font-bold text-blue-700 tracking-wider">WELCOME20</span>
                                </div>
                                <Link
                                    href="/booking"
                                    className="block w-full text-center py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-200"
                                >
                                    Claim $20 OFF Now
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Offer 2: Recurring Service */}
                    <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-1 shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                        <div className="bg-white rounded-xl p-8 h-full flex flex-col relative">
                            <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                                MOST POPULAR
                            </div>

                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Recurring Service</h3>
                                    <div className="flex items-baseline space-x-2">
                                        <span className="text-4xl font-extrabold text-yellow-600">30% OFF</span>
                                        <span className="text-gray-500 text-sm font-medium">First Service</span>
                                    </div>
                                </div>
                                <div className="bg-yellow-100 p-3 rounded-full">
                                    <Clock className="w-8 h-8 text-yellow-600" />
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8 flex-grow">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                                    <span><strong>30% OFF</strong> your first recurring visit</span>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                                    <span>Lock in <strong>15-20% OFF</strong> all future visits</span>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                                    <span>No contracts, cancel anytime</span>
                                </li>
                            </ul>

                            <div className="mt-auto">
                                <div className="flex items-center justify-between bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                                    <span className="text-sm text-gray-600 font-medium">Select Frequency:</span>
                                    <span className="text-sm font-bold text-yellow-700">Weekly / Bi-Weekly</span>
                                </div>
                                <Link
                                    href="/booking?service=Maintenance%20Cleaning"
                                    className="block w-full text-center py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl transition-colors shadow-lg"
                                >
                                    Start Recurring & Save
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <Link href="/custom-quote" className="inline-flex items-center text-white hover:text-blue-200 font-semibold transition-colors">
                        Not sure yet? Get a custom quote first <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
