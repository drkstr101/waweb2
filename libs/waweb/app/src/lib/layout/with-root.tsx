import { NProgress, ResizeHandler } from '@waweb/atoms';
import { AuthProvider } from '@waweb/auth';
import { MessageProvider } from '@waweb/message';
import { Theme } from '@waweb/theme';
import React from 'react';
import { OverlayProvider, SSRProvider } from 'react-aria';

export default function withRoot<P>(Component: React.ComponentType<P>) {
  function WithRoot(props: P) {
    return (
      <SSRProvider>
        <OverlayProvider>
          <Theme>
            <MessageProvider>
              <AuthProvider>
                <Component {...props} />
              </AuthProvider>
            </MessageProvider>
          </Theme>
          <ResizeHandler />
          <NProgress />
        </OverlayProvider>
      </SSRProvider>
    );
  }

  return WithRoot;
}
