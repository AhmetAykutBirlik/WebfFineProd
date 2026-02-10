import { getDictionary } from "@/lib/i18n";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, Instagram, MessageCircle } from "lucide-react"

export default function Footer({ dictionary, lang }: { dictionary: any, lang: string }) {
    return (
        <footer className="bg-luxury-black border-t border-white/5 pt-16 md:pt-32 pb-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-12 md:mb-24">
                    <div className="space-y-8">
                        <Link href={`/${lang}`} className="text-3xl font-black tracking-tighter text-white">
                            WEB<span className="text-brand-primary">FINE</span>
                        </Link>
                        <p className="text-gray-400 text-[15px] leading-relaxed max-w-xs font-medium">
                            {dictionary.footer.desc}
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/webfine.com.tr/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary/30 transition-all" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
                            <a href="https://wa.me/905515215958" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-500/30 transition-all" aria-label="WhatsApp"><MessageCircle className="w-5 h-5" /></a>
                            <a href="tel:05515215958" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary/30 transition-all" aria-label="Telefon"><Phone className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-10">{dictionary.footer.links.services}</h4>
                        <ul className="space-y-6">
                            <li><Link href={`/${lang}/hizmetler#web-tasarim`} className="text-gray-400 hover:text-white transition-colors text-sm font-bold flex items-center group">{dictionary.services.webDesign.title}</Link></li>
                            <li><Link href={`/${lang}/hizmetler#hosting`} className="text-gray-400 hover:text-white transition-colors text-sm font-bold flex items-center group">{dictionary.services.hosting.title}</Link></li>
                            <li><Link href={`/${lang}/hizmetler#domain`} className="text-gray-400 hover:text-white transition-colors text-sm font-bold flex items-center group">{dictionary.services.domain.title}</Link></li>
                            <li><Link href={`/${lang}/blog`} className="text-gray-400 hover:text-white transition-colors text-sm font-bold flex items-center group">{dictionary.nav.blog}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-10">{dictionary.footer.links.contact}</h4>
                        <ul className="space-y-6">
                            <li className="flex flex-col space-y-2">
                                <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Telefon</span>
                                <a href="tel:05515215958" className="text-white hover:text-brand-primary transition-colors font-black text-lg">+90 551 521 59 58</a>
                            </li>
                            <li className="flex flex-col space-y-2">
                                <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">E-posta</span>
                                <a href="mailto:info@webfine.com.tr" className="text-white hover:text-brand-primary transition-colors font-black text-lg">info@webfine.com.tr</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-10">{dictionary.footer.links.legal}</h4>
                        <ul className="space-y-6">
                            <li><Link href={`/${lang}/legal/cookies`} className="text-gray-400 hover:text-white transition-colors text-sm font-bold">{dictionary.footer.legal.cookies}</Link></li>
                            <li><Link href={`/${lang}/legal/kvkk`} className="text-gray-400 hover:text-white transition-colors text-sm font-bold">{dictionary.footer.legal.kvkk}</Link></li>
                            <li><Link href={`/${lang}/legal/privacy`} className="text-gray-400 hover:text-white transition-colors text-sm font-bold">{dictionary.footer.legal.privacy}</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[11px] font-black uppercase tracking-[0.2em] text-gray-600">
                    <p>{dictionary.footer.copyright}</p>
                    <div className="flex space-x-8">
                        <span className="text-brand-primary tracking-tighter">DESIGN BY WEBFINE</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
