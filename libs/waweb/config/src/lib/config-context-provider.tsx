import { ConfigModel } from '@watheia/model';
import React, { ReactNode } from 'react';
import { ConfigContext } from './config-context';

export type ConfigProviderProps = {
  /**
   * The global config context to inject
   */
  config: ConfigModel;

  /**
   * children to be rendered within this theme.
   */
  children: ReactNode;
};

export function ConfigProvider({ config, children }: ConfigProviderProps) {
  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
}
