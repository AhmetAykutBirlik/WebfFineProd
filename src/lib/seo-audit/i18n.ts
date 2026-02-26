export const locales: any = {
    tr: {
        turnstile_failed: "Doğrulama başarısız. Lütfen tekrar deneyin.",
        rate_limited: "Çok fazla istek gönderildi. Lütfen daha sonra tekrar deneyin.",
        invalid_url: "Geçersiz URL. http/https ile başlayan bir adres girin.",
        blocked_ssrf: "Bu URL güvenlik nedeniyle engellendi.",
        audit_started: "Denetim başlatıldı.",
        audit_done: "Denetim tamamlandı.",
        server_error: "Sunucu hatası oluştu.",
        method_not_allowed: "Yöntem izin verilmiyor.",
        lead_saved: "Bilgileriniz kaydedildi. Detaylı rapor hazır.",
        health_critical: "Kritik",
        health_needs_optimization: "İyileştirme Gerekli",
        health_high_potential: "Yüksek Potansiyel"
    },
    en: {
        turnstile_failed: "Verification failed. Please try again.",
        rate_limited: "Too many requests. Please try again later.",
        invalid_url: "Invalid URL. Provide an http/https URL.",
        blocked_ssrf: "This URL was blocked for security reasons.",
        audit_started: "Audit started.",
        audit_done: "Audit completed.",
        server_error: "Internal server error.",
        method_not_allowed: "Method not allowed.",
        lead_saved: "Your lead info saved. Full report is ready.",
        health_critical: "Critical",
        health_needs_optimization: "Needs Optimization",
        health_high_potential: "High Potential"
    },
};

export type Locale = 'tr' | 'en';

export function getMessage(lang: string, key: string): any {
    const locale = (lang === 'tr' || lang === 'en') ? lang : 'en';
    return (locales as any)[locale][key] || (locales as any)['en'][key];
}
