import { getDictionary } from "@/lib/i18n";
import { CheckCircle2, Award, Zap, Users } from "lucide-react";
import { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return {
        title: `${dictionary.nav.about} | WebFine`,
        description: dictionary.about.heroDesc,
    };
}

export default async function About({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return (
        <div className="bg-luxury-black min-h-screen text-white">
            {/* Hero */}
            {/* Hero - Optimized for Mobile */}
            <section className="pt-32 pb-20 md:pt-0 md:pb-0 h-auto md:min-h-screen flex flex-col justify-center relative overflow-hidden">
                <div className="bg-shimmer-sweep" />
                <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] extreme-vivid-aurora -z-10 opacity-60 md:opacity-100"></div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center lg:text-left">
                    <div className="max-w-4xl space-y-6 md:space-y-12">
                        <div className="inline-flex items-center space-x-3 md:space-x-4 text-brand-primary font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[9px] md:text-[10px] bg-white/5 border border-white/10 px-4 md:px-6 py-2 rounded-full backdrop-blur-3xl animate-fade-in-up">
                            <Users className="w-4 h-4 md:w-5 md:h-5 animate-spin-slow" />
                            <span>{dictionary.nav.about}</span>
                        </div>
                        <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] md:leading-[0.8] text-flow break-words">
                            {dictionary.nav.about}
                        </h1>
                        <p className="text-lg md:text-3xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4 md:px-0">
                            {dictionary.about.heroDesc}
                        </p>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/15 to-transparent -z-0"></div>
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-600/15 to-transparent -z-0"></div>
            </section>

            {/* Philosophy */}
            <section className="py-20 md:py-0 min-h-screen flex items-center border-y border-white/5 bg-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32 items-center">
                        <div className="relative group">
                            <div className="aspect-[4/5] rounded-[2.5rem] md:rounded-[5rem] overflow-hidden bg-white/5 border border-white/10 p-4 shadow-3xl group">
                                <img src="/img/1.png" alt="About WebFine" className="w-full h-full object-cover rounded-[2rem] md:rounded-[4rem] group-hover:scale-105 transition-all duration-1000" />
                            </div>
                            <div className="absolute -top-10 -right-10 glass-morphism p-10 rounded-[3rem] border border-white/20 shadow-2xl hidden md:block animate-float">
                                <Award className="text-brand-primary w-12 h-12 mb-4" />
                                <div className="font-black text-2xl tracking-tighter uppercase">{dictionary.about.trustedPartner}</div>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <ScrollReveal className="space-y-6">
                                <h2 className="text-xs font-black text-brand-primary uppercase tracking-[0.5em]">{dictionary.home.why.title}</h2>
                                <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight">
                                    {dictionary.about.philosophyTitle}
                                </h3>
                            </ScrollReveal>
                            <ScrollReveal delay={0.2}>
                                <p className="text-xl text-gray-400 font-medium leading-relaxed">
                                    {dictionary.about.philosophyDesc}
                                </p>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {dictionary.about.perks.map((item: string, i: number) => (
                                    <ScrollReveal key={i} delay={0.3 + (i * 0.1)}>
                                        <div className="flex items-center space-x-4 text-white font-bold group">
                                            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary transition-colors">
                                                <CheckCircle2 className="text-brand-primary group-hover:text-white w-5 h-5" />
                                            </div>
                                            <span className="text-lg tracking-tight uppercase text-[12px]">{item}</span>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission / Vision / Values - Minimalist & Elite */}
            <section className="py-20 md:py-32 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid pointer-events-none -z-20"></div>
                <div className="absolute top-1/4 right-[10%] w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                <div className="absolute bottom-1/4 left-[10%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                        {[
                            { title: dictionary.about.vision.title, desc: dictionary.about.vision.desc, icon: Zap },
                            { title: dictionary.about.mission.title, desc: dictionary.about.mission.desc, icon: Users },
                            { title: dictionary.about.values.title, desc: dictionary.about.values.desc, icon: CheckCircle2 }
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="group relative p-8 md:p-10 rounded-[3rem] bg-white/5 border border-white/5 hover:border-brand-primary/30 transition-all duration-500 card-glow flex flex-col items-center lg:items-start text-center lg:text-left h-full">
                                    <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-primary/20 transition-all duration-500">
                                        <item.icon className="w-8 h-8 text-brand-primary" />
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-white group-hover:text-brand-primary transition-colors duration-500">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-300 font-medium leading-relaxed text-sm md:text-base opacity-80 group-hover:opacity-100 transition-opacity">
                                            {item.desc}
                                        </p>
                                    </div>
                                    {/* Minimal Accent Line */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-brand-primary rounded-full group-hover:w-12 transition-all duration-500" />
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
