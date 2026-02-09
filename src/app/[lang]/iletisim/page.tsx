import { getDictionary } from "@/lib/i18n";
import ContactPageContent from "@/components/ContactPageContent";

export default async function Contact({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return <ContactPageContent dictionary={dictionary} lang={lang} />;
}
