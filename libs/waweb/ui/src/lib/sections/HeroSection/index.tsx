import { getDataAttrs, mapStylesToClassNames as mapStyles } from '@watheia/api.stackbit';
import {
  Heading,
  mapFlexDirectionStyles,
  mapMaxWidthStyles,
  mapMinHeightStyles,
  Markdown
} from '@watheia/base-ui';
import { HeroSectionModel, ImageBlockModel, VideoBlockModel } from '@watheia/model';
import classNames from 'clsx';
import { contentMapper, renderBlock } from '../../../factory';
// import { Action, Badge } from '../../atoms';

type HeroMedia = ImageBlockModel | VideoBlockModel;

export default function HeroSection(props: HeroSectionModel) {
  const cssId = props.elementId;
  const styles = props.styles?.['self'] || {};
  const width = styles.width || 'wide';
  const height = styles.height || 'auto';
  const justifyContent = styles.justifyContent || 'center';
  const flexDirection = styles.flexDirection || 'row';
  const alignItems = styles.alignItems || 'center';
  return (
    <div
      id={cssId}
      {...getDataAttrs(props)}
      className={classNames(
        'wa-hero-section',
        'flex flex-col justify-center',
        mapMaxWidthStyles(width),
        mapMinHeightStyles(height),
        styles.margin,
        styles.padding || 'py-12 px-4'
      )}
    >
      <div
        className={classNames('flex', 'w-full', mapStyles({ justifyContent: justifyContent }))}
      >
        <div className={classNames('w-full', mapMaxWidthStyles(width))}>
          <div
            className={classNames(
              'flex',
              mapFlexDirectionStyles(flexDirection),
              mapStyles({ alignItems: alignItems }),
              'space-y-8',
              {
                'lg:space-y-0 lg:space-x-8': flexDirection === 'row',
                'space-y-reverse lg:space-y-0 lg:space-x-8 lg:space-x-reverse':
                  flexDirection === 'row-reverse',
                'space-y-reverse': flexDirection === 'col-reverse'
              }
            )}
          >
            <div className="flex-1 w-full">
              {heroBody(props)}
              {heroActions(props)}
            </div>
            {props.media && <div className="flex-1 w-full">{heroMedia(props.media)}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

function heroMedia(media: HeroMedia) {
  return renderBlock(media, { 'data-sb-field-path': '.media' });
}

function heroBody(props: HeroSectionModel) {
  const styles = props.styles || {};
  return (
    <div>
      {props.badge && renderBlock(props.badge, { 'data-sb-field-path': '.badge' })}
      {props.title && (
        <Heading component="h2" data-sb-field-path=".title">
          {props.title}
        </Heading>
      )}
      {props.subtitle && (
        <p
          className={classNames(
            'text-xl',
            'sm:text-2xl',
            styles['subtitle'] ? mapStyles(styles['subtitle']) : null,
            {
              'mt-4': props.title
            }
          )}
          data-sb-field-path=".subtitle"
        >
          {props.subtitle}
        </p>
      )}
      {props.content && (
        <Markdown
          options={{ forceBlock: true, forceWrapper: true }}
          className={classNames(
            'sb-markdown',
            'sm:text-lg',
            styles['content'] ? mapStyles(styles['content']) : null,
            {
              'mt-6': props.title || props.subtitle
            }
          )}
          data-sb-field-path=".content"
        >
          {props.content}
        </Markdown>
      )}
    </div>
  );
}

function heroActions(props: HeroSectionModel) {
  const actions = props.actions || [];
  if (actions.length === 0) {
    return null;
  }
  const styles = props.styles || {};
  return (
    <div
      className={classNames('overflow-x-hidden', {
        'mt-8': props.title || props.subtitle || props.content || props.badge
      })}
    >
      <div
        className={classNames(
          'flex',
          'flex-wrap',
          'items-center',
          '-mx-2',
          styles['actions'] ? mapStyles(styles['actions']) : null
        )}
        data-sb-field-path=".actions"
      >
        {actions.map(
          contentMapper((_, key) => {
            return {
              key: key,
              className: 'mb-3 mx-2 lg:whitespace-nowrap',
              'data-sb-field-path:': `.${key}`
            };
          })
        )}
      </div>
    </div>
  );
}
