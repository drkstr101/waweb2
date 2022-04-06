import { SkipNavContent } from '@reach/skip-nav';
import { useConfig } from '@watheia/waweb.config';
import { MessageList, useMessage } from '@watheia/waweb.message';
import clsx from 'clsx';
import Head from 'next/head';
import { BaseLayoutProps, LayoutOptions } from './BaseLayoutProps';
import Footer from './footer';
import Header from './header';
import styles from './layout.module.css';
import NProgress from './nprogress';
import ResizeHandler from './resize-handler';
import ViewSource from './view-source';

export type { BaseLayoutProps };

// const renderMetaTag = (metaTag) => {
//   if (metaTag.format === 'property') {
//     // OpenGraph meta tags (og:*) should be have the format <meta property="og:…" content="…">
//     return (
//       <meta key={metaTag.property} property={metaTag.property} content={metaTag.content} />
//     );
//   }
//   return <meta key={metaTag.property} name={metaTag.property} content={metaTag.content} />;
// };

const defaultOptions: LayoutOptions = {
  hideNav: false,
  useBackdrop: false,
  usePadding: true
};

export default function BaseLayout({
  options = defaultOptions,
  className,
  children,
  ...props
}: BaseLayoutProps) {
  // const pageMeta = page.__metadata;
  // const title = seoGenerateTitle(page, site);
  // const metaTags = seoGenerateMetaTags(page, site);
  // const metaDescription = seoGenerateMetaDescription(page, site);
  const { messages } = useMessage();
  const config = useConfig();

  const { useBackdrop, usePadding, hideNav } = options;

  return (
    <>
      <Head>
        {/* <title>{title}</title> */}
        {/* {metaDescription && <meta name="description" content={metaDescription} />} */}
        {/* {metaTags.map(renderMetaTag)} */}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <ViewSource />
      <div className={clsx(useBackdrop ? styles['backdrop'] : styles['layout'])} {...props}>
        {!hideNav && config.header && <Header />}
        <div className={styles['page']}>
          <MessageList messages={messages} />
          <div className={clsx(styles['main'], usePadding && 'px-2 py-6 sm:px-6 lg:px-8')}>
            <main className={clsx(styles['full'], className)}>
              <SkipNavContent />
              {children}
            </main>
          </div>
          {config.footer && <Footer />}
        </div>
      </div>
      {/* <NProgress /> */}
      <ResizeHandler />
    </>
  );
}
