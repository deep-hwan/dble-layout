interface BorderType {
  border?: {
    stroke: number;
    position: 'all' | 'left' | 'right' | 'top' | 'bottom';
    color: string;
    shape?: 'solid' | 'dotted' | 'dashed' | 'double' | 'outset' | 'inset' | 'groove' | 'ridge';
  };
  borderRadius?: number | string;
}

export type { BorderType };
