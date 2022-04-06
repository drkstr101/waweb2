export function isExternal(url: string) {
  return url && url.startsWith('http');
}
