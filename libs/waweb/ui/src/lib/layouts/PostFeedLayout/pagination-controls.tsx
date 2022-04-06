/* eslint-disable-next-line */
/* This example requires Tailwind CSS v2.0+ */
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid';
import { Link } from '@watheia/base-ui';
import clsx from 'clsx';
import { HtmlHTMLAttributes } from 'react';
import styles from './pagination-controls.module.css';

export interface PaginationProps {
  pageIndex: number;
  baseUrlPath: string;
  numOfPages: number;
}

export type PaginationControlsProps = PaginationProps & HtmlHTMLAttributes<HTMLDivElement>;

export function PaginationControls({
  pageIndex,
  baseUrlPath,
  numOfPages,
  className,
  ...props
}: PaginationControlsProps) {
  if (numOfPages < 2) {
    return null;
  }
  const pageLinks = [];
  const padRange = 2;
  const startIndex = pageIndex - padRange > 2 ? pageIndex - padRange : 0;
  const endIndex =
    pageIndex + padRange < numOfPages - 3 ? pageIndex + padRange : numOfPages - 1;

  // following logic renders pagination controls:
  // for example, if the current page is 6 (pageIndex === 5)
  //              ↓
  // ← 1 ... 4 5 6 7 8 ... 20 →
  //         ↑       ↑
  // and padRange === 2, then it renders from 4 (6 - 2) to 8 (6 + 2)

  // if startIndex is not 0, then render the first page followed by ellipsis, if needed.
  if (startIndex > 0) {
    pageLinks.push(
      <PaginationLink pageIndex={0} baseUrlPath={baseUrlPath} numOfPages={numOfPages} />
    );
    if (startIndex > 1) {
      pageLinks.push(<Ellipsis key="beforeEllipsis" />);
    }
  }

  // render all pages between startIndex and endIndex, the current page should be disabled
  for (let i = startIndex; i <= endIndex; i++) {
    pageLinks.push(
      <PaginationLink pageIndex={i} baseUrlPath={baseUrlPath} numOfPages={numOfPages} />
    );
  }

  // if endIndex is not the last page, then render the last page preceded by ellipsis, if needed.
  if (endIndex < numOfPages - 1) {
    if (endIndex < numOfPages - 2) {
      pageLinks.push(<Ellipsis key="afterEllipsis" />);
    }
    pageLinks.push(
      <PaginationLink
        pageIndex={numOfPages - 1}
        baseUrlPath={baseUrlPath}
        numOfPages={numOfPages}
      />
    );
  }

  return (
    <nav
      className={clsx(
        'flex items-center justify-between px-4 border-t border-secondary sm:px-0',
        className
      )}
    >
      <div className="flex flex-1 w-0 -mt-px">
        <BackButton pageIndex={pageIndex} baseUrlPath={baseUrlPath} numOfPages={numOfPages} />
      </div>
      <div className="hidden md:-mt-px md:flex">{}</div>
      <div className="flex justify-end flex-1 w-0 -mt-px">
        <NextButton pageIndex={pageIndex} baseUrlPath={baseUrlPath} numOfPages={numOfPages} />
      </div>
    </nav>
  );
}

function urlPathForPageAtIndex(pageIndex: number, baseUrlPath: any) {
  return pageIndex === 0 ? baseUrlPath : `${baseUrlPath}/page/${pageIndex + 1}`;
}

const BackButton = ({ pageIndex, baseUrlPath }: PaginationProps) => {
  const url = pageIndex > 0 ? urlPathForPageAtIndex(pageIndex - 1, baseUrlPath) : '#';
  return (
    <Link
      href={url}
      className="inline-flex items-center pt-4 pr-1 text-sm font-medium border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300"
    >
      <ArrowNarrowLeftIcon className="w-5 h-5 mr-3" aria-hidden="true" />
      Previous
    </Link>
  );
};

const NextButton = ({ pageIndex, numOfPages, baseUrlPath }: PaginationProps) => {
  const url =
    pageIndex < numOfPages - 1 ? urlPathForPageAtIndex(pageIndex + 1, baseUrlPath) : '#';
  return (
    <Link
      href={url}
      className="inline-flex items-center pt-4 pl-1 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300"
    >
      Next
      <ArrowNarrowRightIcon className="w-5 h-5 ml-3 text-gray-400" aria-hidden="true" />
    </Link>
  );
};

const Ellipsis = () => (
  <span className="inline-flex items-center px-4 pt-4 text-sm font-medium border-t-2 border-transparent">
    ...
  </span>
);

const PaginationLink = ({ pageIndex, baseUrlPath }: PaginationProps) => {
  const url = urlPathForPageAtIndex(pageIndex, baseUrlPath);
  return (
    <Link key={pageIndex} href={url} className={styles['link']}>
      {pageIndex + 1}
    </Link>
  );
};

export default PaginationControls;
