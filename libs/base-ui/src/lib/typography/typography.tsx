import clsx from 'clsx';
import { HtmlHTMLAttributes } from 'react';
import styles from './styles';

export type TypographyVariant = 'body' | 'heading' | 'detail' | 'code';
export type TypographyStyle = 'light' | 'strong' | 'heavy' | 'emphasized';
export type TypographyComponent =
  | 'div'
  | 'p'
  | 'span'
  | 'pre'
  | 'code'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export interface TypographyProps extends HtmlHTMLAttributes<HTMLDivElement> {
  component?: TypographyComponent;
  font?: TypographyStyle;
  serif?: boolean;
}

function Typography({ className, children, ...props }: TypographyProps) {
  console.log(styles);
  const Component = props.component ?? 'p';
  return <Component className={className}>{children}</Component>;
}

export interface HeadingProps extends Omit<TypographyProps, 'className'> {
  size?: 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
  variant?: 'heading' | 'display' | 'title' | 'subtitle1' | 'subtitle2' | 'subtitle3';
}

export function Heading(props: HeadingProps) {
  const { size = 'M', font = 'heavy', serif = true } = props;
  const className = clsx({
    [styles['spectrum-Heading']]: true,
    [styles['spectrum-Heading--emphasized']]: font === 'emphasized',
    [styles['spectrum-Heading--heavy']]: font === 'heavy',
    [styles['spectrum-Heading--strong']]: font === 'strong',
    [styles['spectrum-Heading--light']]: font === 'light',
    [styles['spectrum-Heading--serif']]: serif,
    [styles['spectrum-Heading--sizeXXS']]: size === 'XXS',
    [styles['spectrum-Heading--sizeXS']]: size === 'XS',
    [styles['spectrum-Heading--sizeS']]: size === 'S',
    [styles['spectrum-Heading--sizeM']]: size === 'M',
    [styles['spectrum-Heading--sizeL']]: size === 'L',
    [styles['spectrum-Heading--sizeXL']]: size === 'XL',
    [styles['spectrum-Heading--sizeXXL']]: size === 'XXL',
    [styles['spectrum-Heading--sizeXXXL']]: size === 'XXXL',
    [styles['spectrum-Typography']]: true
  });

  return <Typography className={className} {...props} />;
}

export interface BodyProps extends Omit<TypographyProps, 'className'> {
  size?: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
}

export function Body(props: BodyProps) {
  const { size = 'M', serif = false } = props;
  const className = clsx({
    [styles['spectrum-Typography']]: true,
    [styles['spectrum-Body']]: true,
    [styles['spectrum-Body--serif']]: serif,
    [styles['spectrum-Body--sizeL']]: size === 'L',
    [styles['spectrum-Body--sizeM']]: size === 'M',
    [styles['spectrum-Body--sizeXS']]: size === 'XS',
    [styles['spectrum-Body--sizeS']]: size === 'S',
    [styles['spectrum-Body--sizeXL']]: size === 'XL',
    [styles['spectrum-Body--sizeXXL']]: size === 'XXL',
    [styles['spectrum-Body--sizeXXXL']]: size === 'XXXL'
  });

  return <Typography className={className} {...props} />;
}

export interface DetailProps extends Omit<TypographyProps, 'className'> {
  size?: 'S' | 'M' | 'L' | 'XL';
}

export function Detail(props: DetailProps) {
  const { size = 'N', font, serif = false } = props;
  const className = clsx({
    [styles['spectrum-Typography']]: true,
    [styles['spectrum-Detail']]: true,
    [styles['spectrum-Detail--emphasized']]: font === 'emphasized',
    [styles['spectrum-Detail--light']]: font === 'light',
    [styles['spectrum-Detail--strong']]: font === 'strong',
    [styles['spectrum-Detail--serif']]: serif,
    [styles['spectrum-Detail--sizeS']]: size === 'S',
    [styles['spectrum-Detail--sizeM']]: size === 'M',
    [styles['spectrum-Detail--sizeL']]: size === 'L',
    [styles['spectrum-Detail--sizeXL']]: size === 'XL'
  });

  return <Typography className={className} {...props} />;
}

export interface CodeProps extends Omit<TypographyProps, 'className'> {
  size?: 'XS' | 'S' | 'M' | 'L' | 'XL';
}

export function Code(props: CodeProps) {
  const { size = 'N', serif = false } = props;
  const className = clsx({
    [styles['spectrum-Typography']]: true,
    [styles['spectrum-Code']]: true,
    [styles['spectrum-Code--serif']]: serif,
    [styles['spectrum-Code--sizeXS']]: size === 'XS',
    [styles['spectrum-Code--sizeS']]: size === 'S',
    [styles['spectrum-Code--sizeL']]: size === 'L',
    [styles['spectrum-Code--sizeM']]: size === 'M',
    [styles['spectrum-Code--sizeXL']]: size === 'XL'
  });

  return <Typography className={className} {...props} />;
}
