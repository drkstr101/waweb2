import clsx from 'clsx';
import NextLink from 'next/link';
import { HtmlHTMLAttributes } from 'react';

/* eslint-disable-next-line */
export interface LinkProps extends HtmlHTMLAttributes<HTMLAnchorElement> {
  href?: string;
}

export function Link({ children, className, href = '#', ...props }: LinkProps) {
  const isInternal = href.startsWith('/') || href.startsWith('#');
  // const uri = isInternal ? url(href).href : href;

  const NativeLink = (props: LinkProps) => (
    <a className={clsx('link link-hover hover:text-white', className)} {...props}>
      {children}
    </a>
  );

  if (isInternal) {
    return (
      <NextLink href={href} passHref>
        <NativeLink />
      </NextLink>
    );
  }

  return <NativeLink href={href} />;
}

export default Link;
