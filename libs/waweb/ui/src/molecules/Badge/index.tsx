import { mapStylesToClassNames as mapStyles } from '@watheia/api.stackbit';
import { BadgeModel } from '@watheia/model';
import classNames from 'clsx';

export default function Badge(props: BadgeModel) {
  const { label } = props;
  if (!label) {
    return null;
  }
  const cssClasses = props.className || null;
  const cssId = props.elementId;
  const annotationPrefix = props['data-sb-field-path'] || '';
  const annotations = [`${annotationPrefix}`, `${annotationPrefix}.elementId#@id`];
  const styles = props.styles?.['self'] || {};
  return (
    <div
      id={cssId}
      className={classNames('wa-badge', cssClasses, styles ? mapStyles(styles) : null)}
      data-sb-field-path={annotations.join(' ').trim()}
    >
      <span data-sb-field-path=".label">{label}</span>
    </div>
  );
}
