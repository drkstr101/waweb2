import { BlockHeight, BlockWidth, FlexDirection } from '../types/layout';

export function mapMinHeightStyles(height: BlockHeight) {
  switch (height) {
    case BlockHeight.auto:
      return 'min-h-0';
    case BlockHeight.screen:
      return 'min-h-screen';
    default:
      return null;
  }
}

export function mapMaxWidthStyles(width: BlockWidth) {
  switch (width) {
    case BlockWidth.narrow:
      return 'max-w-screen-md';
    case BlockWidth.wide:
      return 'max-w-screen-xl';
    case BlockWidth.full:
      return 'max-w-full';
    default:
      return null;
  }
}

export function mapFlexDirectionStyles(flexDirection: FlexDirection) {
  switch (flexDirection) {
    case FlexDirection.row:
      return ['flex-col', 'lg:flex-row'];
    case FlexDirection['row-reverse']:
      return ['flex-col-reverse', 'lg:flex-row-reverse'];
    case FlexDirection['col']:
      return ['flex-col'];
    case FlexDirection['col-reverse']:
      return ['flex-col-reverse'];
    default:
      return null;
  }
}
