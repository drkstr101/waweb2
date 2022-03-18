import Document, { Head, Html, Main, NextScript } from 'next/document';

function url(path: string) {
  return `${
    process.env['WA_HOME_URL'] ?? process.env['VERCEL_URL'] ?? 'http://localhost:4200'
  }/${path}`;
}

export default class WaNextDocument extends Document {
  override render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content="Watheia Labs" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Watheia Labs" />
          <meta name="description" content="A capabilities test of the modern web" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-config" content={url('browserconfig.xml')} />
          <meta name="msapplication-TileColor" content="#111" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#111" />

          <link rel="apple-touch-icon" href={url('apple-touch-icon.png')} />

          <link rel="icon" type="image/png" sizes="32x32" href={url('favicon-32x32.png')} />
          <link rel="icon" type="image/png" sizes="16x16" href={url('favicon-16x16.png')} />
          <link rel="manifest" href={url('manifest.json')} />
          <link rel="mask-icon" href={url('safari-pinned-tab.svg')} color="#5bbad5" />
          <link rel="shortcut icon" href={url('favicon.ico')} />

          {/* Add spectrum fonts */}
          <link rel="stylesheet" href="https://use.typekit.net/uma8ayv.css" />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'http://schema.org',
                '@type': 'Article',
                author: 'Watheia Labs, LLC',
                headline: 'A capabilities test of the modern web',
                description:
                  'Watheia Labs is an open-source showcase of best practices on developing modern, real-time serverless web applications.',
                image: 'https://www.datocms-assets.com/64528/1646636351-logo-alt.png',
                publisher: {
                  '@type': 'Organization',
                  url: 'https://watheia.io',
                  name: 'Watheia',
                  logo: 'https://www.datocms-assets.com/64528/1646636342-icon.png'
                }
              })
            }}
          />
        </Head>
        <body data-theme="dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
