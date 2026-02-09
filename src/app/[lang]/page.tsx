import { getDictionary } from "@/lib/i18n";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Zap,
  Monitor,
  ShieldCheck,
  Cpu,
  Globe,
  Database,
  Cloud,
  CheckCircle2,
  MousePointer2,
  Layers,
  MessageSquare,
  Search,
  Lock,
  Smartphone,
  Check
} from "lucide-react";

// cinematic Space Background
const Stars = ({ count = 200 }) => (
  <div className="stars-container">
    {[...Array(count)].map((_, i) => (
      <div
        key={i}
        className="star opacity-40"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          '--d': `${Math.random() * 4 + 2}s`
        } as any}
      />
    ))}
    <div className="shooting-stars opacity-30">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="shooting-star"
          style={{
            top: `${Math.random() * 60}%`,
            left: `${Math.random() * 40}%`,
            animationDelay: `${i * 3}s`,
            animationDuration: `${Math.random() * 2 + 4}s`
          }}
        />
      ))}
    </div>
  </div>
);

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="bg-luxury-black min-h-screen text-white/90 selection:bg-brand-primary/30 overflow-x-hidden">
      {/* Cinematic Hero */}
      <section className="relative min-h-[90vh] pt-40 pb-20 md:pt-48 md:pb-40 overflow-hidden bg-grid">
        <Stars count={250} />
        <Stars count={250} />

        {/* Deep Field Lighting - More Vibrant */}
        <div className="hidden md:block absolute top-[10%] left-[-10%] w-[1200px] h-[1200px] bg-blue-500/30 rounded-full aurora-blur pointer-events-none blur-[100px] animate-pulse"></div>
        <div className="hidden md:block absolute bottom-[-10%] right-[-5%] w-[1000px] h-[1000px] bg-brand-primary/35 rounded-full aurora-blur pointer-events-none blur-[120px]"></div>
        <div className="hidden md:block absolute top-[30%] right-[10%] w-[600px] h-[600px] bg-indigo-500/25 rounded-full aurora-blur pointer-events-none blur-[80px] animate-pulse"></div>
        <div className="hidden md:block absolute bottom-[20%] left-[20%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full aurora-blur pointer-events-none blur-[100px]"></div>

        {/* Moving Light Beams - Removed for cleaner look */}

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center space-y-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white text-luxury-black text-[10px] font-black uppercase tracking-[0.3em] shadow-xl">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              {dictionary.home?.hero?.badge}
            </div>

            <h1 className="text-5xl md:text-9xl font-black tracking-tight leading-[0.95] text-flow select-none">
              {(dictionary.home?.hero?.title || "").split(' ').map((word: string, i: number) => (
                <span key={i} className="inline-block hover:scale-105 transition-transform cursor-default mr-4">
                  {word}
                </span>
              ))}
            </h1>

            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-300 font-medium leading-relaxed animate-fade-in-up">
              {dictionary.home?.hero?.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 pt-6">
              <Link
                href={`/${lang}/projelerimiz`}
                className="w-full sm:w-auto bg-brand-primary hover:bg-blue-700 text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all shadow-2xl shadow-blue-500/40 hover:scale-105 active:scale-95 text-center group shiny-button"
              >
                {dictionary.home?.hero?.cta}
                <ArrowRight className="ml-3 w-5 h-5 inline-block group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href={`/${lang}/iletisim`}
                className="w-full sm:w-auto bg-white text-black md:bg-white/5 md:text-white border border-white/10 px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all hover:bg-gray-200 md:hover:bg-white/10 text-center flex items-center justify-center space-x-3 backdrop-blur-3xl hover:border-white/20 active:scale-95"
              >
                <Play className="w-4 h-4 fill-current text-brand-primary" />
                <span>{dictionary.common?.buttons?.contactUs}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Neden WebFine? */}
      <section className="py-20 md:py-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="h-[2px] w-20 bg-brand-primary"></div>
                <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9]">
                  {dictionary.home?.why?.title}
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed">
                  {dictionary.home?.why?.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                {[
                  { icon: ShieldCheck, title: dictionary.home?.why?.security, desc: dictionary.home?.why?.securityDesc },
                  { icon: Cloud, title: dictionary.home?.why?.storage, desc: dictionary.home?.why?.storageDesc },
                  { icon: Zap, title: dictionary.home?.why?.speed, desc: dictionary.home?.why?.speedDesc },
                  { icon: MessageSquare, title: dictionary.home?.why?.support, desc: dictionary.home?.why?.supportDesc }
                ].map((item, i) => (
                  <div key={i} className="group p-8 rounded-[3rem] bg-white/5 border border-white/5 hover:border-brand-primary/20 transition-all card-glow">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 border-beam">
                      <item.icon className="w-6 h-6 text-brand-primary" />
                    </div>
                    <h4 className="text-lg font-black uppercase tracking-tight mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-[5rem] bg-white/5 border border-white/10 p-4 relative group overflow-hidden shadow-3xl">
                <div className="w-full h-full rounded-[4.5rem] overflow-hidden relative">
                  <img src="/img/1.png" alt="Why WebFine" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[4s] grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-60" />
                </div>
                <div className="absolute top-12 -right-12 glass-morphism p-10 rounded-[3rem] border border-white/20 shadow-2xl animate-float translate-x-[-15%] group-hover:translate-x-0 transition-transform flex flex-col items-center text-center">
                  <Zap className="w-12 h-12 text-brand-primary mb-2" />
                  <div className="font-black text-5xl tracking-tighter uppercase whitespace-nowrap text-white">%99.9</div>
                  <div className="font-bold text-xs tracking-[0.2em] uppercase text-gray-400 mt-1">{dictionary.home?.why?.uptime}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Paketleri (The Ultra-Exclusive Collection) */}
      <section className="py-24 md:py-60 bg-[#050505] relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-40 space-y-8">
            <div className="h-[1px] w-24 bg-brand-primary mx-auto opacity-50 mb-8"></div>
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9]">
              {dictionary.home?.packages?.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto">
              {dictionary.home?.packages?.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
            {['starter', 'business', 'professional'].map((slug, i) => {
              const pkg = dictionary.home?.packages?.[slug];
              const isBusiness = slug === 'business';

              return (
                <div key={i} className={cn(
                  "relative p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] border transition-all duration-1000 group flex flex-col h-full overflow-hidden",
                  isBusiness
                    ? "bg-[#0A0A0A] border-brand-primary/40 shadow-[0_0_100px_rgba(0,102,255,0.1)] lg:-translate-y-12"
                    : "bg-[#080808] border-white/5 hover:border-white/10"
                )}>
                  {/* Luxury Corner Highlight */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 blur-[60px] pointer-events-none group-hover:bg-brand-primary/10 transition-colors"></div>

                  <div className="flex-grow space-y-16 py-4">
                    <div className="space-y-6 text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start space-x-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></div>
                        <div className="text-brand-primary text-[9px] font-black uppercase tracking-[0.6em] opacity-80">
                          {pkg?.badge}
                        </div>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none">
                        {pkg?.title?.split(' ')[0]} <br />
                        <span className="text-gray-700 font-bold block mt-2">{pkg?.title?.split(' ')[1]}</span>
                      </h3>
                      <p className="text-gray-600 font-medium text-xs leading-relaxed max-w-[200px] mx-auto lg:mx-0 uppercase tracking-widest">
                        {pkg?.who}
                      </p>
                    </div>

                    <div className="space-y-10">
                      <ul className="grid grid-cols-1 gap-5">
                        {pkg?.bullets?.map((bullet: string, idx: number) => (
                          <li key={idx} className="flex items-start space-x-4 group/item">
                            <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover/item:border-brand-primary/30 transition-all duration-500">
                              <Check className="w-3 h-3 text-gray-500 group-hover/item:text-brand-primary transition-colors" />
                            </div>
                            <span className="text-[13px] text-gray-500 font-medium group-hover/item:text-gray-300 transition-colors uppercase tracking-tight leading-snug">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-16 mt-auto">
                    <a
                      href={`https://wa.me/905515215958?text=${encodeURIComponent(dictionary.common?.whatsapp?.message || "")} (${pkg?.title})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "relative flex items-center justify-center w-full py-7 rounded-full font-black text-[10px] uppercase tracking-[0.5em] transition-all duration-700 active:scale-95 group/btn overflow-hidden",
                        isBusiness
                          ? "bg-white text-black hover:bg-brand-primary hover:text-white shadow-[0_20px_40px_rgba(255,255,255,0.05)]"
                          : "bg-white/5 text-white border border-white/10 hover:border-brand-primary/40 hover:bg-brand-primary/10"
                      )}
                    >
                      <span className="relative z-10">{pkg?.cta}</span>

                      {/* Interaction Glow */}
                      <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover/btn:opacity-100 blur-2xl transition-opacity duration-700 -z-0"></div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Neler Sunuyoruz? */}
      <section className="py-20 md:py-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mb-32 space-y-6">
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9]">
              {dictionary.home?.offerings?.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl">
              {dictionary.home?.offerings?.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { slug: 'domain', icon: Globe },
              { slug: 'design', icon: Monitor },
              { slug: 'email', icon: Database },
              { slug: 'seo', icon: Search },
              { slug: 'security', icon: Lock },
              { slug: 'contact', icon: MessageSquare }
            ].map((item, i) => {
              const offer = dictionary.home?.offerings?.[item.slug];
              return (
                <div key={i} className="group p-12 rounded-[4rem] bg-white/5 border border-white/5 hover:border-brand-primary/20 transition-all card-glow flex flex-col justify-between">
                  <div className="space-y-8">
                    <div className="w-16 h-16 bg-brand-primary/10 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-8 h-8 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{offer?.title}</h3>
                      <p className="text-gray-500 font-medium leading-relaxed mb-8">{offer?.desc}</p>

                      <ul className="space-y-3">
                        {offer?.bullets?.map((bullet: string, idx: number) => (
                          <li key={idx} className="flex items-center space-x-3 text-xs font-black text-gray-400 uppercase tracking-widest">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3 Adımda Timeline */}
      <section className="py-24 md:py-60 bg-grid relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-32 space-y-6">
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9]">
              {dictionary.home?.steps?.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto">
              {dictionary.home?.steps?.subtitle}
            </p>
          </div>

          <div className="relative pt-20">
            {/* Horizontal Line on Desktop */}
            <div className="hidden lg:block absolute top-[calc(5rem+1.5rem)] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 relative">
              {[1, 2, 3].map((stepNum) => {
                const step = dictionary.home?.steps?.[`step${stepNum}`];
                return (
                  <div key={stepNum} className="relative group">
                    <div className="flex flex-col items-center lg:items-start space-y-12">
                      <div className="w-24 h-24 rounded-full bg-luxury-black border-2 border-brand-primary/30 flex items-center justify-center text-4xl font-black text-brand-primary relative z-10 shadow-[0_0_50px_rgba(0,102,255,0.2)] group-hover:border-brand-primary transition-all group-hover:scale-110">
                        {stepNum < 10 ? `0${stepNum}` : stepNum}
                      </div>
                      <div className="text-center lg:text-left space-y-6 max-w-md mx-auto lg:mx-0">
                        <h3 className="text-3xl font-black uppercase tracking-tighter">{step?.title}</h3>
                        <p className="text-gray-500 font-medium leading-relaxed text-lg">
                          {step?.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-60 px-6 lg:px-8 max-w-screen-xl mx-auto text-center relative overflow-visible">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-primary/5 rounded-full blur-[150px] -z-10"></div>
        <div className="space-y-16">
          <h1 className="text-6xl md:text-[12rem] font-black tracking-tighter leading-[0.75] text-white select-none opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap -z-20">
            WEBFINE FUTURE
          </h1>
          <h2
            className="text-4xl md:text-9xl font-black tracking-tighter leading-[0.8] text-white"
            dangerouslySetInnerHTML={{ __html: dictionary.home.finalCta.title }}
          />
          <div className="pt-10">
            <Link
              href={`/${lang}/iletisim`}
              className="inline-flex items-center space-x-6 bg-white text-black px-10 py-5 md:px-16 md:py-8 rounded-[2.5rem] font-black text-lg md:text-2xl hover:scale-110 transition-all active:scale-95 shadow-3xl shadow-white/10 group"
            >
              <span>{dictionary.home.finalCta.button}</span>
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
