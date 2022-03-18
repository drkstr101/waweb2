import clsx from 'clsx';
import { HtmlHTMLAttributes } from 'react';

/* This example requires Tailwind CSS v2.0+ */
export default function Container({
  children,
  className,
  ...props
}: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx('max-w-7xl mx-auto sm:px-6 lg:px-8', className)} {...props}>
      {children}
    </div>
  );
}
