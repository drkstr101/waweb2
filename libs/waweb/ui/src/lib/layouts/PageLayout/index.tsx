import { Markdown } from '@watheia/base-ui';
import { contentMapper } from '../../../factory';
import BaseLayout, { BaseLayoutProps } from '../BaseLayout';

export default function PageLayout(props: BaseLayoutProps) {
  const { page, site } = props;
  // const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
  const sections = page.sections || [];

  return (
    <BaseLayout page={page} site={site}>
      <main id="main" className="page-layout">
        {page.title && (
          <h1 className="sr-only" data-sb-field-path="title">
            {page.title}
          </h1>
        )}
        {page.markdown_content && (
          <Markdown className="p-6 sm:px-12">{page.markdown_content}</Markdown>
        )}
        {sections.length > 0 && (
          <div data-sb-field-path="sections">{sections.map(contentMapper())}</div>
        )}
      </main>
    </BaseLayout>
  );
}
