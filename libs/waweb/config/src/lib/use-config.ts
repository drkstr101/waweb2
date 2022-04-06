import { useContext } from 'react';
import { Config, ConfigContext } from './config-context';

export function useConfig(): Config {
  const config = useContext(ConfigContext);
  if (!config) {
    throw new Error('useConfig must be called within the context of a ConfigContextProvider.');
  }

  return config;
}

export default useConfig;
