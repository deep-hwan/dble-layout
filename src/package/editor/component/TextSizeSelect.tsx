/** @jsxImportSource @emotion/react */

interface TextSizeSelectProps {
  textSize?: number;
  setTextSize: (size: number) => void;
  selectTextSizes: number[];
  primaryTextColor: string;
}

export const TextSizeSelect = ({ textSize, setTextSize, selectTextSizes, primaryTextColor }: TextSizeSelectProps) => {
  return (
    <select
      className='editor-text-size-selectbox'
      value={textSize}
      onChange={e => setTextSize(Number(e.target.value))}
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        minWidth: 30,
        maxWidth: 30,
        height: 30,
        minHeight: 30,
        maxHeight: 30,
        borderRadius: 10,
        border: '1px solid #e2e2e2',
        fontSize: `0.875rem`,
        lineHeight: 1.3,
        textAlign: 'center',
        appearance: 'none',
        outline: 'none',
        userSelect: 'none',
        cursor: 'pointer',
        marginRight: 5,
        color: primaryTextColor,
      }}
    >
      {selectTextSizes?.map(size => (
        <option className='editor-textSize-option-item' key={size} value={size}>
          {size}
        </option>
      ))}
    </select>
  );
};
