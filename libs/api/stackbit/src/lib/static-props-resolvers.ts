import {
  ConfigModel,
  FeaturedPostsSectionModel,
  PageModel,
  PaginatedPersonModel,
  PostFeedCategoryLayoutModel,
  PostFeedLayoutModel,
  PostLayoutModel,
  RecentPostsSection
} from '@watheia/model';
import { DebugContext } from '../types/DebugContext';
import { ModelData } from '../types/ModelData';
import { getAllAuthorPostsSorted } from './get-all-author-posts-sorted';
import { getAllCategoryPostsSorted } from './get-all-category-posts-sorted';
import { getAllPostsSorted } from './get-all-posts-sorted';
import { getPagedItemsForPage } from './get-paged-items-for-page';
import { getRootPagePath } from './get-root-page-path';
import { mapDeepAsync } from './map-deep-async';
import { resolveReferences } from './resolve-references';

const __DEBUG__ = false;

const mapperOptions = { postOrder: true };

const staticPropsResolvers = {
  PostLayout: (props: PostLayoutModel, data: ModelData, debugContext?: DebugContext) => {
    return resolveReferences(props, ['author', 'category'], data.objects, debugContext);
  },
  PostFeedLayout: (
    props: PostFeedLayoutModel,
    data: ModelData,
    debugContext?: DebugContext
  ) => {
    const numOfPostsPerPage = props.numOfPostsPerPage ?? 10;
    const allPosts = getAllPostsSorted(data.objects);
    const paginationData = getPagedItemsForPage(props, allPosts, numOfPostsPerPage);
    const items = resolveReferences(
      paginationData.items,
      ['author', 'category'],
      data.objects,
      debugContext
    );
    return {
      ...props,
      ...paginationData,
      items
    };
  },
  PostFeedCategoryLayout: (props: PostFeedCategoryLayoutModel, data: ModelData) => {
    const categoryId = props.__metadata?.id;
    const numOfPostsPerPage = props.numOfPostsPerPage ?? 10;
    const allCategoryPosts = getAllCategoryPostsSorted(data.objects, categoryId);
    const paginationData = getPagedItemsForPage(props, allCategoryPosts, numOfPostsPerPage);
    const items = resolveReferences(paginationData.items, ['author', 'category'], data.objects);
    return {
      ...props,
      ...paginationData,
      items
    };
  },
  Person: (props: PaginatedPersonModel, data: ModelData) => {
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
  },
  RecentPostsSection: (
    props: RecentPostsSection,
    data: ModelData,
    debugContext?: DebugContext
  ) => {
    const allPosts = getAllPostsSorted(data.objects).slice(0, props.recentCount || 6);
    const recentPosts = resolveReferences(
      allPosts,
      ['author', 'category'],
      data.objects,
      debugContext
    );
    return {
      ...props,
      posts: recentPosts
    };
  },
  FeaturedPostsSection: (
    props: FeaturedPostsSectionModel,
    data: ModelData,
    debugContext?: DebugContext
  ) => {
    return resolveReferences(
      props,
      ['posts.author', 'posts.category'],
      data.objects,
      debugContext
    );
  }
  // FeaturedPeopleSection: (props: FeaturedPeopleSectionModel, data: ModelData, debugContext?: DebugContext) => {
  //   return resolveReferences(props, ['people'], data.objects, debugContext);
  // }
  // FormBlock: async (props) => {
  //   if (!props.destination) {
  //     return props;
  //   }
  //   if (!process.env.STACKBIT_CONTACT_FORM_SECRET) {
  //     console.error(
  //       `No STACKBIT_CONTACT_FORM_SECRET provided. It will not work properly for production build.`
  //     );
  //     return props;
  //   }
  //   const secretKey = crypto
  //     .createHash('sha256')
  //     .update(process.env.STACKBIT_CONTACT_FORM_SECRET)
  //     .digest();
  //   const destination = await new SignJWT({ email: props.destination })
  //     .setProtectedHeader({ alg: 'HS256' })
  //     .sign(secretKey);
  //   return {
  //     ...props,
  //     destination
  //   };
  // }
};

function objectMapper(data: ModelData) {
  return async (value: { type: any; layout: any }, keyPath: any, stack: any) => {
    const objectType = value?.type || value?.layout;
    if (objectType && staticPropsResolvers[objectType]) {
      const resolver = staticPropsResolvers[objectType];
      return resolver(value, data, { keyPath, stack });
    }
    return value;
  };
}

export async function resolveStaticProps(
  urlPath: string,
  data: ModelData
): Promise<{ site: ConfigModel; page: PageModel }> {
  __DEBUG__ && console.info(`Resolving props for (${urlPath})...`);
  // get root path of paged path: /blog/page/2 => /blog
  const rootUrlPath = getRootPagePath(urlPath);
  const page = data.pages.find((page) => page.__metadata.urlPath === rootUrlPath);
  if (!page) throw new Error(`Page could not be located for rootUrlPath=${rootUrlPath}`);
  const { __metadata, ...rest } = page;
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
  const result = await mapDeepAsync(props, objectMapper(data), mapperOptions);
  __DEBUG__ && console.info(result);

  return result;
}
