import 'server-only';

const dictionaries: any = {
    tr: () => import('../locales/tr.json').then((module) => module.default),
    en: () => import('../locales/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
    if (dictionaries[locale]) {
        return dictionaries[locale]();
    }
    return dictionaries.tr();
};

export function t(dictionary: any, key: string) {
    const keys = key.split('.');
    let value = dictionary;
    for (const k of keys) {
        if (value && value[k] !== undefined) {
            value = value[k];
        } else {
            return key;
        }
    }
    return value || key;
}
