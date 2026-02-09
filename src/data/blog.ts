export interface BlogPost {
    slug: string;
    lang: 'tr' | 'en';
    title: string;
    excerpt: string;
    date: string;
    author: string;
    image: string;
    category: string;
    content: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: '2026-web-tasarim-trendleri',
        lang: 'tr',
        title: '2026 Web Tasarım Trendleri: Geleceğin Dijital Estetiği',
        excerpt: 'Yeni nesil web tasarımında minimalizm, yapay zeka entegrasyonu ve ultra-hızlı deneyimlerin rolünü keşfedin.',
        date: '9 Şubat 2026',
        author: 'WebFine Team',
        image: '/img/blog/trends-2026.jpg',
        category: 'Tasarım',
        content: `
# 2026 Web Tasarım Trendleri: Geleceğin Dijital Estetiği

Dijital dünya her geçen gün daha karmaşık ama bir o kadar da sadeleşen bir yapıya bürünüyor. 2026 yılında web tasarım dünyasını domine edecek ana unsurları birlikte inceleyelim.

## 1. Minimalizm ve Ultra-Hız
Kullanıcılar artık saniyeler değil, milisaniyeler bekliyor. Ultra-hızlı yüklenen, gereksiz animasyonlardan arındırılmış ama estetikten ödün vermeyen tasarımlar ön planda.

## 2. AI Destekli Kişiselleştirme
Yapay zeka sadece metin yazmak için değil, kullanıcının ruh haline ve browsing geçmişine göre renk paleti değiştiren dinamik arayüzler için kullanılıyor.

## 3. Glassmorphism ve Derinlik
Cam dokulu arayüzler ve katmanlı tasarım anlayışı, derinlik algısını artırarak premium bir his sunmaya devam ediyor.

### SEO İçin Neden Önemli?
Modern bir web tasarımı sadece göze hitap etmez, aynı zamanda Google'ın Core Web Vitals metriklerini de en üst düzeye çıkarır. WebFine olarak her zaman teknik ve estetik mükemmelliği birleştiriyoruz.
    `
    },
    {
        slug: 'seo-ile-ust-siraya-cikma-rehberi',
        lang: 'tr',
        title: 'Google\'da Üst Sıraya Çıkma Rehberi: 2026 SEO Temelleri',
        excerpt: 'Markanızı Google aramalarında nasıl zirveye taşıyabileceğinizi, güncel SEO stratejileriyle öğrenin.',
        date: '8 Şubat 2026',
        author: 'WebFine SEO Specialist',
        image: '/img/blog/seo-guide.jpg',
        category: 'SEO',
        content: `
# Google'da Üst Sıraya Çıkma Rehberi: 2026 SEO Temelleri

SEO artık sadece anahtar kelimelerden ibaret değil. İşte markanızı zirveye taşıyacak stratejiler:

## Teknik SEO'nun Gücü
Site hızı, site haritası doğruluğu ve robots.txt yapılandırması temel taşlardır. Biz WebFine olarak teknik altyapınızı Google'ın en sevdiği şekilde kuruyoruz.

## İçerik Otoritesi
Sadece yazı yazmak yetmez; konunuzun uzmanı olduğunuzu Google'a kanıtlamanız gerekir. E-E-A-T (Deneyim, Uzmanlık, Otorite, Güvenilirlik) kuralları her zamankinden daha değerli.

## Yerel SEO (Local SEO)
Türkiye pazarında başarılı olmak için Google Business Profile optimizasyonu ve yerel içerik üretimi kritik öneme sahip.
    `
    },
    {
        slug: '2026-web-design-trends',
        lang: 'en',
        title: '2026 Web Design Trends: The Future of Digital Aesthetics',
        excerpt: 'Discover the role of minimalism, AI integration, and ultra-fast experiences in next-gen web design.',
        date: 'February 9, 2026',
        author: 'WebFine Team',
        image: '/img/blog/trends-2026.jpg',
        category: 'Design',
        content: `
# 2026 Web Design Trends: The Future of Digital Aesthetics

The digital world is becoming increasingly complex yet simpler in structure every day. Let's examine the main elements that will dominate the web design world in 2026.

## 1. Minimalism and Ultra-Speed
Users no longer wait for seconds, but for milliseconds. Designs that load ultra-fast, are stripped of unnecessary animations, yet do not compromise on aesthetics are at the forefront.

## 2. AI-Powered Personalization
AI is not just for writing text, but for dynamic interfaces that change color palettes based on the user's mood and browsing history.
    `
    }
];
