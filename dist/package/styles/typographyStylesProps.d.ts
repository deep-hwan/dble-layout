import { TypographyType } from "../types/piece/TypographyType";
import { TextElementType } from "../types/props/TextPropsType";
type Props = TypographyType & {
    as?: TextElementType;
};
declare const typographyStylesProps: ({ as, txtSize, txtWeight, txtAlign, txtColor, txtShadow, txtTransform, lineHeight, whiteSpace, ellipsis, txtDecoration, }: Props) => any;
export { typographyStylesProps };
