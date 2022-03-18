export function getRootPagePath(pagePath: string): string {
  const pagedPathMatch = pagePath.match(/\/page\/\d+$/);
  if (!pagedPathMatch) {
    return pagePath;
  }
  return pagePath.substring(0, pagedPathMatch.index);
}
