import { PageModel } from '@watheia/model';

export function generatePagedPathsForPage(
  page: PageModel,
  items: string | any[],
  numOfItemsPerPage: number
) {
  const pageUrlPath = page.__metadata?.urlPath ?? '#';
  if (numOfItemsPerPage === 0) {
    return [pageUrlPath];
  }
  const numOfPages = Math.ceil(items.length / numOfItemsPerPage) || 1;
  const paths: string[] = [];
  for (let i = 0; i < numOfPages; i++) {
    paths.push(i === 0 ? pageUrlPath : `${pageUrlPath}/page/${i + 1}`);
  }
  return paths;
}
