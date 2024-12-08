interface PositionTypes {
  type?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
}

export type { PositionTypes };
