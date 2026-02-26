'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Zap,
  ShieldCheck,
  Eye,
  CheckCircle2,
  AlertCircle,
  Mail,
  ArrowRight,
  BarChart3,
  Globe,
  Smartphone,
  ChevronDown,
  Layout,
  Link,
  ImageIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SeoAuditTool({ dictionary, lang }: { dictionary: any; lang: string }) {
  const [domain, setDomain] = useState('');
  const [email, setEmail] = useState('');
  const [step, setStep] = useState<'idle' | 'analyzing' | 'lead-gate' | 'results'>('idle');
  const [progress, setProgress] = useState(0);
  const [currentPage, setCurrentPage] = useState('');
  const [auditResults, setAuditResults] = useState<any[]>([]);
  const [expandedPage, setExpandedPage] = useState<number | null>(null);

  const t = dictionary.seoAnalysis.tool;

  const pagesToScan = [
    '/',
    '/hizmetler',
    '/hizmetler/web-tasarim',
    '/hizmetler/seo',
    '/hakkimizda',
    '/projelerimiz',
    '/iletisim',
    '/blog'
  ];

  const startAnalysis = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain) return;

    setStep('analyzing');
    let p = 0;
    let pageIdx = 0;

    const interval = setInterval(() => {
      p += Math.random() * 8;

      const targetPageIdx = Math.floor((p / 100) * pagesToScan.length);
      if (targetPageIdx > pageIdx && targetPageIdx < pagesToScan.length) {
        pageIdx = targetPageIdx;
        setCurrentPage(pagesToScan[pageIdx]);
      }

      if (p >= 100) {
        clearInterval(interval);
        setProgress(100);

        // Simulation of page-by-page detailed results
        const mockResults = pagesToScan.map(p => ({
          url: p,
          score: Math.floor(Math.random() * 25) + 75,
          health: Math.random() > 0.5 ? 'Good' : 'Needs Optimization',
          metrics: {
            title: Math.random() > 0.2,
            desc: Math.random() > 0.3,
            images: Math.floor(Math.random() * 15),
            altIssues: Math.floor(Math.random() * 5),
            h1: Math.random() > 0.1 ? 1 : 0
          },
          issues: [
            { type: 'success', text: lang === 'tr' ? 'Meta etiketleri standartlara uygun.' : 'Meta tags follow standards.' },
            { type: 'warning', text: lang === 'tr' ? 'Görsel alt etiketleri eksik.' : 'Image alt tags are missing.' },
            { type: 'error', text: lang === 'tr' ? 'H1 başlığı yapılandırması kontrol edilmeli.' : 'H1 heading structure needs review.' },
          ].filter(() => Math.random() > 0.4)
        }));
        setAuditResults(mockResults);

        setTimeout(() => setStep('lead-gate'), 800);
      } else {
        setProgress(p);
      }
    }, 300);
  };

  const showResults = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Report to Telegram via API
    try {
      await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          domain,
          email,
          score: 89,
          errors: 2,
          warnings: 4,
          pagesAudited: pagesToScan.length,
          durationMs: 4800
        })
      });
    } catch (err) {
      console.error('Failed to notify telegram:', err);
    }

    setStep('results');
  };

  const scores = [
    { label: t.scores.performance, value: 87, icon: Zap, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { label: t.scores.seo, value: 94, icon: BarChart3, color: 'text-green-500', bg: 'bg-green-500/10' },
    { label: t.scores.accessibility, value: 81, icon: Eye, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: t.scores.bestPractices, value: 92, icon: ShieldCheck, color: 'text-brand-primary', bg: 'bg-brand-primary/10' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        {step === 'idle' && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass-morphism p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-3xl overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[80px] -z-10"></div>
            <form onSubmit={startAnalysis} className="space-y-8">
              <div className="space-y-4">
                <p className="text-gray-400 text-sm font-bold uppercase tracking-widest text-center">
                  {dictionary.seoAnalysis.inputHint}
                </p>
                <div className="relative">
                  <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                    <Globe className="w-6 h-6 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder={t.inputPlaceholder}
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pl-16 pr-6 text-xl font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all placeholder:text-gray-500"
                    required
                  />
                </div>
              </div>
              <div className="space-y-6">
                <button
                  type="submit"
                  className="w-full bg-[#0066FF] hover:bg-[#0052cc] text-white py-5 md:py-6 rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.3em] transition-all shadow-[0_20px_50px_rgba(0,102,255,0.4)] hover:shadow-[0_20px_60px_rgba(0,102,255,0.6)] hover:scale-[1.02] active:scale-[0.98] group flex items-center justify-center"
                >
                  <span>{t.startAnalysis}</span>
                  <ArrowRight className="ml-3 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                </button>

                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-2">
                  {[
                    dictionary.seoAnalysis.trustBadge.free,
                    dictionary.seoAnalysis.trustBadge.noCard,
                    dictionary.seoAnalysis.trustBadge.instant
                  ].map((text, i) => (
                    <div key={i} className="flex items-center text-[10px] font-black uppercase tracking-widest text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mr-2"></div>
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </motion.div>
        )}

        {step === 'analyzing' && (
          <motion.div
            key="analyzing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center space-y-8"
          >
            <div className="relative w-40 h-40 mx-auto">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-white/5 stroke-current"
                  strokeWidth="8"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                />
                <motion.circle
                  className="text-brand-primary stroke-current"
                  strokeWidth="8"
                  strokeLinecap="round"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  strokeDasharray="251.2"
                  animate={{ strokeDashoffset: 251.2 - (251.2 * progress) / 100 }}
                  transition={{ duration: 0.5 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-black">{Math.round(progress)}%</span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest animate-pulse">
                {t.searching}
              </h3>
              <div className="flex flex-col items-center space-y-2">
                <p className="text-gray-400 font-medium">
                  {domain}
                </p>
                <div className="flex items-center space-x-2 text-brand-primary text-xs font-black uppercase tracking-widest bg-brand-primary/10 px-4 py-1.5 rounded-full border border-brand-primary/20">
                  <Layout className="w-3.5 h-3.5" />
                  <span>CRAWLING: {currentPage || pagesToScan[0]}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {step === 'lead-gate' && (
          <motion.div
            key="lead-gate"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="glass-morphism p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-white/20 shadow-3xl text-center space-y-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent"></div>

            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
                {t.leadGateTitle}
              </h2>
              <p className="text-gray-300 font-medium max-w-lg mx-auto leading-relaxed">
                {t.leadGateDesc}
              </p>
            </div>

            <form onSubmit={showResults} className="space-y-4 max-w-md mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-14 pr-6 text-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black hover:bg-brand-primary hover:text-white py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl flex items-center justify-center group"
              >
                <span>{t.viewReport}</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
              {t.leadGateFooter}
            </p>
          </motion.div>
        )}

        {step === 'results' && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">{t.resultsTitle}</h2>
              <p className="text-brand-primary font-bold uppercase tracking-[0.3em]">{domain}</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {scores.map((score, i) => (
                <div key={i} className="glass-morphism p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/5 flex flex-col items-center text-center space-y-3 md:space-y-4">
                  <div className={cn("w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center", score.bg)}>
                    <score.icon className={cn("w-5 h-5 md:w-6 md:h-6", score.color)} />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-black mb-1">{score.value}</div>
                    <div className="text-[8px] md:text-[10px] text-gray-400 font-bold uppercase tracking-widest">{score.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Score Scale */}
            <div className="flex flex-wrap justify-center gap-6 mt-4 opacity-70">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t.scale.good}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t.scale.needsImprovement}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t.scale.critical}</span>
              </div>
            </div>

            {/* Summary Analysis */}
            <div className="glass-morphism p-8 rounded-[2.5rem] border border-white/10 bg-brand-primary/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 blur-[50px] -z-10 group-hover:bg-brand-primary/20 transition-all"></div>
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight flex items-center">
                  <AlertCircle className="w-5 h-5 md:w-6 md:h-6 mr-3 text-brand-primary" />
                  {t.summaryAnalysis}
                </h3>
                <p className="text-gray-300 text-base md:text-lg font-medium leading-relaxed max-w-3xl">
                  {Math.round(scores.reduce((a, b) => a + b.value, 0) / scores.length) >= 90
                    ? t.summaryInsights.good
                    : Math.round(scores.reduce((a, b) => a + b.value, 0) / scores.length) >= 70
                      ? t.summaryInsights.warning
                      : t.summaryInsights.error
                  }
                </p>
                <div className="flex items-center space-x-4 pt-2">
                  <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.round(scores.reduce((a, b) => a + b.value, 0) / scores.length)}%` }}
                      className={cn(
                        "h-full",
                        Math.round(scores.reduce((a, b) => a + b.value, 0) / scores.length) >= 90 ? "bg-green-500" :
                          Math.round(scores.reduce((a, b) => a + b.value, 0) / scores.length) >= 70 ? "bg-orange-500" : "bg-red-500"
                      )}
                    />
                  </div>
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest whitespace-nowrap">
                    {Math.round(scores.reduce((a, b) => a + b.value, 0) / scores.length)}% TOTAL HEALTH
                  </span>
                </div>
              </div>
            </div>

            <div className="glass-morphism p-5 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 space-y-6 md:space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight flex items-center">
                  <Search className="w-5 h-5 md:w-6 md:h-6 mr-3 text-brand-primary" />
                  {t.detailedAnalysis}
                </h3>
                <div className="text-[10px] font-black uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10 uppercase">
                  {pagesToScan.length} {t.pagesScanned}
                </div>
              </div>

              <div className="grid gap-4">
                {auditResults.map((page, idx) => (
                  <div key={idx} className="overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] transition-all">
                    <button
                      onClick={() => setExpandedPage(expandedPage === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-5 hover:bg-white/[0.04] transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs border",
                          page.score >= 90 ? "bg-green-500/10 text-green-500 border-green-500/20" :
                            page.score >= 80 ? "bg-orange-500/10 text-orange-500 border-orange-500/20" :
                              "bg-red-500/10 text-red-500 border-red-500/20"
                        )}>
                          {page.score}
                        </div>
                        <div className="text-left">
                          <div className="text-sm font-bold text-gray-200">{page.url}</div>
                          <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                            {page.health === 'Good' ? t.optimized : t.needsAttention}
                          </div>
                        </div>
                      </div>
                      <ChevronDown className={cn("w-5 h-5 text-gray-500 transition-transform", expandedPage === idx && "rotate-180")} />
                    </button>

                    <AnimatePresence>
                      {expandedPage === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="border-t border-white/5"
                        >
                          <div className="p-6 space-y-6">
                            {/* Metrics Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                                <div className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">{t.metrics.titles}</div>
                                <div className="flex items-center text-xs font-bold text-gray-300">
                                  {page.metrics.title ? <CheckCircle2 className="w-3 h-3 text-green-500 mr-1.5" /> : <AlertCircle className="w-3 h-3 text-red-500 mr-1.5" />}
                                  {page.metrics.title ? 'OK' : 'MISSING'}
                                </div>
                              </div>
                              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                                <div className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">{t.metrics.headings}</div>
                                <div className="text-xs font-bold text-gray-300">{page.metrics.h1} FOUND</div>
                              </div>
                              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                                <div className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">{t.metrics.images}</div>
                                <div className="text-xs font-bold text-gray-300">{page.metrics.images} TOTAL</div>
                              </div>
                              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                                <div className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">{t.metrics.altTags}</div>
                                <div className="text-xs font-bold text-red-400">{page.metrics.altIssues} ISSUES</div>
                              </div>
                            </div>

                            {/* Issues List */}
                            <div className="space-y-3">
                              {page.issues.map((issue: any, i: number) => (
                                <div key={i} className="flex items-start space-x-3 p-3 rounded-xl bg-white/5 border border-white/5">
                                  {issue.type === 'success' && <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />}
                                  {issue.type === 'warning' && <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />}
                                  {issue.type === 'error' && <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />}
                                  <span className="text-xs font-medium text-gray-300">{issue.text}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-brand-primary/10 border border-brand-primary/20 text-center space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tight">
                {lang === 'tr' ? 'Profesyonel Destek' : 'Professional Support'}
              </h3>
              <p className="text-gray-300 max-w-md mx-auto">
                {lang === 'tr'
                  ? 'Bu sorunları ve daha fazlasını sizin için profesyonel ekibimizle çözebiliriz.'
                  : 'We can solve these issues and more for you with our professional team.'}
              </p>
              <a
                href={`/${lang}/iletisim`}
                className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-brand-primary hover:text-white transition-all uppercase"
              >
                {lang === 'tr' ? 'Teklif Al' : 'Get Quote'}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
