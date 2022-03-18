import dynamic from 'next/dynamic';

/**
 * Map of dynamically imported components.
 *
 * The mapping key of a dynamically imported component is the model name describing the props of that component.
 * And the value is the component imported via Next.js dynamic import. You should use dynamic components for large
 * components or components with heavy external dependencies that are used sparingly in your website's pages.
 * To learn more about Nextjs dynamic imports visit:
 * https://nextjs.org/docs/advanced-features/dynamic-import
 *
 * Dynamic components can be selected at run-time based on the type of their content (props). This is because
 * components are mapped by models that describe their content, and content's type always matches the model name.
 * For example, a page component can call `getComponent(section.type)` function, passing it the type of section
 * data it needs to render, and get back the component that can render that type of data:
 *
 *     const Section = getComponent(section.type);
 *     return <Section {...section} />;
 */
export const layouts = {
  PageLayout: dynamic(() => import('./layouts/PageLayout')),
  PostLayout: dynamic(() => import('./layouts/PostLayout')),
  PostFeedLayout: dynamic(() => import('./layouts/PostFeedLayout'))
  // PostFeedCategoryLayout: dynamic(() => import('./layouts/PostFeedCategoryLayout'))
};

/**
 * Map of dynamically imported blocks.
 *
 * The mapping key of a dynamically imported component is the model name describing the props of that component.
 * And the value is the component imported via Next.js dynamic import. You should use dynamic blocks for large
 * blocks or blocks with heavy external dependencies that are used sparingly in your website's pages.
 * To learn more about Nextjs dynamic imports visit:
 * https://nextjs.org/docs/advanced-features/dynamic-import
 *
 * Dynamic blocks can be selected at run-time based on the type of their content (props). This is because
 * blocks are mapped by models that describe their content, and content's type always matches the model name.
 * For example, a page component can call `getComponent(section.type)` function, passing it the type of section
 * data it needs to render, and get back the component that can render that type of data:
 *
 *     const Section = getComponent(section.type);
 *     return <Section {...section} />;
 */
export const blocks = {
  // CheckboxFormControl: dynamic(() => import('./molecules/FormBlock/CheckboxFormControl')),
  // ContactSection: dynamic(() => import('./sections/ContactSection')),
  // CtaSection: dynamic(() => import('./sections/CtaSection')),
  // EmailFormControl: dynamic(() => import('./molecules/FormBlock/EmailFormControl')),
  // FeaturedItem: dynamic(() => import('./sections/FeaturedItemsSection/FeaturedItem')),
  // FeaturedItemsSection: dynamic(() => import('./sections/FeaturedItemsSection')),
  // FeaturedPeopleSection: dynamic(() => import('./sections/FeaturedPeopleSection')),
  // FeatureHighlightSection: dynamic(() => import('./sections/FeatureHighlightSection')),
  // FormBlock: dynamic(() => import('./molecules/FormBlock')),
  // MediaGallerySection: dynamic(() => import('./sections/MediaGallerySection')),
  // ProjectsSection: dynamic(() => import('./sections/ProjectsSection')),
  // QuoteSection: dynamic(() => import('./sections/QuoteSection')),
  // SelectFormControl: dynamic(() => import('./molecules/FormBlock/SelectFormControl')),
  // SupportSection: dynamic(() => import('./sections/SupportSection')),
  // TestimonialsSection: dynamic(() => import('./sections/TestimonialsSection')),
  // TextareaFormControl: dynamic(() => import('./molecules/FormBlock/TextareaFormControl')),
  // TextFormControl: dynamic(() => import('./molecules/FormBlock/TextFormControl')),
  Action: dynamic(() => import('./molecules/Action')),
  Badge: dynamic(() => import('./molecules/Badge')),
  FeaturedPostsSection: dynamic(() => import('./sections/FeaturedPostsSection')),
  HeroSection: dynamic(() => import('./sections/HeroSection')),
  ImageBlock: dynamic(() => import('./molecules/ImageBlock')),
  LabeledNav: dynamic(() => import('./molecules/labeled-nav')),
  PostFeedSection: dynamic(() => import('./sections/PostFeedSection')),
  RecentPostsSection: dynamic(() => import('./sections/RecentPostsSection')),
  TextBlock: dynamic(() => import('./molecules/TextBlock')),
  VideoBlock: dynamic(() => import('./molecules/VideoBlock'))
};

// export interface RenderLayoutProps {
//   page: PageModel;
//   site: ConfigModel;
// }
