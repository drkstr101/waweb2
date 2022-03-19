import { Image, Link } from '@watheia/base-ui';
import { PostFeedLayoutModel } from '@watheia/model';
import { BaseLayoutProps } from '../BaseLayout/BaseLayoutProps';

const posts = [
  {
    type: 'PostLayout',
    title: 'Boost your conversion rate',
    slug: '/blog/post/boost-your-conversion-rate',
    category: { name: 'Article', slug: '/blog/category/article' },
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    featuredImage: {
      type: 'ImageBlock',
      media: {
        type: 'Media',
        src: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        width: 1679,
        height: 1079
      }
    },
    readingTime: '6 min',
    author: {
      type: 'Person',
      name: 'Roel Aufderehar',
      slug: '/user/daniela-metz/roel-aufderehar',
      avatar: {
        type: 'Media',
        src: 'https://www.datocms-assets.com/64528/1646636342-icon.png',
        width: 512,
        height: 512
      }
    }
  },
  {
    type: 'PostLayout',
    title: 'How to use search engine optimization to drive sales',
    slug: '/blog/post/how-to-use-search-engine-optimization-to-drive-sales',
    category: { name: 'Video', slug: '/blog/category/video' },
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    featuredImage: {
      type: 'ImageBlock',
      media: {
        type: 'Media',
        src: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        width: 1679,
        height: 1079
      }
    },
    readingTime: '4 min',
    author: {
      type: 'Person',
      name: 'Brenna Goyette',
      slug: '/user/daniela-metz/brenna-goyette',
      avatar: {
        type: 'Media',
        src: 'https://www.datocms-assets.com/64528/1646636342-icon.png',
        width: 512,
        height: 512
      }
    }
  },
  {
    type: 'PostLayout',
    title: 'Improve your customer experience',
    slug: '/blog/post/improve-your-customer-experience',
    category: { name: 'Case Study', slug: '/blog/category/case-study' },
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    featuredImage: {
      type: 'ImageBlock',
      media: {
        type: 'Media',
        src: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        width: 1679,
        height: 1079
      }
    },
    readingTime: '11 min',
    author: {
      type: 'Person',
      name: 'Daniela Metz',
      slug: '/user/daniela-metz',
      avatar: {
        type: 'Media',
        src: 'https://www.datocms-assets.com/64528/1646636342-icon.png',
        width: 512,
        height: 512
      }
    }
  }
];

export default function PostFeedLayout(props: BaseLayoutProps<PostFeedLayoutModel>) {
  const { title, subtitle } = props.page;
  return (
    <main className="relative pt-8 pb-20 px-4 sm:px-6 lg:pt-12 lg:pb-28 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-left">
          <h2 className="text-4xl tracking-tight font-extrabold text-base-content-300 sm:text-6xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 max-w-2xl mx-auto text-xl text-base-content sm:mt-4">
              {subtitle}
            </p>
          )}
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <Article {...post} />
          ))}
        </div>
      </div>
    </main>
  );
}

type ArticleProps = typeof posts[0];

const Article = (post: ArticleProps) => (
  <article key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <Link href={post.slug} className="block"></Link>
    <div className="flex-shrink-0">
      {post.featuredImage && (
        <Image
          className="w-full"
          src={post.featuredImage.media.src}
          width={post.featuredImage.media.width}
          height={post.featuredImage.media.height}
          alt=""
        />
      )}
    </div>
    <div className="flex-1 -mt-4 text-neutral-content bg-neutral p-6 flex flex-col justify-between">
      <div className="flex-1">
        <p className="text-sm font-medium text-accent">
          <Link href={post.category.slug}>{post.category.name}</Link>
        </p>
        <Link href={post.slug} className="block mt-2">
          <p className="text-xl font-semibold text-neutral-content">{post.title}</p>
          <p className="mt-3 text-neutral-content">{post.excerpt}</p>
        </Link>
      </div>
      <div className="mt-6 flex items-center">
        <div className="flex-shrink-0">
          <Link href={post.author.slug}>
            <span className="sr-only">{post.author.name}</span>
            {post.author.avatar && (
              <Image
                className="h-10 w-10 rounded-full"
                src={post.author.avatar.src}
                width={post.author.avatar.width}
                height={post.author.avatar.height}
                layout="intrinsic"
              />
            )}
          </Link>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-base-content-700">
            <Link href={post.author.slug}>{post.author.name}</Link>
          </p>
          <div className="flex space-x-1 text-sm text-base-content-300">
            <time dateTime={post.date}>{post.date}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{post.readingTime} read</span>
          </div>
        </div>
      </div>
    </div>
  </article>
);

// export default function PostFeedLayout(props: BaseLayoutProps<PostFeedLayoutModel>) {
//   const { page, site } = props;
//   const {
//     title,
//     topSections = [],
//     bottomSections = [],
//     pageIndex,
//     baseUrlPath,
//     numOfPages,
//     items,
//     postFeed
//   } = page;
//   const postFeedColors = postFeed?.colors || 'colors-a';
//   const postFeedWidth = postFeed?.styles?.['self']?.['width'] || 'wide';
//   const postFeedJustifyContent = postFeed?.styles?.['self']?.['justifyContent'] || 'center';
//   const pageLinks = PageLinks({ pageIndex, baseUrlPath, numOfPages });

//   return (
//     <BaseLayout page={page} site={site}>
//       <main id="main" className="layout page-layout">
//         {title && (
//           <div
//             className={classNames(
//               'flex',
//               'py-12',
//               'lg:py-14',
//               'px-4',
//               postFeedColors,
//               mapStyles({ justifyContent: postFeedJustifyContent })
//             )}
//           >
//             <h1
//               className={classNames('w-full', mapMaxWidthStyles(postFeedWidth))}
//               data-sb-field-path="title"
//             >
//               {title}
//             </h1>
//           </div>
//         )}
//         {renderSections(topSections, 'topSections')}
//         {postFeed &&
//           renderBlock(postFeed, {
//             posts: items,
//             pageLinks: pageLinks,
//             'data-sb-field-path': 'postFeed'
//           })}
//         {renderSections(bottomSections, 'bottomSections')}
//       </main>
//     </BaseLayout>
//   );
// }

// function renderSections(sections: any[], fieldName: string) {
//   if (sections.length === 0) {
//     return null;
//   }
//   return (
//     <div data-sb-field-path={fieldName}>
//       {sections.map((section, index) => {
//         const props = { 'data-sb-field-path': `${fieldName}.${index}` };
//         return renderBlock(section, props);
//       })}
//     </div>
//   );
// }

// function PageLinks({ pageIndex, baseUrlPath, numOfPages }: any) {
//   if (numOfPages < 2) {
//     return null;
//   }
//   const pageLinks = [];
//   const padRange = 2;
//   const startIndex = pageIndex - padRange > 2 ? pageIndex - padRange : 0;
//   const endIndex =
//     pageIndex + padRange < numOfPages - 3 ? pageIndex + padRange : numOfPages - 1;

//   // following logic renders pagination controls:
//   // for example, if the current page is 6 (pageIndex === 5)
//   //              ↓
//   // ← 1 ... 4 5 6 7 8 ... 20 →
//   //         ↑       ↑
//   // and padRange === 2, then it renders from 4 (6 - 2) to 8 (6 + 2)

//   // renders prev "←" button, if the current page is the first page, the button is disabled
//   if (pageIndex > 0) {
//     pageLinks.push(
//       <PageLink
//         key="prev"
//         pageIndex={pageIndex - 1}
//         buttonLabel="←"
//         baseUrlPath={baseUrlPath}
//       />
//     );
//   } else {
//     pageLinks.push(<PageLinkDisabled key="prev" buttonLabel="←" />);
//   }

//   // if startIndex is not 0, then render the first page followed by ellipsis, if needed.
//   if (startIndex > 0) {
//     pageLinks.push(
//       <PageLink key="0" pageIndex={0} buttonLabel="1" baseUrlPath={baseUrlPath} />
//     );
//     if (startIndex > 1) {
//       pageLinks.push(<Ellipsis key="beforeEllipsis" />);
//     }
//   }

//   // render all pages between startIndex and endIndex, the current page should be disabled
//   for (let i = startIndex; i <= endIndex; i++) {
//     if (pageIndex === i) {
//       pageLinks.push(<PageLinkDisabled key={i} buttonLabel={i + 1} />);
//     } else {
//       pageLinks.push(
//         <PageLink key={i} pageIndex={i} buttonLabel={i + 1} baseUrlPath={baseUrlPath} />
//       );
//     }
//   }

//   // if endIndex is not the last page, then render the last page preceded by ellipsis, if needed.
//   if (endIndex < numOfPages - 1) {
//     if (endIndex < numOfPages - 2) {
//       pageLinks.push(<Ellipsis key="afterEllipsis" />);
//     }
//     pageLinks.push(
//       <PageLink
//         key={numOfPages - 1}
//         pageIndex={numOfPages - 1}
//         buttonLabel={numOfPages}
//         baseUrlPath={baseUrlPath}
//       />
//     );
//   }

//   // renders next "→" button, if the current page is the last page, the button is disabled
//   if (pageIndex < numOfPages - 1) {
//     pageLinks.push(
//       <PageLink
//         key="next"
//         pageIndex={pageIndex + 1}
//         buttonLabel="→"
//         baseUrlPath={baseUrlPath}
//       />
//     );
//   } else {
//     pageLinks.push(<PageLinkDisabled key="next" buttonLabel="→" />);
//   }

//   return (
//     <div className={classNames('flex flex-row items-center justify-center mt-12 sm:mt-20')}>
//       {pageLinks}
//     </div>
//   );
// }

// function PageLink({ pageIndex, buttonLabel, baseUrlPath }: any) {
//   return (
//     <Link
//       href={urlPathForPageAtIndex(pageIndex, baseUrlPath)}
//       className="sb-component-button sb-component-button-secondary px-4 py-2 mx-2"
//     >
//       {buttonLabel}
//     </Link>
//   );
// }

// function PageLinkDisabled({ buttonLabel }: any) {
//   return (
//     <span
//       key="next"
//       className="sb-component-button sb-component-button-secondary opacity-25 px-4 py-2 mx-2"
//     >
//       {buttonLabel}
//     </span>
//   );
// }

// function Ellipsis() {
//   return <span className="px-4 py-2 mx-2">…</span>;
// }

// function urlPathForPageAtIndex(pageIndex: number, baseUrlPath: any) {
//   return pageIndex === 0 ? baseUrlPath : `${baseUrlPath}/page/${pageIndex + 1}`;
// }
