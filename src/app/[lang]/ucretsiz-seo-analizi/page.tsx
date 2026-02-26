import { getDictionary } from "@/lib/i18n";
import { Search, Zap, ShieldCheck, BarChart3, Globe } from "lucide-react";
import { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import SeoAuditTool from "@/components/SeoAuditTool";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return {
        title: dictionary.seoAnalysis.meta.title,
        description: dictionary.seoAnalysis.meta.description,
    };
}

export default async function SeoAnalysisPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return (
        <div className="bg-luxury-black min-h-screen text-white">
            {/* Hero Section */}
            <section className="pt-24 pb-12 md:pt-40 md:pb-16 relative overflow-hidden">
                {/* Background effects & Cinematic Image */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <img
                        src="/img/10.webp"
                        alt="Background"
                        className="w-full h-full object-cover opacity-50 scale-105 animate-slow-zoom"
                    />
                    <div className="absolute inset-0 bg-luxury-black/60"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent"></div>
                </div>

                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/5 to-transparent -z-10"></div>

                <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <ScrollReveal className="space-y-8">
                        <div className="inline-flex items-center space-x-3 text-brand-primary font-bold uppercase tracking-[0.3em] text-[10px] bg-white/5 border border-white/10 px-6 py-2.5 rounded-full backdrop-blur-3xl">
                            <Zap className="w-3 h-3 animate-pulse" />
                            <span>{dictionary.seoAnalysis.meta.title}</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-7xl font-black tracking-tighter leading-[1.1] text-white max-w-4xl mx-auto uppercase">
                            {dictionary.seoAnalysis.title}
                        </h1>
                        <div className="max-w-3xl mx-auto space-y-6">
                            <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
                                {dictionary.seoAnalysis.subtitle}
                            </p>
                            <p className="text-base text-gray-400 font-medium leading-relaxed">
                                {dictionary.seoAnalysis.description}
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Analysis Tool Section */}
            <section className="pb-32 px-6 relative z-10">
                <ScrollReveal delay={0.2}>
                    <SeoAuditTool dictionary={dictionary} lang={lang} />
                </ScrollReveal>
            </section>

            {/* Information Cards */}
            <section className="py-32 border-t border-white/5 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Search,
                                title: dictionary.seoAnalysis.features.deepScan.title,
                                desc: dictionary.seoAnalysis.features.deepScan.desc
                            },
                            {
                                icon: BarChart3,
                                title: dictionary.seoAnalysis.features.performance.title,
                                desc: dictionary.seoAnalysis.features.performance.desc
                            },
                            {
                                icon: ShieldCheck,
                                title: dictionary.seoAnalysis.features.security.title,
                                desc: dictionary.seoAnalysis.features.security.desc
                            },
                            {
                                icon: Zap,
                                title: dictionary.seoAnalysis.features.actionPlan.title,
                                desc: dictionary.seoAnalysis.features.actionPlan.desc
                            }
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="p-8 h-full rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-brand-primary/20 transition-all group flex flex-col">
                                    <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-7 h-7 text-brand-primary" />
                                    </div>
                                    <h3 className="text-xl font-black uppercase tracking-tight mb-4 leading-tight">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
