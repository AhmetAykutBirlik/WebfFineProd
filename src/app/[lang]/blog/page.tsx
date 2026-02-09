import { getDictionary } from "@/lib/i18n";
import { blogPosts } from "@/data/blog";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

export default async function BlogPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);
    const posts = blogPosts.filter((post) => post.lang === lang);

    return (
        <div className="bg-luxury-black min-h-screen text-white/90 pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20 space-y-6">
                    <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-tight">
                        {lang === 'tr' ? 'Blog & Haberler' : 'Blog & News'}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        {lang === 'tr'
                            ? 'Dijital dünya, teknoloji ve tasarım hakkındaki en güncel makalelerimiz.'
                            : 'Our latest articles about the digital world, technology, and design.'}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/${lang}/blog/${post.slug}`}
                            className="group flex flex-col bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-brand-primary/30 transition-all card-glow"
                        >
                            <div className="aspect-video bg-gray-900 relative overflow-hidden">
                                {/* Fallback pattern if image is missing */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-purple-500/20" />
                                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold opacity-10 uppercase tracking-widest leading-none text-center px-4">
                                    {post.title}
                                </div>
                            </div>

                            <div className="p-8 space-y-4 flex-grow flex flex-col">
                                <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-widest text-brand-primary">
                                    <span>{post.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-white/20" />
                                    <span className="text-gray-500 flex items-center">
                                        <Calendar className="w-3 h-3 mr-1" /> {post.date}
                                    </span>
                                </div>

                                <h2 className="text-xl font-black leading-snug group-hover:text-brand-primary transition-colors">
                                    {post.title}
                                </h2>

                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="pt-6 mt-auto flex items-center justify-between">
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center">
                                        <User className="w-3 h-3 mr-1" /> {post.author}
                                    </span>
                                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary transition-all">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
