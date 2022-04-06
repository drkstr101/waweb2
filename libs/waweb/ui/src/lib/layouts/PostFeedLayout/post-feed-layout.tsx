import { mapMaxWidthStyles } from '@watheia/base-ui';
import { PaginatedPostFeed, PostFeedLayoutModel } from '@watheia/model';
import { mapStylesToClassNames as mapStyles } from '@watheia/utils';
import clsx from 'clsx';
import { contentMapper, renderBlock } from '../../../factory';
import BaseLayout from '../BaseLayout';
import { BaseLayoutProps } from '../BaseLayout/BaseLayoutProps';
import PaginationControls from './pagination-controls';

// const posts = [
//   {
//     type: 'PostLayout',
//     title: 'Boost your conversion rate',
//     slug: '/blog/post/boost-your-conversion-rate',
//     category: { name: 'Article', slug: '/blog/category/article' },
//     excerpt:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
//     date: 'Mar 16, 2020',
//     featuredImage: {
//       type: 'ImageBlock',
//       media: {
//         type: 'Media',
//         src: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//         width: 1679,
//         height: 1079
//       }
//     },
//     readingTime: '6 min',
//     author: {
//       type: 'Person',
//       name: 'Roel Aufderehar',
//       slug: '/user/daniela-metz/roel-aufderehar',
//       avatar: {
//         type: 'Media',
//         src: 'https://www.datocms-assets.com/64528/1646636342-icon.png',
//         width: 512,
//         height: 512
//       }
//     }
//   },
//   {
//     type: 'PostLayout',
//     title: 'How to use search engine optimization to drive sales',
//     slug: '/blog/post/how-to-use-search-engine-optimization-to-drive-sales',
//     category: { name: 'Video', slug: '/blog/category/video' },
//     excerpt:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
//     date: 'Mar 10, 2020',
//     featuredImage: {
//       type: 'ImageBlock',
//       media: {
//         type: 'Media',
//         src: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//         width: 1679,
//         height: 1079
//       }
//     },
//     readingTime: '4 min',
//     author: {
//       type: 'Person',
//       name: 'Brenna Goyette',
//       slug: '/user/daniela-metz/brenna-goyette',
//       avatar: {
//         type: 'Media',
//         src: 'https://www.datocms-assets.com/64528/1646636342-icon.png',
//         width: 512,
//         height: 512
//       }
//     }
//   },
//   {
//     type: 'PostLayout',
//     title: 'Improve your customer experience',
//     slug: '/blog/post/improve-your-customer-experience',
//     category: { name: 'Case Study', slug: '/blog/category/case-study' },
//     excerpt:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
//     date: 'Feb 12, 2020',
//     featuredImage: {
//       type: 'ImageBlock',
//       media: {
//         type: 'Media',
//         src: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//         width: 1679,
//         height: 1079
//       }
//     },
//     readingTime: '11 min',
//     author: {
//       type: 'Person',
//       name: 'Daniela Metz',
//       slug: '/user/daniela-metz',
//       avatar: {
//         type: 'Media',
//         src: 'https://www.datocms-assets.com/64528/1646636342-icon.png',
//         width: 512,
//         height: 512
//       }
//     }
//   }
// ];

// export default function PostFeedLayout(props: BaseLayoutProps<PostFeedLayoutModel>) {
//   const { title } = props.page;
//   return (
//     <main className="relative px-4 pt-8 pb-20 sm:px-6 lg:pt-12 lg:pb-28 lg:px-8">
//       <div className="relative mx-auto max-w-7xl">
//         <div className="text-left">
//           <h2 className="text-4xl font-extrabold tracking-tight text-base-content-300 sm:text-6xl">
//             {title}
//           </h2>
//         </div>
//         <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
//           {posts.map((post) => (
//             <Article {...post} />
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

// type ArticleProps = typeof posts[0];

// const Article = (post: ArticleProps) => (
//   <article key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
//     <Link href={post.slug} className="block"></Link>
//     <div className="flex-shrink-0">
//       {post.featuredImage && (
//         <Image
//           className="w-full"
//           src={post.featuredImage.media.src}
//           width={post.featuredImage.media.width}
//           height={post.featuredImage.media.height}
//           alt=""
//         />
//       )}
//     </div>
//     <div className="flex flex-col justify-between flex-1 p-6 -mt-4 text-neutral-content bg-neutral">
//       <div className="flex-1">
//         <p className="text-sm font-medium text-accent">
//           <Link href={post.category.slug}>{post.category.name}</Link>
//         </p>
//         <Link href={post.slug} className="block mt-2">
//           <p className="text-xl font-semibold text-neutral-content">{post.title}</p>
//           <p className="mt-3 text-neutral-content">{post.excerpt}</p>
//         </Link>
//       </div>
//       <div className="flex items-center mt-6">
//         <div className="flex-shrink-0">
//           <Link href={post.author.slug}>
//             <span className="sr-only">{post.author.name}</span>
//             {post.author.avatar && (
//               <Image
//                 className="w-10 h-10 rounded-full"
//                 src={post.author.avatar.src}
//                 width={post.author.avatar.width}
//                 height={post.author.avatar.height}
//                 layout="intrinsic"
//               />
//             )}
//           </Link>
//         </div>
//         <div className="ml-3">
//           <p className="text-sm font-medium text-base-content-700">
//             <Link href={post.author.slug}>{post.author.name}</Link>
//           </p>
//           <div className="flex space-x-1 text-sm text-base-content-300">
//             <time dateTime={post.date}>{post.date}</time>
//             <span aria-hidden="true">&middot;</span>
//             <span>{post.readingTime} read</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </article>
// );

export default function PostFeedLayout(props: BaseLayoutProps<PaginatedPostFeed>) {
  const { page, site } = props;
  const {
    title,
    topSections = [],
    bottomSections = [],
    pageIndex,
    baseUrlPath,
    numOfPages,
    items: posts,
    postFeed
  } = page;
  const postFeedWidth = postFeed?.styles?.['self']?.['width'] || 'wide';
  const postFeedJustifyContent = postFeed?.styles?.['self']?.['justifyContent'] || 'center';
  const pageLinks = PaginationControls({ pageIndex, baseUrlPath, numOfPages });

  return (
    <BaseLayout page={page} site={site}>
      {title && (
        <div
          className={clsx(
            'flex py-12 lg:py-14 px-4',
            mapStyles({ justifyContent: postFeedJustifyContent })
          )}
        >
          <h1 className={clsx('w-full', mapMaxWidthStyles(postFeedWidth))}>{title}</h1>
        </div>
      )}
      {topSections.map(contentMapper())}
      {postFeed && renderBlock(postFeed, { posts, pageLinks })}
      {bottomSections.map(contentMapper())}
    </BaseLayout>
  );
}
