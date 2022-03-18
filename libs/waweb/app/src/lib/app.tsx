import { SSRProvider } from '@react-aria/ssr';
import { Provider } from '@react-spectrum/provider';
import { theme } from '@react-spectrum/theme-default';
import { AuthProvider } from '@watheia/waweb.auth';
import { MessageProvider } from '@watheia/waweb.message';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from './layout';
import NProgress from './nprogress';
import ResizeHandler from './resize-handler';

function WaNextApp({ Component, pageProps }: AppProps) {
  // keep color scheme in sync with tailwindcss
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('dark');
  useEffect(() => {
    setColorScheme(
      window.document.body.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
    );
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <title>Watheia Labs | A capabilities test of the modern web</title>
      </Head>
      <SSRProvider>
        <MessageProvider>
          <AuthProvider>
            <Provider theme={theme} colorScheme={colorScheme} minHeight="100%">
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Provider>
          </AuthProvider>
        </MessageProvider>
        <ResizeHandler />
        <NProgress />
      </SSRProvider>
    </>
  );
}

export default WaNextApp;
