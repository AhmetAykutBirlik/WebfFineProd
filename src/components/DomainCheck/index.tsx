"use client";

import React, { useState } from "react";
import DomainSearchForm from "./DomainSearchForm";
import DomainSearchResult from "./DomainSearchResult";
import { MessageCircle, Globe } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface DomainSearchProps {
    dictionary: any;
    lang: string;
}

const DomainSearch = ({ dictionary, lang }: DomainSearchProps) => {
    const t = dictionary.home.domainSearch;

    const [domain, setDomain] = useState("");
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<{
        domain: string;
        available: boolean;
        error?: string;
    }[]>([]);

    const cleanDomain = (str: string) => {
        return str
            .replace(/^(https?:\/\/)?(www\.)?/, "")
            .replace(/\s+/g, "")
            .toLowerCase();
    };

    const validateDomain = (str: string) => {
        if (!str.includes('.')) return str.length >= 2;
        const domainRegex = /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
        return domainRegex.test(str);
    };

    const handleSearch = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();

        let cleaned = cleanDomain(domain);
        if (!cleaned || !validateDomain(cleaned)) {
            alert(t.error);
            return;
        }

        setLoading(true);
        setResults([]);

        const baseName = cleaned.split('.')[0];
        const coreTlds = ['.com', '.com.tr', '.net', '.org', '.tr', '.dev'];
        const searchList: string[] = [];

        if (cleaned.includes('.')) {
            searchList.push(cleaned);
        }
        coreTlds.forEach(tld => {
            const d = baseName + tld;
            if (!searchList.includes(d)) searchList.push(d);
        });

        const tempResults: any[] = [];
        await Promise.all(searchList.map(async (d) => {
            try {
                const response = await fetch(`/api/domain-check?domain=${encodeURIComponent(d)}`);
                const data = await response.json();
                tempResults.push({
                    domain: d,
                    available: response.ok ? data.available : false,
                    error: response.ok ? undefined : t.apiError
                });
            } catch (err: any) {
                tempResults.push({ domain: d, available: false, error: t.apiError });
            }
        }));

        setResults(tempResults.sort((a, b) => {
            const aIdx = searchList.indexOf(a.domain);
            const bIdx = searchList.indexOf(b.domain);
            return aIdx - bIdx;
        }));
        setLoading(false);
    };

    return (
        <section id="sorgula" className="relative py-20 overflow-hidden">
            {/* Background decoration to separate the component */}
            <div className="absolute inset-0 bg-[#050507] -z-10"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Side: Info */}
                    <ScrollReveal direction="left" className="lg:col-span-4 space-y-8 pt-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20">
                            <Globe className="w-3 h-3 text-brand-primary" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary">{t.badge}</span>
                        </div>

                        <h2
                            className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-white"
                            dangerouslySetInnerHTML={{ __html: t.title }}
                        />
                        <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed max-w-sm">
                            {t.desc}
                        </p>

                        <a
                            href={`https://wa.me/905515215958?text=${encodeURIComponent(t.waMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 group"
                        >
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-primary/10 group-hover:border-brand-primary/30 transition-all">
                                <MessageCircle className="w-5 h-5 text-brand-primary" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">{t.waButton}</span>
                                <span className="text-xs font-bold text-white group-hover:text-brand-primary transition-colors">+90 551 521 59 58</span>
                            </div>
                        </a>
                    </ScrollReveal>

                    {/* Right Side: Search & Results */}
                    <ScrollReveal direction="right" className="lg:col-span-8 bg-[#0A0A0C] border border-white/5 rounded-[3rem] p-6 md:p-10 shadow-3xl shadow-black/50">
                        <DomainSearchForm
                            domain={domain}
                            setDomain={setDomain}
                            handleSearch={handleSearch}
                            loading={loading}
                            t={t}
                        />

                        {results.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 animate-fade-in">
                                {results.map((result, idx) => (
                                    <DomainSearchResult key={idx} result={result} idx={idx} t={t} />
                                ))}
                            </div>
                        ) : (
                            <div className="py-20 text-center border-2 border-dashed border-white/5 rounded-3xl">
                                <Globe className="w-12 h-12 text-gray-800 mx-auto mb-4 animate-pulse" />
                                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">{t.emptyState}</p>
                            </div>
                        )}
                    </ScrollReveal>

                </div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </section >
    );
};

export default DomainSearch;
