import { ConfigModel, PageModel } from '@watheia/model';
import { HtmlHTMLAttributes } from 'react';

export interface BaseLayoutProps<T extends PageModel = PageModel>
  extends HtmlHTMLAttributes<HTMLDivElement> {
  page: T;
  site: ConfigModel;
}
