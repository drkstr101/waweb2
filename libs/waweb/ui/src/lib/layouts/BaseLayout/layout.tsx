import { SkipNavContent } from '@reach/skip-nav';
import {
  seoGenerateMetaDescription,
  seoGenerateMetaTags,
  seoGenerateTitle
} from '@watheia/utils';
import { ConfigProvider } from '@watheia/waweb.config';
import { MessageList, useMessage } from '@watheia/waweb.message';
import clsx from 'clsx';
import Head from 'next/head';
import { BaseLayoutProps } from './BaseLayoutProps';
import Footer from './footer';
import Header from './header';
import styles from './layout.module.css';
import NProgress from './nprogress';
import ResizeHandler from './resize-handler';
import ViewSource from './view-source';

export type { BaseLayoutProps };

export default function BaseLayout({ page, site, children }: BaseLayoutProps) {
  const pageMeta = page.__metadata;
  const title = seoGenerateTitle(page, site);
  const metaTags = seoGenerateMetaTags(page, site);
  const metaDescription = seoGenerateMetaDescription(page, site);
  const { messages } = useMessage();

  //TODO parameterize in page model (styles)
  const hideNav = false;
  const layoutStyles = {};
  const usePadding = false;
  const useBackdrop = true;
  return (
    <>
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
                <meta
                  key={metaTag.property}
                  name={metaTag.property}
                  content={metaTag.content}
                />
              );
            })}
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
            />
          </Head>
          <ViewSource repo={site.repo} />
          <div className={clsx(useBackdrop ? styles['backdrop'] : styles['layout'])}>
            {!hideNav && site.header && <Header model={site.header} />}
            <div className={styles['page']}>
              <MessageList messages={messages} />
              <div
                className={clsx(styles['main'], usePadding && 'px-2 py-6 sm:px-6 lg:px-8')}
                style={layoutStyles}
              >
                <div className={clsx(styles['full'])}>
                  <SkipNavContent />
                  <ConfigProvider config={site}>{children}</ConfigProvider>
                </div>
              </div>
              <Footer config={site} />
            </div>
          </div>
        </div>
      </div>
      <NProgress />
      <ResizeHandler />
    </>
  );
}
