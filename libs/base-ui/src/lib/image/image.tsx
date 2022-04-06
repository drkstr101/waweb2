import NextImage, { ImageProps as NextImageProps } from 'next/image';

/* eslint-disable-next-line */
export interface ImageProps extends NextImageProps {}

export const Image = ({ className, src, ...props }: ImageProps) => {
  return (
    <div className={className}>
      <NextImage src={src} {...props} />
    </div>
  );
};

export default Image;
