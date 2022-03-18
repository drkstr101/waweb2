import { mapStylesToClassNames as mapStyles } from '@watheia/api.stackbit';
import { Link, mapMaxWidthStyles } from '@watheia/base-ui';
import { PostFeedLayoutModel } from '@watheia/model';
import classNames from 'clsx';
import { renderElement } from '../..';
import BaseLayout from '../BaseLayout';
import { BaseLayoutProps } from '../BaseLayout/BaseLayoutProps';

export default function PostFeedLayout(props: BaseLayoutProps<PostFeedLayoutModel>) {
  const { page, site } = props;
  const {
    title,
    topSections = [],
    bottomSections = [],
    pageIndex,
    baseUrlPath,
    numOfPages,
    items,
    postFeed
  } = page;
  const postFeedColors = postFeed?.colors || 'colors-a';
  const postFeedWidth = postFeed?.styles?.['self']?.['width'] || 'wide';
  const postFeedJustifyContent = postFeed?.styles?.['self']?.['justifyContent'] || 'center';
  const pageLinks = PageLinks({ pageIndex, baseUrlPath, numOfPages });

  return (
    <BaseLayout page={page} site={site}>
      <main id="main" className="layout page-layout">
        {title && (
          <div
            className={classNames(
              'flex',
              'py-12',
              'lg:py-14',
              'px-4',
              postFeedColors,
              mapStyles({ justifyContent: postFeedJustifyContent })
            )}
          >
            <h1
              className={classNames('w-full', mapMaxWidthStyles(postFeedWidth))}
              data-sb-field-path="title"
            >
              {title}
            </h1>
          </div>
        )}
        {renderSections(topSections, 'topSections')}
        {postFeed &&
          renderElement(postFeed, {
            posts: items,
            pageLinks: pageLinks,
            'data-sb-field-path': 'postFeed'
          })}
        {renderSections(bottomSections, 'bottomSections')}
      </main>
    </BaseLayout>
  );
}

function renderSections(sections: any[], fieldName: string) {
  if (sections.length === 0) {
    return null;
  }
  return (
    <div data-sb-field-path={fieldName}>
      {sections.map((section, index) => {
        const props = { 'data-sb-field-path': `${fieldName}.${index}` };
        return renderElement(section, props);
      })}
    </div>
  );
}

function PageLinks({ pageIndex, baseUrlPath, numOfPages }: any) {
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

  // renders prev "←" button, if the current page is the first page, the button is disabled
  if (pageIndex > 0) {
    pageLinks.push(
      <PageLink
        key="prev"
        pageIndex={pageIndex - 1}
        buttonLabel="←"
        baseUrlPath={baseUrlPath}
      />
    );
  } else {
    pageLinks.push(<PageLinkDisabled key="prev" buttonLabel="←" />);
  }

  // if startIndex is not 0, then render the first page followed by ellipsis, if needed.
  if (startIndex > 0) {
    pageLinks.push(
      <PageLink key="0" pageIndex={0} buttonLabel="1" baseUrlPath={baseUrlPath} />
    );
    if (startIndex > 1) {
      pageLinks.push(<Ellipsis key="beforeEllipsis" />);
    }
  }

  // render all pages between startIndex and endIndex, the current page should be disabled
  for (let i = startIndex; i <= endIndex; i++) {
    if (pageIndex === i) {
      pageLinks.push(<PageLinkDisabled key={i} buttonLabel={i + 1} />);
    } else {
      pageLinks.push(
        <PageLink key={i} pageIndex={i} buttonLabel={i + 1} baseUrlPath={baseUrlPath} />
      );
    }
  }

  // if endIndex is not the last page, then render the last page preceded by ellipsis, if needed.
  if (endIndex < numOfPages - 1) {
    if (endIndex < numOfPages - 2) {
      pageLinks.push(<Ellipsis key="afterEllipsis" />);
    }
    pageLinks.push(
      <PageLink
        key={numOfPages - 1}
        pageIndex={numOfPages - 1}
        buttonLabel={numOfPages}
        baseUrlPath={baseUrlPath}
      />
    );
  }

  // renders next "→" button, if the current page is the last page, the button is disabled
  if (pageIndex < numOfPages - 1) {
    pageLinks.push(
      <PageLink
        key="next"
        pageIndex={pageIndex + 1}
        buttonLabel="→"
        baseUrlPath={baseUrlPath}
      />
    );
  } else {
    pageLinks.push(<PageLinkDisabled key="next" buttonLabel="→" />);
  }

  return (
    <div className={classNames('flex flex-row items-center justify-center mt-12 sm:mt-20')}>
      {pageLinks}
    </div>
  );
}

function PageLink({ pageIndex, buttonLabel, baseUrlPath }: any) {
  return (
    <Link
      href={urlPathForPageAtIndex(pageIndex, baseUrlPath)}
      className="sb-component-button sb-component-button-secondary px-4 py-2 mx-2"
    >
      {buttonLabel}
    </Link>
  );
}

function PageLinkDisabled({ buttonLabel }: any) {
  return (
    <span
      key="next"
      className="sb-component-button sb-component-button-secondary opacity-25 px-4 py-2 mx-2"
    >
      {buttonLabel}
    </span>
  );
}

function Ellipsis() {
  return <span className="px-4 py-2 mx-2">…</span>;
}

function urlPathForPageAtIndex(pageIndex: number, baseUrlPath: any) {
  return pageIndex === 0 ? baseUrlPath : `${baseUrlPath}/page/${pageIndex + 1}`;
}
