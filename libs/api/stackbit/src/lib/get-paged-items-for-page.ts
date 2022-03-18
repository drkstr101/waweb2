import { PageModel, PostLayoutModel } from '@watheia/model';
import { getRootPagePath } from './get-root-page-path';

export function getPagedItemsForPage(
  page: PageModel,
  items: PostLayoutModel[],
  numOfItemsPerPage: number
) {
  const pageUrlPath = page.__metadata?.urlPath ?? '#';
  const baseUrlPath = getRootPagePath(pageUrlPath);
  if (numOfItemsPerPage === 0) {
    return {
      pageIndex: 0,
      baseUrlPath,
      numOfPages: 1,
      numOfTotalItems: items.length,
      items: items
    };
  }
  const pageIndexMatch = pageUrlPath.match(/\/page\/(\d+)$/);
  const pageIndex = pageIndexMatch ? parseInt(pageIndexMatch[1]) - 1 : 0;
  const numOfPages = Math.ceil(items.length / numOfItemsPerPage) || 1;
  const startIndex = pageIndex * numOfItemsPerPage;
  const endIndex = startIndex + numOfItemsPerPage;
  return {
    pageIndex,
    baseUrlPath,
    numOfPages: numOfPages,
    numOfTotalItems: items.length,
    items: items.slice(startIndex, endIndex)
  };
}
