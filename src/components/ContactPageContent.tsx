"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle, Instagram, CheckCircle2, AlertCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPageContent({ dictionary, lang }: { dictionary: any, lang: string }) {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formspree.io/f/xykprqov", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <div className="bg-luxury-black min-h-screen text-white">
            {/* Hero Header - Optimized Spacing */}
            <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
                <div className="bg-shimmer-sweep" />
                <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] extreme-vivid-aurora -z-10 opacity-30 md:opacity-60"></div>
                <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 text-center lg:text-left">
                    <div className="max-w-3xl space-y-4 md:space-y-6">
                        <div className="inline-flex items-center space-x-3 text-brand-primary font-bold uppercase tracking-[0.2em] text-[10px] bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-3xl animate-fade-in-up mx-auto lg:mx-0">
                            <MessageCircle className="w-3 h-3 md:w-4 md:h-4 animate-spin-slow" />
                            <span>{dictionary.nav.contact}</span>
                        </div>
                        <ScrollReveal>
                            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-white pb-2">
                                {dictionary.contact.title}
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <p className="text-base md:text-lg text-gray-400 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                                {dictionary.contact.subtitle} <br className="hidden md:block" /> {dictionary.contact.desc}
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <section className="pb-20 md:pb-40">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
                        {/* Contact Info */}
                        <div className="lg:col-span-5 space-y-12 md:space-y-20">
                            <ScrollReveal className="space-y-4 md:space-y-6 text-center lg:text-left">
                                <h2 className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.3em]">{dictionary.footer.links.contact}</h2>
                                <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter leading-tight">
                                    {dictionary.contact.helpTitle}
                                </h3>
                            </ScrollReveal>

                            <div className="space-y-6 md:space-y-8">
                                <ScrollReveal delay={0.2} direction="left">
                                    <div className="flex flex-col items-center lg:items-start lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 group text-center lg:text-left">
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:border-brand-primary/30 transition-all">
                                            <Phone className="w-5 h-5 md:w-6 md:h-6 text-brand-primary" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{dictionary.contact.form.nameLabel}</p>
                                            <a href="tel:05515215958" className="text-lg md:text-xl font-bold text-white hover:text-brand-primary transition-colors tracking-tight">{dictionary.contact.info.phone}</a>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal delay={0.3} direction="left">
                                    <div className="flex flex-col items-center lg:items-start lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 group text-center lg:text-left">
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:border-brand-primary/30 transition-all">
                                            <Mail className="w-5 h-5 md:w-6 md:h-6 text-indigo-500" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{dictionary.contact.form.emailLabel}</p>
                                            <a href="mailto:info@webfine.com.tr" className="text-lg md:text-xl font-bold text-white hover:text-brand-primary transition-colors tracking-tight shrink-1 break-all">info@webfine.com.tr</a>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal delay={0.4} direction="left">
                                    <div className="flex flex-col items-center lg:items-start lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 group text-center lg:text-left">
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:border-brand-primary/30 transition-all">
                                            <MapPin className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{dictionary.contact.location}</p>
                                            <p className="text-lg md:text-xl font-bold text-white tracking-tight">{dictionary.contact.info.address}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>

                            <ScrollReveal delay={0.5} className="pt-12 md:pt-20 border-t border-white/5 text-center lg:text-left">
                                <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-6 md:mb-10">{dictionary.contact.social}</p>
                                <div className="flex justify-center lg:justify-start space-x-4 md:space-x-6">
                                    <a href="https://www.instagram.com/webfine.com.tr/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary/30 transition-all" aria-label="Instagram"><Instagram className="w-5 h-5 md:w-6 md:h-6" /></a>
                                    <a href="https://wa.me/905515215958" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-500/30 transition-all" aria-label="WhatsApp"><MessageCircle className="w-5 h-5 md:w-6 md:h-6" /></a>
                                    <a href="tel:05515215958" className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary/30 transition-all" aria-label="Telefon"><Phone className="w-5 h-5 md:w-6 md:h-6" /></a>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Contact Form */}
                        <ScrollReveal delay={0.3} direction="right" className="lg:col-span-7 h-full">
                            <div className="bg-white/5 p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-white/5 shadow-infinite relative overflow-hidden backdrop-blur-3xl h-full">
                                {status === "success" ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12 md:py-20 relative z-10 animate-in fade-in zoom-in duration-500">
                                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-primary/20 flex items-center justify-center border border-brand-primary/30">
                                            <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-brand-primary" />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{dictionary.contact.form.success}</h3>
                                        <button
                                            onClick={() => setStatus("idle")}
                                            className="text-brand-primary font-bold uppercase tracking-widest text-[10px] md:text-xs hover:underline"
                                        >
                                            {dictionary.contact.form.reset}
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 relative z-10">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">{dictionary.contact.form.nameLabel}</label>
                                                <input name="name" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:py-4 focus:ring-1 focus:ring-brand-primary outline-none transition-all placeholder:text-gray-700 font-medium text-sm text-white" placeholder={dictionary.contact.form.nameLabel} />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">{dictionary.contact.form.emailLabel}</label>
                                                <input name="email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:py-4 focus:ring-1 focus:ring-brand-primary outline-none transition-all placeholder:text-gray-700 font-medium text-sm text-white" placeholder={dictionary.contact.form.emailLabel} />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">{dictionary.contact.form.messageLabel}</label>
                                            <textarea name="message" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:py-4 focus:ring-1 focus:ring-brand-primary outline-none transition-all placeholder:text-gray-700 font-medium text-sm text-white lg:resize-none" placeholder={dictionary.contact.form.messagePlaceholder}></textarea>
                                        </div>

                                        {status === "error" && (
                                            <div className="flex items-center space-x-3 text-red-400 bg-red-400/10 p-3 rounded-xl border border-red-400/20">
                                                <AlertCircle className="w-4 h-4" />
                                                <span className="font-medium text-xs md:text-sm">Bir hata oluştu. Lütfen tekrar deneyin.</span>
                                            </div>
                                        )}

                                        <button
                                            disabled={status === "loading"}
                                            type="submit"
                                            className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-sm md:text-base shadow-lg shadow-blue-500/20 transition-all active:scale-95 flex items-center justify-center space-x-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <span className="">{status === "loading" ? dictionary.common.loading : dictionary.contact.form.submit}</span>
                                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </button>
                                    </form>
                                )}
                                <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-brand-primary/5 rounded-bl-full -z-0"></div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Map Segment (Luxury Dark Gradient) */}
            <section className="h-[600px] w-full relative group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524666643752-b381eb00effb?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale contrast-125 brightness-50 opacity-30 group-hover:opacity-60 transition-all duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black"></div>
            </section>
        </div>
    );
}
