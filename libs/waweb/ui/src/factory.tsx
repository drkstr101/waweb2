import { ConfigModel, ContentModel, PageModel } from '@watheia/model';
import { ComponentType } from 'react';
import { blocks, layouts } from './lib/components';
import { BaseLayoutProps } from './lib/layouts/BaseLayout';

export function renderLayout<T extends PageModel = PageModel>(
  page: T,
  site: ConfigModel,
  props: Record<string, any> = {}
) {
  const C = layouts[page.layout] as ComponentType<BaseLayoutProps>;
  if (!C) {
    throw new Error(`Invalid Layout Type: (${page.layout})`);
  }
  return <C page={page} site={site} {...props} />;
}

export function renderBlock<T extends ContentModel = ContentModel>(
  model: T,
  props: Record<string, any> | ((props: T) => Record<string, any>) = {}
) {
  const C = blocks[model.type] as ComponentType<ContentModel>;
  if (!C) {
    throw new Error(`Invalid Component Type: (${model.type})`);
  }

  return <C {...model} {...(typeof props === 'function' ? props(model) : props)} />;
}

export function contentMapper<T extends ContentModel = ContentModel>(
  props: Record<string, any> | ((props: T, key: number | string) => Record<string, any>) = {}
) {
  return (model: T, key: number | string) =>
    renderBlock(model, typeof props === 'function' ? props(model, key) : model);
}
