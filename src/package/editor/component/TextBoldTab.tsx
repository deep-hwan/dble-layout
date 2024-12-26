/** @jsxImportSource @emotion/react */

import { BoldIcon } from '../icons/bold-icon';

interface TextBoldTabProps {
  activeColor: string;
  isBold: boolean;
  setIsBold: (isBold: boolean) => void;
}

export const TextBoldTab = ({ activeColor, isBold, setIsBold }: TextBoldTabProps) => {
  return (
    <div
      className='editor-text-bold-tab'
      onClick={() => setIsBold(!isBold)}
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
        cursor: 'pointer',
        transition: '0.25s ease-in-out',
        borderRadius: 10,
        '&:hover': { backgroundColor: `${activeColor}0D` },
      }}
    >
      <BoldIcon fill={isBold ? activeColor : '#CCCCCC'} />
    </div>
  );
};
