import { PageModel } from '@watheia/model';
import { getAllAuthorPostsSorted } from './get-all-author-posts-sorted';
import { getPagedItemsForPage } from './get-paged-items-for-page';
import { getRootPagePath } from './get-root-page-path';
import { mapDeepAsync } from './map-deep-async';
import { resolveReferences } from './resolve-references';

export function resolveStaticProps(
  urlPath: string,
  data: { pages: PageModel[]; props: Record<string, any> }
) {
  // get root path of paged path: /blog/page/2 => /blog
  const rootUrlPath = getRootPagePath(urlPath);
  const foundPage = data.pages.find((page) => page.__metadata.urlPath === rootUrlPath);
  if (!foundPage) throw new Error(`Page not found for urlPath=${urlPath}`);
  const { __metadata, ...rest } = foundPage;
  const props = {
    page: {
      __metadata: {
        ...__metadata,
        // override urlPath in metadata with paged path: /blog => /blog/page/2
        urlPath
      },
      ...rest
    },
    ...data.props
  };
  return mapDeepAsync(
    props,
    async (value, keyPath, stack) => {
      const objectType = value?.type || value?.layout;
      if (objectType && StaticPropsResolvers[objectType]) {
        const resolver = StaticPropsResolvers[objectType];
        return resolver(value, data, { keyPath, stack });
      }
      return value;
    },
    { postOrder: true }
  );
}

const StaticPropsResolvers = {
  ArticleLayout: (props, data, debugContext) => {
    return resolveReferences(props, ['author'], data.objects, debugContext);
  },
  Person: (props, data) => {
    const authorId = props.__metadata?.id;
    const allAuthorPosts = getAllAuthorPostsSorted(data.objects, authorId);
    const paginationData = getPagedItemsForPage(props, allAuthorPosts, 10);
    const items = resolveReferences(paginationData.items, ['author', 'category'], data.objects);
    return {
      ...props,
      ...paginationData,
      items,
      layout: 'PostFeedLayout',
      postFeed: {
        showAuthor: true,
        showDate: true,
        variant: 'variant-d'
      }
    };
  }
};
