/** @jsxImportSource @emotion/react */

import { ItalicIcon } from '../icons/italic-icon';

interface TextItalicTabProps {
  activeColor: string;
  isItalic: boolean;
  setIsItalic: (isItalic: boolean) => void;
}

export const TextItalicTab = ({ activeColor, isItalic, setIsItalic }: TextItalicTabProps) => {
  return (
    <div
      className='editor-text-italic-tab'
      onClick={() => setIsItalic(!isItalic)}
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
      <ItalicIcon fill={isItalic ? activeColor : '#CCCCCC'} />
    </div>
  );
};
