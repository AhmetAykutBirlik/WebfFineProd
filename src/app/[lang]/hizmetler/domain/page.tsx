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
        title: `${dictionary.services.domain.title} | WebFine`,
        description: dictionary.services.domain.desc,
    };
}

export default async function Domain({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return (
        <div className="bg-white">
            <section className="pt-32 md:pt-40 pb-16 bg-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">{dictionary.services.domain.title}</h1>
                    <p className="text-xl opacity-90 font-medium max-w-2xl">{dictionary.services.domain.desc}</p>
                </div>
            </section>
            <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-black text-luxury-black">Profesyonel Alan Adı Yönetimi</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">İşletmenizin dijital kimliğinin temeli olan alan adını sizin adınıza tescil ediyor, DNS yönetimi ve yenileme süreçlerini profesyonelce takip ediyoruz.</p>
                        <ul className="space-y-4">
                            {["Anında Tescil", "Ücretsiz DNS Yönetimi", ".com, .com.tr, .net ve daha fazlası", "Güvenli Transfer"].map((item, i) => (
                                <li key={i} className="flex items-center space-x-3 font-bold text-luxury-black">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="aspect-square rounded-[3rem] bg-gray-100 overflow-hidden shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80" alt="Domain" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>
        </div>
    );
}
