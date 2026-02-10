import { getDictionary } from "@/lib/i18n";
import Link from "next/link";
import DomainSearch from "@/components/DomainCheck";
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
import ScrollReveal from "@/components/ScrollReveal";

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
    <div className="bg-luxury-black min-h-screen text-white selection:bg-brand-primary/30 overflow-x-hidden">
      {/* Cinematic Hero */}
      <section className="relative min-h-screen pt-32 pb-16 md:pt-56 md:pb-32 flex flex-col items-center justify-center overflow-hidden text-white">
        <div className="absolute inset-0 bg-grid pointer-events-none"></div>
        <Stars count={200} />
        <Stars count={200} />

        {/* Deep Field Lighting - Proportional scale */}
        <div className="hidden md:block absolute top-[5%] left-[-5%] w-[800px] h-[800px] bg-blue-600/30 rounded-full aurora-blur pointer-events-none blur-[100px]"></div>
        <div className="hidden md:block absolute bottom-[5%] right-[-5%] w-[800px] h-[800px] bg-brand-primary/30 rounded-full aurora-blur pointer-events-none blur-[120px]"></div>
        <div className="hidden md:block absolute top-[25%] right-[10%] w-[500px] h-[500px] bg-indigo-600/25 rounded-full aurora-blur pointer-events-none blur-[80px]"></div>

        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
          <div className="text-center space-y-8 md:space-y-10">
            <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white text-luxury-black text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              {dictionary.home?.hero?.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tight leading-[1] md:leading-[0.95] text-white select-none drop-shadow-2xl">
              {(dictionary.home?.hero?.title || "").split(' ').map((word: string, i: number) => (
                <span key={i} className="inline-block transition-all duration-300 mr-2 md:mr-4">
                  {word}
                </span>
              ))}
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 font-medium leading-relaxed animate-fade-in-up">
              {dictionary.home?.hero?.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-5 sm:space-y-0 sm:space-x-6 pt-4">
              <Link
                href={`/${lang}/projelerimiz`}
                className="w-full sm:w-auto bg-[#0066FF] hover:bg-[#0052cc] text-white px-10 py-4 md:px-12 md:py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all shadow-[0_20px_50px_rgba(0,102,255,0.4)] hover:shadow-[0_20px_60px_rgba(0,102,255,0.6)] hover:scale-105 active:scale-95 text-center group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {dictionary.home?.hero?.cta}
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
              <Link
                href={`/${lang}/iletisim`}
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-black px-10 py-4 md:px-12 md:py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95 text-center flex items-center justify-center space-x-3"
              >
                <Play className="w-4 h-4 fill-current text-[#0066FF]" />
                <span>{dictionary.common?.buttons?.contactUs}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DomainSearch dictionary={dictionary} lang={lang} />

      {/* Neden WebFine? */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <ScrollReveal className="space-y-4">
                <div className="h-[2px] w-12 bg-brand-primary mx-auto lg:mx-0"></div>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-[1] md:leading-[0.95]">
                  {dictionary.home?.why?.title}
                </h2>
                <p className="text-base md:text-lg text-gray-400 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {dictionary.home?.why?.desc}
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { icon: ShieldCheck, title: dictionary.home?.why?.security, desc: dictionary.home?.why?.securityDesc },
                  { icon: Cloud, title: dictionary.home?.why?.storage, desc: dictionary.home?.why?.storageDesc },
                  { icon: Zap, title: dictionary.home?.why?.speed, desc: dictionary.home?.why?.speedDesc },
                  { icon: MessageSquare, title: dictionary.home?.why?.support, desc: dictionary.home?.why?.supportDesc }
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="group p-4 md:p-6 rounded-2xl md:rounded-[2rem] bg-white/10 border border-white/5 hover:border-brand-primary/20 transition-all card-glow flex flex-col items-center text-center sm:items-start sm:text-left">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-primary/10 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 border-beam">
                        <item.icon className="w-4 h-4 md:w-5 md:h-5 text-brand-primary" />
                      </div>
                      <h4 className="text-[13px] md:text-sm font-black uppercase tracking-tight mb-1 md:mb-2">{item.title}</h4>
                      <p className="text-[11px] md:text-xs text-gray-400 font-medium leading-relaxed line-clamp-2 md:line-clamp-none">{item.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] max-w-[400px] mx-auto rounded-[3rem] bg-white/5 border border-white/10 p-2.5 relative group overflow-hidden shadow-3xl">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative bg-[#0a0a0a]">
                  <img src="/img/1.png" alt="Why WebFine" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                </div>

                {/* Top Performance Badge */}
                <div className="absolute top-4 -right-2 md:top-8 md:-right-6 glass-morphism p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-white/20 shadow-2xl animate-float z-20">
                  <Zap className="w-6 h-6 md:w-8 md:h-8 text-brand-primary mb-1" />
                  <div className="font-black text-2xl md:text-3xl tracking-tighter uppercase whitespace-nowrap text-white">%99.9</div>
                  <div className="font-bold text-[7px] md:text-[8px] tracking-[0.2em] uppercase text-gray-400 mt-1">{dictionary.home?.why?.uptime}</div>
                </div>

                {/* Bottom Growth Stats - Visual Bars Only */}
                <div className="absolute bottom-12 right-12 z-20">
                  <div className="flex items-end space-x-1.5 h-20">
                    <div className="w-1.5 bg-white/10 rounded-full h-[30%]"></div>
                    <div className="w-1.5 bg-white/20 rounded-full h-[50%]"></div>
                    <div className="w-1.5 bg-white/30 rounded-full h-[40%]"></div>
                    <div className="w-1.5 bg-white/40 rounded-full h-[70%]"></div>
                    <div className="w-1.5 bg-white/60 rounded-full h-[60%]"></div>
                    <div className="w-1.5 bg-brand-primary rounded-full h-[100%] animate-bounce shadow-[0_0_30px_rgba(0,102,255,0.5)]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Paketleri (The Ultra-Exclusive Collection) */}
      <section className="py-16 md:py-24 bg-[#050505] relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="h-[1px] w-12 bg-brand-primary mx-auto opacity-50 mb-4"></div>
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-white uppercase leading-[0.95]">
              {dictionary.home?.packages?.title}
            </h2>
            <p className="text-base md:text-lg text-gray-300 font-medium max-w-lg mx-auto">
              {dictionary.home?.packages?.subtitle}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
            {['starter', 'business', 'professional'].map((slug, i) => {
              const pkg = dictionary.home?.packages?.[slug];
              const isBusiness = slug === 'business';

              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className={cn(
                    "relative p-6 md:p-12 rounded-[2.5rem] md:rounded-[4rem] border transition-all duration-1000 group flex flex-col h-full overflow-hidden",
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
                        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none">
                          {pkg?.title?.split(' ')[0]} <br />
                          <span className="text-gray-400 font-bold block mt-1 md:mt-2">{pkg?.title?.split(' ')[1]}</span>
                        </h3>
                        <p className="text-gray-300 font-medium text-[10px] md:text-xs leading-relaxed max-w-[200px] mx-auto lg:mx-0 uppercase tracking-widest">
                          {pkg?.who}
                        </p>
                      </div>

                      <div className="space-y-10">
                        <ul className="grid grid-cols-1 gap-5">
                          {pkg?.bullets?.map((bullet: string, idx: number) => (
                            <li key={idx} className="flex items-start space-x-4 group/item">
                              <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover/item:border-brand-primary/30 transition-all duration-500">
                                <Check className="w-3 h-3 text-gray-400 group-hover/item:text-brand-primary transition-colors" />
                              </div>
                              <span className="text-[13px] text-gray-300 font-medium group-hover/item:text-white transition-colors uppercase tracking-tight leading-snug">{bullet}</span>
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
                          "relative flex items-center justify-center w-full py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-700 active:scale-95 group/btn overflow-hidden",
                          isBusiness
                            ? "bg-white text-black hover:bg-brand-primary hover:text-white shadow-[0_20px_40px_rgba(255,255,255,0.05)]"
                            : "bg-white/10 text-white border border-white/10 hover:border-brand-primary hover:bg-brand-primary"
                        )}
                      >
                        <span className="relative z-10">{pkg?.cta}</span>

                        {/* Interaction Glow */}
                        <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover/btn:opacity-100 blur-2xl transition-opacity duration-700 -z-0"></div>
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Neler Sunuyoruz? */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <ScrollReveal className="max-w-3xl mb-16 space-y-4">
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-white uppercase leading-[0.95]">
              {dictionary.home?.offerings?.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium max-w-xl">
              {dictionary.home?.offerings?.desc}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
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
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="group p-5 md:p-8 rounded-3xl md:rounded-[3rem] bg-white/10 border border-white/5 hover:border-brand-primary/20 transition-all card-glow flex flex-col justify-between h-full">
                    <div className="space-y-4 md:space-y-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon className="w-5 h-5 md:w-6 md:h-6 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter mb-2 md:mb-3">{offer?.title}</h3>
                        <p className="text-gray-400 text-xs md:text-sm font-medium leading-relaxed mb-4 md:mb-6">{offer?.desc}</p>

                        <ul className="space-y-2">
                          {offer?.bullets?.map((bullet: string, idx: number) => (
                            <li key={idx} className="flex items-center space-x-2 text-[9px] md:text-[10px] font-black text-gray-300 uppercase tracking-widest">
                              <div className="w-1 h-1 rounded-full bg-brand-primary shrink-0" />
                              <span className="leading-tight">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3 Adımda Timeline */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-white uppercase leading-[0.95]">
              {dictionary.home?.steps?.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-200 font-medium max-w-xl mx-auto">
              {dictionary.home?.steps?.subtitle}
            </p>
          </ScrollReveal>

          <div className="relative pt-10">
            {/* Horizontal Line on Desktop */}
            <div className="hidden lg:block absolute top-[calc(3rem+1rem)] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary/60 to-transparent"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
              {[1, 2, 3].map((stepNum) => {
                const step = dictionary.home?.steps?.[`step${stepNum}`];
                return (
                  <ScrollReveal key={stepNum} delay={stepNum * 0.2}>
                    <div className="relative group">
                      <div className="flex flex-col items-center lg:items-start space-y-8">
                        <div className="w-16 h-16 rounded-full bg-brand-primary/5 border border-brand-primary/60 flex items-center justify-center text-2xl font-black text-brand-primary relative z-10 shadow-[0_0_40px_rgba(0,102,255,0.3)] group-hover:border-brand-primary group-hover:bg-brand-primary/10 transition-all group-hover:scale-110">
                          {stepNum < 10 ? `0${stepNum}` : stepNum}
                        </div>
                        <div className="text-center lg:text-left space-y-4 max-w-sm mx-auto lg:mx-0">
                          <h3 className="text-xl font-black uppercase tracking-tighter text-white">{step?.title}</h3>
                          <p className="text-gray-200 font-medium leading-relaxed text-base">
                            {step?.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Minimal & Elegant */}
      <section className="py-24 md:py-32 px-6 lg:px-8 max-w-screen-xl mx-auto text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-brand-primary/5 rounded-full blur-[120px] -z-10"></div>
        <ScrollReveal className="space-y-10 relative z-10">
          <h1 className="text-5xl md:text-[8rem] font-black tracking-[0.2em] leading-none text-white select-none opacity-[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap -z-20 pointer-events-none">
            WEBFINE
          </h1>
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white"
            dangerouslySetInnerHTML={{ __html: dictionary.home.finalCta.title }}
          />
          <div className="pt-4">
            <Link
              href={`/${lang}/iletisim`}
              className="inline-flex items-center space-x-3 bg-white text-black px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-sm md:text-base hover:bg-brand-primary hover:text-white transition-all active:scale-95 shadow-xl shadow-white/5 group"
            >
              <span>{dictionary.home.finalCta.button}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
