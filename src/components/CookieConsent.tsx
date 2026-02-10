"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CookieConsent({ dictionary, lang }: { dictionary: any; lang: string }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:w-[450px] z-[100] animate-in fade-in slide-in-from-bottom-10 duration-700">
            <div className="glass-morphism p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                {/* Ambient Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-primary/10 blur-[60px] rounded-full group-hover:bg-brand-primary/20 transition-all duration-700"></div>

                <div className="relative z-10 flex flex-col space-y-6">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center">
                                <Cookie className="w-6 h-6 text-brand-primary" />
                            </div>
                            <h3 className="text-xl font-black tracking-tighter text-white">
                                {dictionary.common.cookieBanner.title}
                            </h3>
                        </div>
                        <button
                            onClick={() => setIsVisible(false)}
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <p className="text-sm text-gray-400 font-medium leading-relaxed">
                        {dictionary.common.cookieBanner.desc}{" "}
                        <Link href={`/${lang}/legal/cookies`} className="text-brand-primary hover:underline underline-offset-4 font-bold">
                            {dictionary.footer.legal.cookies}
                        </Link>
                    </p>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={handleAccept}
                            className="flex-1 bg-white text-black py-4 rounded-2xl font-black text-sm hover:scale-105 transition-all active:scale-95 shadow-lg shadow-white/10"
                        >
                            {dictionary.common.cookieBanner.accept}
                        </button>
                        <button
                            onClick={handleDecline}
                            className="px-6 py-4 rounded-2xl border border-white/10 text-gray-400 font-black text-sm hover:text-white hover:bg-white/5 transition-all"
                        >
                            {dictionary.common.cookieBanner.decline}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
