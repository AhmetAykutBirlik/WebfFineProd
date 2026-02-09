import { getDictionary } from "@/lib/i18n";
import ContactPageContent from "@/components/ContactPageContent";
import { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return {
        title: `${dictionary.contact.title} | WebFine`,
        description: dictionary.contact.desc,
    };
}

export default async function Contact({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return <ContactPageContent dictionary={dictionary} lang={lang} />;
}
