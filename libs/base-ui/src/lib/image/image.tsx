import { isExternal, url } from '@watheia/utils';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

/* eslint-disable-next-line */
export interface ImageProps extends NextImageProps {}

export const Image = ({ className, src, ...props }: ImageProps) => {
  const uri =
    typeof src === 'string' && isExternal(src)
      ? src
      : typeof src === 'string'
      ? url(src).href
      : src;
  return (
    <div className={className}>
      <NextImage src={uri} {...props} />
    </div>
  );
};

export default Image;
