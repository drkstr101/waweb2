import { ConfigModel, MetaTag, PageModel, PostLayoutModel } from '@watheia/model';

export function seoGenerateMetaTags(page: PageModel, site: ConfigModel): MetaTag[] {
  let pageMetaTags: Record<string, any> = {};

  if (site.seo?.metaTags?.length) {
    site.seo.metaTags.forEach((metaTag) => {
      pageMetaTags[metaTag.property] = metaTag.content;
    });
  }

  pageMetaTags = {
    ...pageMetaTags,
    ...(seoGenerateTitle(page, site) && { 'og:title': seoGenerateTitle(page, site) }),
    ...(seoGenerateOgImage(page, site) && { 'og:image': seoGenerateOgImage(page, site) })
  };

  if (page?.seo?.metaTags?.length) {
    page.seo.metaTags.forEach((metaTag) => {
      pageMetaTags[metaTag.property] = metaTag.content;
    });
  }

  const metaTags: MetaTag[] = [];
  Object.keys(pageMetaTags).forEach((key) => {
    if (pageMetaTags[key] !== null) {
      metaTags.push({
        property: key,
        content: pageMetaTags[key],
        format: key.startsWith('og') ? 'property' : 'name'
      });
    }
  });

  return metaTags;
}

export function seoGenerateTitle(page: PageModel, site: ConfigModel) {
  let title = page?.seo?.metaTitle ?? page.title;
  if (site?.seo?.titleSuffix || page?.seo?.titleSuffix) {
    const titleSuffix = page?.seo?.titleSuffix
      ? page?.seo?.titleSuffix
      : site?.seo?.titleSuffix;
    title = `${title} | ${titleSuffix}`;
  }
  return title;
}

export function seoGenerateMetaDescription(page: PageModel, site: ConfigModel) {
  let metaDescription: string | null = null;
  // Blog posts use the export as the default meta description
  if (page.__metadata.modelName === 'PostLayout') {
    metaDescription = (page as PostLayoutModel).excerpt ?? null;
  }
  // page metaDescription field overrides all others
  if (page?.seo?.metaDescription) {
    metaDescription = page.seo.metaDescription;
  }
  return metaDescription;
}

export function seoGenerateOgImage(page: PageModel, site: ConfigModel) {
  let ogImage: string | null = null;
  // Use the sites default og:image field
  if (site.seo?.socialImage) {
    ogImage = site.seo.socialImage;
  }
  // Blog posts use the featuredImage as the default og:image
  if (page.__metadata.modelName === 'PostLayout') {
    const post = page as PostLayoutModel;
    if ((post as PostLayoutModel).featuredImage?.media?.src) {
      ogImage = (post as PostLayoutModel).featuredImage?.media.src ?? '/images/icon.png';
    }
  }
  // page socialImage field overrides all others
  else if (page?.seo?.socialImage) {
    ogImage = page.seo.socialImage;
  }

  if (ogImage) {
    return ogImage;
  }

  return null;
}
