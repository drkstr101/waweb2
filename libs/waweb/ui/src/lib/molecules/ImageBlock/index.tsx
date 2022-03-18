import { ImageBlockModel } from '@watheia/model';
import clsx from 'clsx';

export default function ImageBlock(props: ImageBlockModel) {
  const { src, alt } = props.media;
  if (!src) {
    return null;
  }
  const cssId = props.elementId;
  const styles = props.styles['self'] ?? {};
  const imageOpacity = styles.opacity || styles.opacity === 0 ? styles.opacity : 100;
  const annotationPrefix = props['data-sb-field-path'] || '';
  const annotations = [
    `${annotationPrefix}`,
    `${annotationPrefix}.url#@src`,
    `${annotationPrefix}.altText#@alt`,
    `${annotationPrefix}.elementId#@id`
  ];

  return (
    <img
      id={cssId}
      className={clsx('image-block')}
      src={src}
      alt={alt || ''}
      style={{ opacity: imageOpacity * 0.01 }}
      data-sb-field-path={annotations.join(' ').trim()}
    />
  );
}
