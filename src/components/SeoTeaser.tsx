'use client';

import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function SeoTeaser({ dictionary, lang }: { dictionary: any; lang: string }) {
    const t = dictionary.seoAnalysis.teaser;

    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Visual Side (Left) */}
                    <ScrollReveal className="relative order-2 lg:order-1">
                        <div className="aspect-square max-w-[500px] mx-auto rounded-[3rem] bg-white/5 border border-white/10 p-3 relative group overflow-hidden shadow-3xl">
                            <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative bg-[#0a0a0a]">
                                <img
                                    src="/img/9.webp"
                                    alt="AI SEO Analysis"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s]"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>

                            {/* Floating Stats Card */}
                            <div className="absolute bottom-10 -left-1 md:-left-6 glass-morphism p-6 rounded-[2rem] border border-white/20 shadow-2xl animate-float z-20">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-brand-primary/20 rounded-xl flex items-center justify-center">
                                        <Search className="w-5 h-5 text-brand-primary" />
                                    </div>
                                    <div>
                                        <div className="font-black text-xl tracking-tighter text-white">50+</div>
                                        <div className="font-bold text-[8px] tracking-[0.2em] uppercase text-gray-400">KRİTİK METRİK</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Content Side (Right) */}
                    <ScrollReveal className="space-y-10 order-1 lg:order-2">
                        <div className="space-y-6 text-center lg:text-left">
                            <div className="h-[2px] w-12 bg-brand-primary mx-auto lg:mx-0"></div>
                            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white uppercase leading-[0.95]">
                                {t.title}
                            </h2>
                            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                                {t.desc}
                            </p>
                        </div>

                        <div className="flex justify-center lg:justify-start pt-4">
                            <Link
                                href={`/${lang}/ucretsiz-seo-analizi`}
                                className="inline-flex items-center space-x-4 bg-[#0066FF] hover:bg-[#0052cc] text-white px-10 py-6 md:px-12 md:py-8 rounded-[2rem] font-black text-xs md:text-sm uppercase tracking-[0.4em] transition-all shadow-[0_30px_60px_rgba(0,102,255,0.3)] hover:shadow-[0_40px_80px_rgba(0,102,255,0.5)] hover:scale-[1.05] active:scale-[0.95] group/btn"
                            >
                                <span>{t.button}</span>
                                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover/btn:translate-x-3 transition-transform" />
                            </Link>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
}
