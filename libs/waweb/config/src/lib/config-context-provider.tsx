import React, { ReactNode } from 'react';
import { Config, ConfigContext } from './config-context';
import useConfig from './use-config';

export type ConfigProviderProps = {
  /**
   * The global config context to inject
   */
  config: Partial<Config>;

  /**
   * children to be rendered within this theme.
   */
  children: ReactNode;
};

export function ConfigProvider({ config, children }: ConfigProviderProps) {
  const original = useConfig();
  const value = { ...original, ...config } as Config;
  return <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>;
}
