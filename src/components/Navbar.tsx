'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar({ dictionary }: { dictionary: any }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const params = useParams();
    const pathname = usePathname();
    const lang = params.lang as string;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        const newLang = lang === 'tr' ? 'en' : 'tr';
        const segments = pathname.split('/');
        segments[1] = newLang;
        const newPath = segments.join('/');
        window.location.href = newPath;
    };

    const navItems = [
        { label: dictionary.nav.home, href: `/${lang}` },
        { label: dictionary.nav.services, href: `/${lang}/hizmetler` },
        { label: dictionary.nav.projects, href: `/${lang}/projelerimiz` },
        { label: dictionary.nav.about, href: `/${lang}/hakkimizda` },
        { label: dictionary.nav.contact, href: `/${lang}/iletisim` },
    ];

    return (
        <nav className={cn(
            "fixed w-full z-50 transition-all duration-500 px-4 py-4",
            scrolled ? "top-0" : "top-2"
        )}>
            <div className={cn(
                "max-w-7xl mx-auto rounded-[2rem] transition-all duration-500 border border-transparent",
                scrolled ? "glass-morphism-navbar shadow-2xl py-2 px-6 md:px-10 border-white/25" : "bg-white/5 backdrop-blur-2xl py-3 px-6 md:px-10 border-white/10"
            )}>
                <div className="flex justify-between items-center w-full">
                    <Link href={`/${lang}`} className="flex items-center space-x-2 group">
                        <span className="text-2xl md:text-4xl font-black tracking-tighter text-white logo-glow py-2 select-none">
                            WEB<span className="text-brand-primary">FINE</span>
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-12">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="relative group overflow-hidden"
                            >
                                <span className={cn(
                                    "text-[12px] font-black uppercase tracking-[0.2em] transition-all duration-300",
                                    pathname === item.href ? "text-brand-primary" : "text-gray-400 group-hover:text-white"
                                )}>
                                    {item.label}
                                </span>
                                <motion.div
                                    className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-brand-primary"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </Link>
                        ))}

                        <button
                            onClick={toggleLanguage}
                            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center space-x-3 text-[10px] font-black hover:bg-white/10 hover:border-brand-primary/40 hover:scale-105 transition-all active:scale-95 group shadow-lg shadow-black/20"
                        >
                            {lang === 'tr' ? (
                                <>
                                    <img src="https://flagcdn.com/w40/tr.png" alt="TR" className="w-5 h-auto rounded-sm" />
                                    <span className="text-white tracking-[0.2em]">TR</span>
                                </>
                            ) : (
                                <>
                                    <img src="https://flagcdn.com/w40/gb.png" alt="EN" className="w-5 h-auto rounded-sm" />
                                    <span className="text-white tracking-[0.2em]">EN</span>
                                </>
                            )}
                        </button>
                    </div>

                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleLanguage}
                            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center space-x-2"
                        >
                            <img
                                src={lang === 'tr' ? "https://flagcdn.com/w40/tr.png" : "https://flagcdn.com/w40/gb.png"}
                                alt={lang}
                                className="w-4 h-auto rounded-sm"
                            />
                            <span className="text-[10px] font-black text-white uppercase">{lang}</span>
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
                        >
                            {isOpen ? <X className="w-5 h-5 md:w-8 md:h-8" /> : <Menu className="w-5 h-5 md:w-8 md:h-8" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        className="fixed inset-0 z-40 md:hidden bg-luxury-black/98 backdrop-blur-3xl p-8 flex flex-col justify-center"
                    >
                        <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-white"><X className="w-10 h-10" /></button>
                        <div className="space-y-8 text-center">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block text-4xl font-black text-white active:text-brand-primary tracking-tighter"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
