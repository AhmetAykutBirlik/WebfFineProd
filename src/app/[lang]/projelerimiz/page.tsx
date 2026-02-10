import { getDictionary } from "@/lib/i18n";
import { ArrowRight, ExternalLink, Layout, Star, Trophy, Crown, Sparkles, Gem } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return {
        title: `${dictionary.projects.heroTitle} | WebFine`,
        description: dictionary.projects.heroDesc,
    };
}

export default async function Projects({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    const projects = [
        {
            title: "CodeFine",
            category: dictionary.projects.categories.webDev,
            img: "/img/projeler/codefine.png",
            link: "https://codefine.com.tr"
        },
        {
            title: "Estetik Gayrimenkul",
            category: dictionary.projects.categories.ecommerce,
            img: "/img/projeler/estetikgayrimenkul.png",
            link: "https://estetikgayrimenkul.com.tr/"
        },
        {
            title: "Estetik Mühendislik",
            category: dictionary.projects.categories.corpIdentity,
            img: "/img/projeler/estetikmuhendislik.png",
            link: "https://estetikmuhendislik.com.tr/"
        },
        {
            title: "Sekiz Vize",
            category: dictionary.projects.categories.servicePortal,
            img: "/img/projeler/sekizvize.png",
            link: "http://sekizvize.com.tr/"
        }
    ];

    return (
        <div className="bg-luxury-black min-h-screen text-white pt-24 pb-12 md:pt-32 md:pb-20">
            {/* Extreme Vividness FX */}
            <div className="bg-shimmer-sweep" />

            {/* Header */}
            <section className="px-6 lg:px-8 max-w-6xl mx-auto mb-16 md:mb-20 relative overflow-hidden text-center md:text-left">
                <div className="absolute top-[-20%] left-[-20%] w-[800px] h-[800px] extreme-vivid-aurora -z-10 animate-spin-slow opacity-30 md:opacity-40"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>

                {/* Floating React-like Orbs */}
                <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-float hidden md:block"></div>
                <div className="absolute bottom-10 left-40 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-float-delayed hidden md:block"></div>

                <div className="space-y-4 md:space-y-6 relative z-10">
                    <div className="inline-flex items-center space-x-3 text-brand-primary font-bold uppercase tracking-[0.2em] text-[10px] bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-3xl animate-fade-in-up">
                        <Layout className="w-3 h-3 md:w-4 md:h-4 animate-spin-slow" />
                        <span>{dictionary.nav.projects}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-white pb-2">
                        {dictionary.projects.heroTitle}
                    </h1>
                    <p className="text-base md:text-lg text-gray-400 font-medium max-w-xl leading-relaxed mx-auto md:mx-0">
                        {dictionary.projects.heroDesc}
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="px-6 lg:px-12 max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="group relative bg-white/5 rounded-[4rem] border border-white/10 overflow-hidden transition-all duration-700 hover:border-brand-primary/60 hover:shadow-[0_0_50px_-10px_rgba(59,130,246,0.3)] hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="aspect-[16/10] md:aspect-[16/9] overflow-hidden relative">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 group-hover:rotate-1"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-8 md:p-16">
                                    <div className="space-y-6 translate-y-20 group-hover:translate-y-0 transition-transform duration-700 w-full">
                                        <div className="flex items-center space-x-4">
                                            <span className="h-[2px] w-12 bg-brand-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                                            <span className="text-brand-primary font-black text-sm uppercase tracking-[0.4em] drop-shadow-lg">{project.category}</span>
                                        </div>
                                        <h3 className="text-3xl md:text-6xl font-black tracking-tighter text-white drop-shadow-2xl">{project.title}</h3>
                                        <div className="pt-6">
                                            <Link href={project.link} target="_blank" className="inline-flex items-center space-x-3 text-white font-black text-lg uppercase tracking-widest group/link hover:text-brand-primary transition-colors">
                                                <span>{dictionary.projects.viewProject}</span>
                                                <ExternalLink className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA - Smaller & Shinier */}
            <section className="mt-20 md:mt-32 px-6 lg:px-8 max-w-4xl mx-auto text-center">
                <div className="bg-gradient-to-br from-brand-primary/10 via-white/5 to-transparent p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-white/10 relative overflow-hidden backdrop-blur-2xl shadow-2xl group hover:border-brand-primary/30 transition-colors duration-500">
                    {/* Animated Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10 w-full h-full skew-x-12 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>

                    <div className="relative z-20 space-y-8">
                        {/* Luxury Icons Cluster */}
                        <div className="flex items-center justify-center space-x-6 mb-6">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 animate-bounce-subtle">
                                <Trophy className="w-6 h-6 text-yellow-400" />
                            </div>
                            <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-primary/40 animate-pulse z-10 scale-110">
                                <Crown className="w-8 h-8 text-white" />
                            </div>
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 animate-bounce-subtle delay-100">
                                <Gem className="w-6 h-6 text-purple-400" />
                            </div>
                        </div>

                        <div className="absolute top-10 left-[20%] animate-ping opacity-20"><Sparkles className="w-8 h-8 text-yellow-200" /></div>
                        <div className="absolute bottom-10 right-[20%] animate-ping opacity-20 delay-500"><Star className="w-6 h-6 text-blue-200" /></div>

                        <h2 className="text-2xl md:text-5xl font-black tracking-tighter leading-tight text-white mb-2">
                            {dictionary.projects.ctaTitle}
                        </h2>

                        <div className="flex justify-center pt-2">
                            <Link
                                href={`/${lang}/iletisim`}
                                className="bg-white text-luxury-black px-8 py-4 md:px-12 md:py-5 rounded-2xl font-black text-lg shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] hover:scale-105 transition-all active:scale-95 flex items-center space-x-3 hover:bg-gray-100 ring-2 ring-transparent hover:ring-white/50"
                            >
                                <span>{dictionary.projects.ctaButton}</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
