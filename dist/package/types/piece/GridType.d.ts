interface GridType {
    templateColumns?: string;
    templateRows?: string;
    templateAreas?: string;
    gap?: string | number;
    autoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
    autoColumns?: string;
    autoRows?: string;
    justifyItems?: 'start' | 'end' | 'center' | 'stretch';
    alignItems?: 'start' | 'end' | 'center' | 'stretch';
    justifyContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-between' | 'space-around';
    alignContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-between' | 'space-around';
}
export type { GridType };
