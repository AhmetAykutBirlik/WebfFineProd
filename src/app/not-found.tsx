import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
    return (
        <div className="relative min-h-screen bg-luxury-black flex items-center justify-center overflow-hidden">
            {/* Background Effects */}
            <div className="bg-shimmer-sweep" />
            <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] extreme-vivid-aurora -z-10 opacity-30 md:opacity-60"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] extreme-vivid-aurora -z-10 opacity-20 md:opacity-40"></div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                {/* 404 Number */}
                <div className="mb-8">
                    <h1 className="text-[180px] md:text-[280px] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 opacity-20 select-none">
                        404
                    </h1>
                </div>

                {/* Content */}
                <div className="space-y-6 -mt-32 md:-mt-48">
                    <div className="inline-flex items-center space-x-3 text-brand-primary font-bold uppercase tracking-[0.2em] text-[10px] bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-3xl">
                        <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                        <span>Sayfa Bulunamadı</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-tight">
                        Bu Sayfa Mevcut Değil
                    </h2>

                    <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
                        Aradığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanılamıyor olabilir.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                        <Link
                            href="/"
                            className="group relative inline-flex items-center space-x-3 bg-white text-luxury-black px-8 py-4 rounded-full font-bold tracking-wide hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                        >
                            <Home className="w-5 h-5" />
                            <span>Ana Sayfaya Dön</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/tr/iletisim"
                            className="group inline-flex items-center space-x-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold tracking-wide hover:bg-white/10 transition-all duration-300 backdrop-blur-xl"
                        >
                            <span>İletişime Geç</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full -z-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full -z-10"></div>
            </div>
        </div>
    );
}
