export type LocaleValue =
  | string
  | number
  | Record<string, unknown>
  | null
  | undefined;

export function localizedString(
  value: LocaleValue,
  fallback = ''
): string {
  if (value == null) {
    return fallback;
  }

  if (typeof value === 'string') {
    return value.trim() || fallback;
  }

  if (typeof value === 'number') {
    return String(value);
  }

  if (typeof value === 'object') {
    const sallaLocale =
      typeof Salla !== 'undefined'
        ? Salla?.lang?.getLocale?.()
        : undefined;

    const htmlLocale =
      document.documentElement.lang?.split('-')[0];

    const locale =
      sallaLocale ||
      htmlLocale ||
      'ar';

    console.log('--------------------');
    console.log('Salla locale:', sallaLocale);
    console.log('html lang:', document.documentElement.lang);
    console.log('resolved locale:', locale);
    console.log('value:', value);

    const obj = value as Record<string, unknown>;

    const candidates = [
      locale,
      'ar',
      'en',
      ...Object.keys(obj),
    ];

    for (const key of candidates) {
      const v = obj[key];

      if (
        typeof v === 'string' &&
        v.trim()
      ) {
        console.log('selected:', key, '=>', v);
        return v.trim();
      }
    }
  }

  return fallback;
}