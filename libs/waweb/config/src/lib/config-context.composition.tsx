import React from 'react';
import config from '../fixtures/test-config.json';
import { ConfigProvider } from './config-context-provider';
import useConfig from './use-config';

export function MockComponent() {
  const config = useConfig();
  return <a href={config.repo}>{config.brandName}</a>;
}

export const BasicThemeUsage = () => {
  return (
    <ConfigProvider config={config}>
      <MockComponent />
    </ConfigProvider>
  );
};
