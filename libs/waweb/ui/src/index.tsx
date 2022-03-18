import { ConfigModel, ContentModel, PageModel } from '@watheia/model';
import dynamic from 'next/dynamic';
import React, { ComponentType } from 'react';
import { BaseLayoutProps } from './layouts/BaseLayout';

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
const layouts = {
  PageLayout: dynamic(() => import('./layouts/PageLayout')),
  PostLayout: dynamic(() => import('./layouts/PostLayout')),
  PostFeedLayout: dynamic(() => import('./layouts/PostFeedLayout'))
  // PostFeedCategoryLayout: dynamic(() => import('./layouts/PostFeedCategoryLayout'))
};

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
const elements = {
  Action: dynamic(() => import('./molecules/Action')),
  Badge: dynamic(() => import('./molecules/Badge')),
  // CheckboxFormControl: dynamic(() => import('./molecules/FormBlock/CheckboxFormControl')),
  // ContactSection: dynamic(() => import('./sections/ContactSection')),
  // CtaSection: dynamic(() => import('./sections/CtaSection')),
  // EmailFormControl: dynamic(() => import('./molecules/FormBlock/EmailFormControl')),
  // SupportSection: dynamic(() => import('./sections/SupportSection')),
  // FeatureHighlightSection: dynamic(() => import('./sections/FeatureHighlightSection')),
  // FeaturedItem: dynamic(() => import('./sections/FeaturedItemsSection/FeaturedItem')),
  // FeaturedItemsSection: dynamic(() => import('./sections/FeaturedItemsSection')),
  // FeaturedPeopleSection: dynamic(() => import('./sections/FeaturedPeopleSection')),
  // FormBlock: dynamic(() => import('./molecules/FormBlock')),
  HeroSection: dynamic(() => import('./sections/HeroSection')),
  ImageBlock: dynamic(() => import('./molecules/ImageBlock')),
  // ProjectsSection: dynamic(() => import('./sections/ProjectsSection')),
  // MediaGallerySection: dynamic(() => import('./sections/MediaGallerySection')),
  PostFeedSection: dynamic(() => import('./sections/PostFeedSection')),
  FeaturedPostsSection: dynamic(() => import('./sections/FeaturedPostsSection')),
  RecentPostsSection: dynamic(() => import('./sections/RecentPostsSection')),
  // QuoteSection: dynamic(() => import('./sections/QuoteSection')),
  // SelectFormControl: dynamic(() => import('./molecules/FormBlock/SelectFormControl')),
  // TestimonialsSection: dynamic(() => import('./sections/TestimonialsSection')),
  // TextareaFormControl: dynamic(() => import('./molecules/FormBlock/TextareaFormControl')),
  // TextFormControl: dynamic(() => import('./molecules/FormBlock/TextFormControl')),
  TextBlock: dynamic(() => import('./molecules/TextBlock')),
  VideoBlock: dynamic(() => import('./molecules/VideoBlock'))
};

export interface RenderLayoutProps {
  page: PageModel;
  site: ConfigModel;
}

export function renderLayout<T extends PageModel = PageModel>(
  page: T,
  site: ConfigModel,
  props: Record<string, any> = {}
) {
  const C = layouts[page.layout] as ComponentType<BaseLayoutProps>;
  return <C page={page} site={site} {...props} />;
}

export function renderElement<T extends ContentModel = ContentModel>(
  model: T,
  props: Record<string, any> | ((props: T) => Record<string, any>) = {}
) {
  const C = elements[model.type] as ComponentType<ContentModel>;
  return <C {...model} {...(typeof props === 'function' ? props(model) : props)} />;
}

export function contentMapper<T extends ContentModel = ContentModel>(
  props: Record<string, any> | ((props: T, key: number | string) => Record<string, any>) = {}
) {
  return (model: T, key: number | string) =>
    renderElement(model, typeof props === 'function' ? props(model, key) : model);
}
