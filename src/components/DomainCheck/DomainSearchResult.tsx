"use client";

import React from "react";
import { CheckCircle2, XCircle, MessageCircle } from "lucide-react";

interface DomainSearchResultProps {
    result: {
        domain: string;
        available: boolean;
        error?: string;
    };
    idx: number;
    t: any;
}

const DomainSearchResult = ({ result, idx, t }: DomainSearchResultProps) => {
    return (
        <div className="animate-fade-in-up" style={{ animationDelay: `${idx * 50}ms` }}>
            <div className={`group relative overflow-hidden rounded-2xl p-4 border transition-all duration-300 ${result.error
                ? "border-red-500/10 bg-red-500/5"
                : result.available
                    ? "border-brand-primary/20 bg-brand-primary/5 hover:border-brand-primary/40"
                    : "border-white/5 bg-white/2 hover:border-white/10"
                }`}>
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className={`shrink-0 ${result.error
                            ? "text-red-500"
                            : result.available
                                ? "text-brand-primary"
                                : "text-gray-400"
                            }`}>
                            {result.error ? <XCircle className="w-5 h-5" /> : result.available ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                        </div>

                        <div className="flex flex-col">
                            <span className={`text-sm md:text-base font-bold tracking-tight uppercase ${result.available ? "text-white" : "text-gray-400"
                                }`}>
                                {result.domain}
                            </span>
                            <span className={`text-[10px] font-medium uppercase tracking-widest ${result.available ? "text-brand-primary" : "text-gray-400"
                                }`}>
                                {result.error ? t.apiError : result.available ? t.available : t.taken}
                            </span>
                        </div>
                    </div>

                    {result.available && (
                        <a
                            href={`https://wa.me/905515215958?text=${encodeURIComponent(
                                `${t.waMessage} ${result.domain} (${t.available})`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 flex items-center justify-center w-10 h-10 rounded-xl bg-green-500/10 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 md:translate-x-4 md:group-hover:translate-x-0 group/wa shadow-lg shadow-green-500/10"
                            title={t.waButton}
                        >
                            <MessageCircle className="w-5 h-5" />
                        </a>
                    )}
                </div>

                {/* Subtle background glow for available items */}
                {result.available && (
                    <div className="absolute -right-4 -top-4 w-12 h-12 bg-brand-primary/10 blur-xl rounded-full group-hover:bg-brand-primary/20 transition-colors"></div>
                )}
            </div>
        </div>
    );
};

export default DomainSearchResult;
