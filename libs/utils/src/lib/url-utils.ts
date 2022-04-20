const gatekeeperUrl =
  process.env['VERCEL_URL'] ??
  process.env['URL'] ??
  process.env['GATEKEEPER_URL'] ??
  'http://localhost:4200';

export const GATEKEEPER_URL = new URL(gatekeeperUrl);

export function url(path = '') {
  return new URL(path, GATEKEEPER_URL);
}

export function isExternal(url: string) {
  return url && url.startsWith('http');
}
