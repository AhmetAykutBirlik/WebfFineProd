import { getDictionary } from "@/lib/i18n";
import {
    Globe,
    Cloud,
    Monitor,
    CheckCircle2,
    Zap,
    ShieldCheck,
    ArrowRight,
    Database,
    Cpu,
    Layers
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import ServiceVideo from "@/components/ServiceVideo";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return {
        title: `${dictionary.nav.services} | WebFine`,
        description: dictionary.services.page.desc,
    };
}

export default async function Services({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);


    const services = [
        {
            id: "web-tasarim",
            title: dictionary.services.webDesign.title,
            desc: dictionary.services.webDesign.desc,
            icon: Monitor,
            color: "blue",
            features: dictionary.services.webDesign.features,
            img: "/img/7.png"
        },
        {
            id: "domain",
            title: dictionary.services.domain.title,
            desc: dictionary.services.domain.desc,
            icon: Globe,
            color: "amber",
            features: dictionary.services.domain.features,
            img: "/img/3.png"
        },
        {
            id: "hosting",
            title: dictionary.services.hosting.title,
            desc: dictionary.services.hosting.desc,
            icon: Cloud,
            color: "indigo",
            features: dictionary.services.hosting.features,
            img: "/img/4.png"
        }
    ];

    return (
        <div className="bg-luxury-black h-screen overflow-y-auto snap-y snap-mandatory text-white scroll-smooth">
            {/* Header */}
            <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden snap-start">
                <div className="bg-shimmer-sweep" />
                <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] extreme-vivid-aurora -z-10 opacity-30 md:opacity-60"></div>
                <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center space-x-3 text-brand-primary font-bold uppercase tracking-[0.2em] text-[10px] bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-3xl mb-6">
                            <Zap className="w-3 h-3 md:w-4 md:h-4" />
                            <span>{dictionary.nav.services}</span>
                        </div>
                        <h1
                            className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-white leading-tight break-words"
                            dangerouslySetInnerHTML={{ __html: dictionary.services.page.title }}
                        />
                        <p className="text-base md:text-lg text-gray-400 font-medium max-w-xl leading-relaxed">
                            {dictionary.services.page.desc}
                        </p>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_right,rgba(0,102,255,0.1),transparent_70%)] opacity-60"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_left,rgba(0,102,255,0.08),transparent_70%)] opacity-50"></div>
            </section>

            {/* Services List */}
            <section>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {services.map((service, i) => (
                        <div key={service.id} id={service.id} className={cn(
                            "grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center scroll-mt-32 relative py-12 md:py-0 md:min-h-screen md:flex md:items-center md:justify-center snap-start",
                            ""
                        )}>
                            <div className={cn(
                                "lg:col-span-6 space-y-6 md:space-y-8 w-full relative z-20",
                                i % 2 === 1 ? "lg:order-2" : "lg:order-1"
                            )}>
                                <div className="inline-flex items-center space-x-3 text-brand-primary font-black uppercase tracking-[0.3em] text-xs">
                                    <service.icon className="w-5 h-5" />
                                    <span>{service.title}</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] text-white break-words">
                                    {service.title} <br className="hidden md:block" />
                                    <span className="text-2xl md:text-4xl opacity-30 font-bold block mt-2">{dictionary.services.page.solutionsSuffix}</span>
                                </h2>
                                <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-xl">{service.desc}</p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                    {service.features.map((f: string, idx: number) => (
                                        <div key={idx} className="flex items-center space-x-3 group">
                                            <div className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-primary/20 transition-all flex-shrink-0">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary" />
                                            </div>
                                            <span className="font-bold text-sm text-gray-400 group-hover:text-white transition-colors">{f}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={service.id === 'domain' ? `/${lang}#sorgula` : `/${lang}/iletisim`}
                                    className="inline-flex items-center space-x-4 bg-white text-luxury-black px-10 py-4 rounded-2xl font-black hover:bg-brand-primary hover:text-white transition-all group mt-4 relative z-30 shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:shadow-brand-primary/40 active:scale-95"
                                >
                                    <span>
                                        {service.id === 'domain'
                                            ? dictionary.home.domainSearch.badge
                                            : dictionary.services.page.startProject}
                                    </span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>

                            <div className={cn(
                                "lg:col-span-6 relative w-full",
                                i % 2 === 1 ? "lg:order-1" : "lg:order-2"
                            )}>
                                <div className="aspect-[4/3] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-white/5 border border-white/10 p-4 relative group hover:rotate-1 transition-transform duration-700 ease-out">
                                    <div className="w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden relative">
                                        {service.id === 'web-tasarim' ? (
                                            <ServiceVideo videoSrc="/img/Web Design.mov" title={service.title} />
                                        ) : service.id === 'domain' ? (
                                            <ServiceVideo videoSrc="/img/domain.mov" title={service.title} />
                                        ) : (
                                            <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                        )}
                                    </div>

                                    <div className="absolute top-8 right-8 glass-morphism p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/20 shadow-2xl animate-float z-20">
                                        <Database className="w-8 h-8 md:w-10 md:h-10 text-brand-primary" />
                                    </div>
                                    <div className="absolute bottom-8 left-8 glass-morphism p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/20 shadow-2xl animate-float-delayed z-20">
                                        {i === 0 && <Monitor className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />}
                                        {i === 1 && <Cloud className="w-8 h-8 md:w-10 md:h-10 text-indigo-400" />}
                                        {i === 2 && <Globe className="w-8 h-8 md:w-10 md:h-10 text-amber-400" />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Integration CTA */}
            <section className="py-20 mb-16 md:mb-32 mx-4 lg:mx-8 bg-gradient-to-br from-brand-primary/10 to-transparent rounded-[2.5rem] md:rounded-[4rem] border border-white/5 text-center px-6 snap-start">
                <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
                    <Layers className="w-16 h-16 text-brand-primary mx-auto animate-pulse" />
                    <h2 className="text-3xl md:text-6xl font-black tracking-tighter">{dictionary.services.page.ecosystem.title}</h2>
                    <p className="text-lg md:text-xl text-gray-400 font-medium">{dictionary.services.page.ecosystem.desc}</p>
                    <div className="pt-8">
                        <Link href={`/${lang}/iletisim`} className="bg-brand-primary text-white px-12 py-6 rounded-2xl font-black text-lg shadow-2xl shadow-blue-500/30 hover:scale-110 transition-all active:scale-95 inline-block">
                            {dictionary.services.page.ecosystem.button}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
