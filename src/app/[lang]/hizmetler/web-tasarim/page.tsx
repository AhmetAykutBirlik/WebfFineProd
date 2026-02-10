import { getDictionary } from "@/lib/i18n";
import { MoveRight } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return {
        title: `${dictionary.services.webDesign.title} | WebFine`,
        description: dictionary.services.webDesign.desc,
    };
}

export default async function WebDesign({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return (
        <div className="bg-white">
            <section className="pt-32 md:pt-40 pb-16 bg-luxury-black text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">{dictionary.services.webDesign.title}</h1>
                    <p className="text-xl opacity-90 font-medium max-w-2xl">{dictionary.services.webDesign.desc}</p>
                </div>
            </section>

            <section className="py-32 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-8 space-y-20">
                        <div className="space-y-8">
                            <h2 className="text-5xl font-black text-luxury-black tracking-tighter">İşletmenize Özel Modern Web Tasarımı</h2>
                            <p className="text-xl text-gray-600 font-medium leading-relaxed">Sadece güzel görünen değil, aynı zamanda hedef kitlenizi etkileyen ve satışlarınıza katkı sağlayan performans odaklı web siteleri tasarlıyoruz.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-6 p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                                <h4 className="text-2xl font-black text-luxury-black italic underline decoration-brand-primary decoration-4">UX/UI Design</h4>
                                <p className="text-gray-600 font-medium">Kullanıcı deneyimini en üst seviyede tutan, sezgisel ve etkileyici arayüzler tasarlıyoruz.</p>
                            </div>
                            <div className="space-y-6 p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                                <h4 className="text-2xl font-black text-luxury-black italic underline decoration-brand-primary decoration-4">Responsive</h4>
                                <p className="text-gray-600 font-medium">Siteniz tüm cihazlarda (mobil, tablet, desktop) kusursuz ve hızlı çalışır.</p>
                            </div>
                        </div>

                        <div className="aspect-[16/9] rounded-[3rem] bg-gray-100 overflow-hidden shadow-2xl relative group">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="/img/Web Design.mov" type="video/quicktime" />
                                <source src="/img/Web Design.mov" type="video/mp4" />
                                Tarayıcınız video etiketini desteklemiyor.
                            </video>
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-8 h-fit lg:sticky lg:top-32">
                        <div className="bg-luxury-black text-white p-10 rounded-[2.5rem] space-y-8">
                            <h4 className="text-2xl font-black tracking-tight">Tasarıma Başlayalım mı?</h4>
                            <p className="text-gray-400 font-medium">Hayalinizdeki projeyi bizimle paylaşın, 3 gün içinde yayına alalım.</p>
                            <a href={`/${lang}/iletisim`} className="block w-full text-center bg-white text-luxury-black py-4 rounded-2xl font-black hover:bg-gray-100 transition-all">
                                Şimdi Başvurun
                            </a>
                        </div>

                        <div className="p-10 border border-gray-100 rounded-[2.5rem] space-y-6">
                            <h4 className="text-xl font-black text-luxury-black">Neden Biz?</h4>
                            <ul className="space-y-4">
                                {["A+ Tasarım Kalitesi", "Modern Tech Stack", "SEO Dostu Yapı", "Hızlı Teslimat"].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-3 font-bold text-gray-600">
                                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
