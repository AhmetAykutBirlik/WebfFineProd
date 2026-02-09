import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog';

const baseUrl = 'https://webfine.com.tr';
const locales = ['tr', 'en'];
const paths = [
    '',
    '/hakkimizda',
    '/hizmetler',
    '/hizmetler/web-tasarim',
    '/hizmetler/hosting',
    '/hizmetler/domain',
    '/projelerimiz',
    '/iletisim',
    '/blog',
];

export default function sitemap(): MetadataRoute.Sitemap {
    const sitemapEntries: MetadataRoute.Sitemap = [];

    for (const locale of locales) {
        // Static paths
        for (const path of paths) {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}${path}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: path === '' ? 1 : 0.8,
            });
        }

        // Dynamic Blog Posts
        const localePosts = blogPosts.filter(p => p.lang === locale);
        for (const post of localePosts) {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}/blog/${post.slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly' as const,
                priority: 0.6,
            });
        }
    }

    return sitemapEntries;
}
