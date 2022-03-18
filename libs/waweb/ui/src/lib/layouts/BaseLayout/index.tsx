import {
  seoGenerateMetaDescription,
  seoGenerateMetaTags,
  seoGenerateTitle
} from '@watheia/api.stackbit';
import clsx from 'clsx';
import Head from 'next/head';
import { BaseLayoutProps } from './BaseLayoutProps';

export type { BaseLayoutProps };

export default function BaseLayout({ page, site, children }: BaseLayoutProps) {
  const pageMeta = page.__metadata;
  const title = seoGenerateTitle(page, site);
  const metaTags = seoGenerateMetaTags(page, site);
  const metaDescription = seoGenerateMetaDescription(page, site);
  return (
    <div className={clsx('sb-page', pageMeta.pageCssClasses)} data-sb-object-id={pageMeta.id}>
      <div className="sb-base sb-default-base-layout">
        <Head>
          <title>{title}</title>
          {metaDescription && <meta name="description" content={metaDescription} />}
          {metaTags.map((metaTag) => {
            if (metaTag.format === 'property') {
              // OpenGraph meta tags (og:*) should be have the format <meta property="og:…" content="…">
              return (
                <meta
                  key={metaTag.property}
                  property={metaTag.property}
                  content={metaTag.content}
                />
              );
            }
            return (
              <meta key={metaTag.property} name={metaTag.property} content={metaTag.content} />
            );
          })}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {children}
      </div>
    </div>
  );
}
