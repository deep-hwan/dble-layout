import { TxtElementType } from '../types';
import { TypographyType } from '../types/piece/TypographyType';
type Props = TypographyType & {
    as?: TxtElementType;
};
declare const typographyStylesProps: ({ as, txtSize, txtWeight, txtAlign, txtColor, txtShadow, txtTransform, lineHeight, whiteSpace, ellipsis, txtDecoration, }: Props) => any;
export { typographyStylesProps };
