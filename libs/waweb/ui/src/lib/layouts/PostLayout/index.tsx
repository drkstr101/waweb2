/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { CameraIcon } from '@heroicons/react/solid';
import { Image } from '@watheia/base-ui';
import { ImageBlockModel, PostLayoutModel } from '@watheia/model';
import { BaseLayoutProps } from '../BaseLayout';

export default function PostLayout(props: BaseLayoutProps<PostLayoutModel>) {
  const { page } = props;
  return (
    <main className="overflow-hidden">
      <article className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-accent font-semibold tracking-wide uppercase">
              {page.title}
            </h2>
            {page.subtitle && (
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {page.subtitle}
              </h3>
            )}
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <DotsPattern />
            {page.featuredImage && <FeaturedImage {...page.featuredImage} />}
          </div>
          <div className="mt-8 lg:mt-0">
            {page.excerpt && (
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-500">{page.excerpt}</p>
              </div>
            )}
            <div className="mt-5 prose prose-accent text-base-content mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum.
                Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec
                laoreet quam urna.
              </p>
              <p>
                Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem
                pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et sit. Faucibus sed non
                gravida lectus dignissim imperdiet a.
              </p>
              <p>
                Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus,
                egestas netus cursus. In.
              </p>
              <ul>
                <li>Quis elit egestas venenatis mattis dignissim.</li>
                <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
                <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
              </ul>
              <p>
                Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel
                ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis
                vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec,
                a. Morbi enim fermentum lacus in. Viverra.
              </p>
              <h3>How we helped</h3>
              <p>
                Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium
                in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis
                amet. Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum posuere
                donec ultricies non morbi. Mi a platea auctor mi.
              </p>
              <p>
                Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed
                consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu
                morbi.
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

const FeaturedImage = (_: ImageBlockModel) => {
  return (
    <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
      <figure>
        <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
          <Image
            className="rounded-lg shadow-lg object-cover object-center"
            src="https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=.735&amp;fp-y=.55&amp;w=1184&amp;h=1376&amp;q=80"
            alt="Whitney leaning against a railing on a downtown street"
            width={1184}
            height={1376}
          />
        </div>
        <figcaption className="mt-3 flex text-sm text-gray-500">
          <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
          <span className="ml-2">Photograph by Marcus O’Leary</span>
        </figcaption>
      </figure>
    </div>
  );
};

const DotsPattern = () => (
  <svg
    className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
    width={404}
    height={384}
    fill="none"
    viewBox="0 0 404 384"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="de316486-4a29-4312-bdfc-fbce2132a2c1"
        x={0}
        y={0}
        width={20}
        height={20}
        patternUnits="userSpaceOnUse"
      >
        <rect x={0} y={0} width={4} height={4} className="text-secondary" fill="currentColor" />
      </pattern>
    </defs>
    <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
  </svg>
);

// import { getPageUrlPath } from '@watheia/api.stackbit';
// import { Link } from '@watheia/base-ui';
// import { CategoryModel, PersonModel, PostLayoutModel } from '@watheia/model';
// import dayjs from 'dayjs';
// import Markdown from 'markdown-to-jsx';
// import { contentMapper } from '../../../factory';
// import { BaseLayoutProps } from '../BaseLayout/BaseLayoutProps';

// export default function PostLayout(props: BaseLayoutProps<PostLayoutModel>) {
//   const { page, site } = props;
//   const sections = page.bottomSections || [];
//   const dateTimeAttr = dayjs(page.date).format('YYYY-MM-DD HH:mm:ss');
//   const formattedDate = dayjs(page.date).format('MMMM D, YYYY');

//   return (
//     <main id="main" className="sb-layout sb-post-layout">
//       <article className="colors-a px-4 sm:px-8 py-14 lg:py-20">
//         <div className="max-w-screen-2xl mx-auto">
//           <header className="max-w-screen-md mx-auto mb-12 text-center">
//             <div className="text-lg mb-4">
//               <time dateTime={dateTimeAttr} data-sb-field-path="date">
//                 {formattedDate}
//               </time>
//             </div>
//             {page.title && <h1 data-sb-field-path="title">{page.title}</h1>}
//             <PostAttribution post={page} />
//           </header>
//           {page.markdown_content && (
//             <Markdown
//               options={{ forceBlock: true }}
//               className="sb-markdown max-w-screen-md mx-auto"
//               data-sb-field-path="markdown_content"
//             >
//               {page.markdown_content}
//             </Markdown>
//           )}
//         </div>
//       </article>
//       {sections.length > 0 && (
//         <div data-sb-field-path="bottomSections">{sections.map(contentMapper())}</div>
//       )}
//     </main>
//   );
// }

// function PostAttribution({ post }: { post: PostLayoutModel }) {
//   if (!post.author && !post.category) {
//     return null;
//   }
//   const author = post.author ? postAuthor(post.author) : null;
//   const category = post.category ? postCategory(post.category) : null;
//   return (
//     <div className="mt-6 text-lg">
//       {author && (
//         <>
//           {'By '}
//           {author}
//         </>
//       )}
//       {category && (
//         <>
//           {author ? ' in ' : 'In '}
//           {category}
//         </>
//       )}
//     </div>
//   );
// }

// function postAuthor(author: PersonModel) {
//   const children = (
//     <>
//       {author.firstName && <span data-sb-field-path=".firstName">{author.firstName}</span>}{' '}
//       {author.lastName && <span data-sb-field-path=".lastName">{author.lastName}</span>}
//     </>
//   );
//   return author.slug ? (
//     <Link data-sb-field-path="author" href={`/blog/author/${author.slug}`}>
//       {children}
//     </Link>
//   ) : (
//     <span data-sb-field-path="author">{children}</span>
//   );
// }

// function postCategory(category: CategoryModel) {
//   return (
//     <Link data-sb-field-path="category" href={getPageUrlPath(category)}>
//       {category.name}
//     </Link>
//   );
// }
