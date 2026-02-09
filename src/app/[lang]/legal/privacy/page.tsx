import { getDictionary } from "@/lib/i18n";
import ReactMarkdown from "react-markdown";
import { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return {
        title: `${dictionary.legalPages.privacy.title} | WebFine`,
    };
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return (
        <div className="bg-luxury-black min-h-screen text-white pt-32 md:pt-40 pb-20 md:pb-40">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-20 text-flow">
                    {dictionary.legalPages.privacy.title}
                </h1>
                <div className="prose prose-invert prose-brand max-w-none">
                    <div className="space-y-12 text-xl text-gray-400 font-medium leading-relaxed">
                        <ReactMarkdown>
                            {dictionary.legalPages.privacy.content}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
}
