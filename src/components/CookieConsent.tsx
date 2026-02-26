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
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-[360px] z-[100] animate-in fade-in slide-in-from-bottom-5 duration-700">
            <div className="glass-morphism p-5 rounded-[1.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                {/* Ambient Glow */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-primary/10 blur-[40px] rounded-full group-hover:bg-brand-primary/20 transition-all duration-700"></div>

                <div className="relative z-10 flex flex-col space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-9 h-9 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center shrink-0">
                                <Cookie className="w-5 h-5 text-brand-primary" />
                            </div>
                            <h3 className="text-sm font-black tracking-tight text-white leading-tight">
                                {dictionary.common.cookieBanner.title}
                            </h3>
                        </div>
                        <button
                            onClick={() => setIsVisible(false)}
                            className="text-gray-500 hover:text-white transition-colors p-1"
                            aria-label="Close"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
                        {dictionary.common.cookieBanner.desc}{" "}
                        <Link href={`/${lang}/legal/cookies`} className="text-brand-primary hover:underline underline-offset-4 font-bold">
                            {dictionary.footer.legal.cookies}
                        </Link>
                    </p>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleAccept}
                            className="flex-1 bg-white text-black py-2.5 rounded-xl font-black text-[11px] uppercase tracking-wider hover:scale-105 transition-all active:scale-95 shadow-lg shadow-white/5"
                        >
                            {dictionary.common.cookieBanner.accept}
                        </button>
                        <button
                            onClick={handleDecline}
                            className="px-4 py-2.5 rounded-xl border border-white/10 text-gray-500 font-extrabold text-[10px] uppercase tracking-wider hover:text-white hover:bg-white/5 transition-all"
                        >
                            {dictionary.common.cookieBanner.decline}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
