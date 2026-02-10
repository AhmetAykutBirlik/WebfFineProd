"use client";

import React from "react";
import { Search, Loader2 } from "lucide-react";

interface DomainSearchFormProps {
    domain: string;
    setDomain: (val: string) => void;
    handleSearch: (e: React.FormEvent) => void;
    loading: boolean;
    t: any;
}

const DomainSearchForm = ({ domain, setDomain, handleSearch, loading, t }: DomainSearchFormProps) => {
    return (
        <div className="mb-10">
            <form onSubmit={handleSearch} className="relative group">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-primary transition-colors z-10">
                    <Search className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <input
                    type="text"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder={t.placeholder}
                    className="w-full bg-white/5 border border-white/10 focus:border-brand-primary/50 outline-none rounded-2xl py-5 md:py-6 pl-14 md:pl-16 pr-32 md:pr-40 text-base md:text-xl font-medium text-white transition-all placeholder:text-gray-400 shadow-inner"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="absolute right-2 top-2 bottom-2 bg-brand-primary hover:bg-blue-600 disabled:opacity-50 text-white px-6 md:px-10 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                >
                    {loading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                        <span>{t.button}</span>
                    )}
                </button>
            </form>
            <div className="mt-4 flex items-center gap-4">
                <div className="h-[1px] flex-grow bg-white/5"></div>
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 shrink-0">{t.subBadge}</span>
                <div className="h-[1px] flex-grow bg-white/5"></div>
            </div>
        </div>
    );
};

export default DomainSearchForm;
