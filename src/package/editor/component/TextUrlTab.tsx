/** @jsxImportSource @emotion/react */

import { InputHTMLAttributes } from 'react';
import { UploadIcon } from '../icons/upload-icon';
import { UrlIcon } from '../icons/url-icon';

interface TextUrlTabProps {
  activeColor: string;
  isUrl: boolean;
  setIsUrl: (isUrl: boolean) => void;
}

const TextUrlTab = ({ activeColor, isUrl, setIsUrl }: TextUrlTabProps) => {
  return (
    <div
      className='editor-url-tab'
      onClick={() => setIsUrl(!isUrl)}
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
      <UrlIcon fill={isUrl ? activeColor : '#CCCCCC'} />
    </div>
  );
};

//
// urlInput
interface UrlInputProps extends InputHTMLAttributes<HTMLInputElement> {
  activeColor: string;
  isUrl: boolean;
}

const UrlInput = ({ activeColor, isUrl, ...props }: UrlInputProps) => {
  return (
    <div
      className='editor-url-input-container'
      css={{
        width: '100%',
        height: isUrl ? 44 : 0,
        borderRadius: 13,
        padding: '0 12px',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        overflow: 'hidden',
        transition: '0.2s ease-in-out',
        boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.14)',
      }}
    >
      {isUrl && (
        <>
          <input
            className='editor-url-input'
            type='text'
            placeholder='url ...'
            css={{ width: '100%', height: '100%', appearance: 'none', outline: 'none', border: 'none' }}
            {...props}
          />

          <button
            className='editor-url-input-button'
            css={{
              border: 'none',
              outline: 'none',
              whiteSpace: 'nowrap',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <UploadIcon fill={`${activeColor}E6`} />
          </button>
        </>
      )}
    </div>
  );
};

export { TextUrlTab, UrlInput };
