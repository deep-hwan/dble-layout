import { TextElementType } from "../types";
import { TypographyType } from "../types/piece/TypographyType";
type Props = TypographyType & {
    as?: TextElementType;
};
declare const typographyStylesProps: ({ as, txtSize, txtWeight, txtAlign, txtColor, txtShadow, txtTransform, lineHeight, whiteSpace, ellipsis, txtDecoration, }: Props) => any;
export { typographyStylesProps };
