import { getDictionary } from "@/lib/i18n";
import { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return {
        title: `${dictionary.services.hosting.title} | WebFine`,
        description: dictionary.services.hosting.desc,
    };
}

export default async function Hosting({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return (
        <div className="bg-white">
            <section className="pt-32 md:pt-40 pb-16 bg-indigo-600 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">{dictionary.services.hosting.title}</h1>
                    <p className="text-xl opacity-90 font-medium max-w-2xl">{dictionary.services.hosting.desc}</p>
                </div>
            </section>
            <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div className="aspect-video rounded-[3rem] bg-gray-100 overflow-hidden shadow-2xl order-2 md:order-1">
                        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80" alt="Hosting" className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-6 order-1 md:order-2">
                        <h2 className="text-3xl font-black text-luxury-black">Yüksek Performanslı Bulut Altyapısı</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">WebFine olarak, sitelerinizin her zaman hızlı ve ulaşılabilir olması için dünyanın önde gelen bulut servis sağlayıcılarını kullanıyoruz.</p>
                        <ul className="space-y-4">
                            {["99.9% Uptime Garantisi", "Günlük Otomatik Yedekleme", "LiteSpeed Web Server", "Ücretsiz SSL Sertifikası"].map((item, i) => (
                                <li key={i} className="flex items-center space-x-3 font-bold text-luxury-black">
                                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
