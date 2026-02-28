"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

export default function BookingSuccessAnimated() {
    const router = useRouter();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        const redirect = setTimeout(() => {
            router.push("/");
        }, 5000);

        return () => {
            clearInterval(timer);
            clearTimeout(redirect);
        };
    }, [router]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
            <div className="animate-in zoom-in duration-700 ease-out mb-8">
                <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center shadow-inner relative">
                    <div className="absolute inset-0 rounded-full bg-green-400/20 animate-ping opacity-75"></div>
                    <CheckCircle2 className="w-20 h-20 text-green-600 relative z-10" />
                </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center tracking-tight">
                Booking Confirmed!
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 text-center max-w-lg">
                Your payment was successful and your appointment is scheduled. We've sent a confirmation email with all the details.
            </p>

            {/* Loading Bar */}
            <div className="w-full max-w-xs h-1.5 bg-gray-200 rounded-full overflow-hidden mb-4">
                <div
                    className="h-full bg-green-500 transition-all ease-linear"
                    style={{
                        width: `${((5 - countdown) / 5) * 100}%`,
                        transitionDuration: '1000ms'
                    }}
                />
            </div>

            <div className="text-sm font-medium text-gray-500 animate-pulse">
                Redirecting to homepage in {countdown} seconds...
            </div>
        </div>
    );
}
