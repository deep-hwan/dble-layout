import { BorderType } from "../types/piece/BorderType";
declare const borderStylesProps: (border: BorderType) => {
    border: string | undefined;
    borderBottom: string | undefined;
    borderTop: string | undefined;
    borderRight: string | undefined;
    borderLeft: string | undefined;
    borderRadius: string | number | undefined;
};
export { borderStylesProps };
