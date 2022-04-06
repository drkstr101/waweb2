import { defaultTheme, Provider, SSRProvider } from '@adobe/react-spectrum';
import { AuthProvider } from '@watheia/waweb.auth';
import { MessageProvider } from '@watheia/waweb.message';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

function WaNextApp({ Component, pageProps }: AppProps) {
  // keep color scheme in sync with tailwindcss
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('dark');
  useEffect(() => {
    window.document.body.classList?.remove('loading');
    setColorScheme(
      window.document.body.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
    );
  }, []);
  return (
    <SSRProvider>
      <MessageProvider>
        <AuthProvider>
          <Provider theme={defaultTheme} colorScheme={colorScheme} minHeight="100%">
            <Component {...pageProps} />
          </Provider>
        </AuthProvider>
      </MessageProvider>
    </SSRProvider>
  );
}

export default WaNextApp;
