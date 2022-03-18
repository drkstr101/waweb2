const homeUrl =
  process.env['WA_HOME_URL'] ??
  process.env['WA_HOME_URL'] ??
  process.env['VERCEL_URL'] ??
  process.env['URL'] ??
  'http://localhost:4200';

// const expoUrl = process.env['WA_EXPO_URL'] ?? 'http://localhost:4210';
// const contactUrl = process.env['WA_CONTACT_URL'] ?? 'http://localhost:4220';

export const HOME_URL = new URL(homeUrl);
// export const EXPO_URL = new URL(expoUrl);
// export const CONTACT_URL = new URL(contactUrl);

export function url(path = '') {
  return new URL(path, HOME_URL);
}

export function isExternal(url: string) {
  return url && url.startsWith('http');
}
