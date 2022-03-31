import { ConfigModel, Maybe } from '@watheia/model';
import { createContext } from 'react';

export const ConfigContext = createContext<Maybe<ConfigModel>>(null);
