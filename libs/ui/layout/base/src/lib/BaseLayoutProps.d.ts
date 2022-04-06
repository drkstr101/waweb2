import { HtmlHTMLAttributes } from 'react';

export interface LayoutOptions {
  hideNav?: boolean;
  usePadding?: boolean;
  useBackdrop?: boolean;
}

export interface BaseLayoutProps extends HtmlHTMLAttributes<HTMLDivElement> {
  options?: LayoutOptions;
}
