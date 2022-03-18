import { getDataAttrs, mapStylesToClassNames as mapStyles } from '@watheia/api.stackbit';
import { mapMaxWidthStyles } from '@watheia/base-ui';
import { TextBlockModel } from '@watheia/model';
import classNames from 'clsx';
import Markdown from 'markdown-to-jsx';

export default function TextBlock(props: TextBlockModel) {
  const cssId = props.elementId;
  const sectionStyles = props.styles?.['self'] || {};
  const blockWidth = sectionStyles.width ?? 'narrow';
  return (
    <div
      id={cssId}
      {...getDataAttrs(props)}
      className={classNames(
        'wa-text-block',
        mapMaxWidthStyles(blockWidth),
        sectionStyles.margin,
        sectionStyles.padding || 'py-12 px-4'
      )}
    >
      {textBody(props)}
    </div>
  );
}

function textBody(props: TextBlockModel) {
  const styles = props.styles || {};
  return (
    <div>
      {props.content && (
        <Markdown
          options={{ forceWrapper: true }}
          className={classNames(
            'wa-content',
            'max-w-prose',
            'md:text-lg',
            styles['content'] ? mapStyles(styles['content']) : null
          )}
          data-sb-field-path=".content"
        >
          {props.content}
        </Markdown>
      )}
    </div>
  );
}
