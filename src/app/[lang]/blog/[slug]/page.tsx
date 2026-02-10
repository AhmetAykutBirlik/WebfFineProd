import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Calendar, User, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        lang: post.lang,
        slug: post.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
    const { lang, slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug && p.lang === lang);

    if (!post) return {};

    return {
        title: `${post.title} | WebFine Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
        },
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ lang: string; slug: string }>;
}) {
    const { lang, slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug && p.lang === lang);

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-luxury-black min-h-screen text-white/90 pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <Link
                    href={`/${lang}/blog`}
                    className="inline-flex items-center space-x-2 text-gray-400 hover:text-brand-primary transition-colors mb-12 uppercase text-xs font-black tracking-widest"
                >
                    <ChevronLeft className="w-4 h-4" />
                    <span>{lang === 'tr' ? 'Blog\'a Dön' : 'Back to Blog'}</span>
                </Link>

                {/* Header */}
                <header className="space-y-8 mb-16">
                    <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-widest text-brand-primary">
                        <span>{post.category}</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-gray-400 flex items-center italic">
                            <Calendar className="w-3 h-3 mr-1" /> {post.date}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center space-x-3 pt-4 border-t border-white/5">
                        <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center">
                            <User className="w-5 h-5 text-brand-primary" />
                        </div>
                        <div>
                            <div className="text-xs font-black uppercase tracking-widest">{post.author}</div>
                            <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">WebFine Expert</div>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <article className="prose prose-invert prose-brand max-w-none 
          prose-headings:font-black prose-headings:tracking-tighter prose-headings:uppercase 
          prose-p:text-gray-400 prose-p:leading-relaxed prose-p:text-lg
          prose-strong:text-white prose-a:text-brand-primary
          prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-12 prose-h2:mb-6
          prose-li:text-gray-400
        ">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </article>

                {/* Footer / CTA */}
                <footer className="mt-32 p-12 rounded-[3rem] bg-white/5 border border-white/5 text-center space-y-8">
                    <h3 className="text-2xl font-black uppercase tracking-tighter">
                        {lang === 'tr' ? 'Benzer bir başarın var mı?' : 'Ready for similar success?'}
                    </h3>
                    <p className="text-gray-400 max-w-md mx-auto">
                        {lang === 'tr'
                            ? 'İşletmenizi dijital dünyada zirveye taşımak için biz buradayız.'
                            : 'We are here to take your business to the top of the digital world.'}
                    </p>
                    <Link
                        href={`/${lang}/iletisim`}
                        className="inline-block bg-white text-black px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:scale-105 transition-transform"
                    >
                        {lang === 'tr' ? 'Bize Ulaşın' : 'Contact Us'}
                    </Link>
                </footer>
            </div>
        </div>
    );
}
