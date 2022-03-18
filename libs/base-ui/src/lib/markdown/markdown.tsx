import { RequireAtLeastOne } from '@watheia/utils';
import clsx from 'clsx';
import MarkdownToJSX from 'markdown-to-jsx';
import { createElement, HtmlHTMLAttributes } from 'react';

export type CreateElement = typeof createElement;

export type HTMLTags = keyof JSX.IntrinsicElements;

export type Override =
  | RequireAtLeastOne<{
      component: React.ElementType;
      props: Record<string, any>;
    }>
  | React.ElementType;

export type Overrides = {
  [tag in HTMLTags]?: Override;
} & {
  [customComponent: string]: Override;
};

/* eslint-disable-next-line */
export interface MarkdownProps extends Omit<HtmlHTMLAttributes<HTMLDivElement>, 'children'> {
  children: string;
  options?: Partial<{
    /**
     * Ultimate control over the output of all rendered JSX.
     */
    createElement: (
      tag: Parameters<CreateElement>[0],
      props: React.Props<any>,
      ...children: React.ReactChild[]
    ) => JSX.Element;
    /**
     * Disable the compiler's best-effort transcription of provided raw HTML
     * into JSX-equivalent. This is the functionality that prevents the need to
     * use `dangerouslySetInnerHTML` in React.
     */
    disableParsingRawHTML: boolean;
    /**
     * Forces the compiler to always output content with a block-level wrapper
     * (`<p>` or any block-level syntax your markdown already contains.)
     */
    forceBlock: boolean;
    /**
     * Forces the compiler to always output content with an inline wrapper (`<span>`)
     */
    forceInline: boolean;
    /**
     * Supply additional HTML entity: unicode replacement mappings.
     *
     * Pass only the inner part of the entity as the key,
     * e.g. `&le;` -> `{ "le": "\u2264" }`
     *
     * By default
     * the following entites are replaced with their unicode equivalents:
     *
     * ```
     * &amp;
     * &apos;
     * &gt;
     * &lt;
     * &nbsp;
     * &quot;
     * ```
     */
    namedCodesToUnicode: {
      [key: string]: string;
    };
    /**
     * Selectively control the output of particular HTML tags as they would be
     * emitted by the compiler.
     */
    overrides: Overrides;
    /**
     * Declare the type of the wrapper to be used when there are multiple
     * children to render. Set to `null` to get an array of children back
     * without any wrapper, or use `React.Fragment` to get a React element
     * that won't show up in the DOM.
     */
    wrapper: React.ElementType | null;
    /**
     * Forces the compiler to wrap results, even if there is only a single
     * child or no children.
     */
    forceWrapper: boolean;
    /**
     * Override normalization of non-URI-safe characters for use in generating
     * HTML IDs for anchor linking purposes.
     */
    slugify: (source: string) => string;
  }>;
}

const Markdown = ({ options, children, className, ...props }: MarkdownProps) => {
  return (
    <div className={clsx('text-lg prose mx-auto', className)}>
      <MarkdownToJSX options={options}>{children}</MarkdownToJSX>
    </div>
  );
};

export default Markdown;
