/** @jsxImportSource @emotion/react */
import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import { BoldIcon } from './icons/bold-icon';
import { CheckedIcon } from './icons/checked-icon';
import { ItalicIcon } from './icons/italic-icon';
import { PhotoIcon } from './icons/photo-icon';
import { UploadIcon } from './icons/upload-icon';
import { UrlIcon } from './icons/url-icon';

type EditorProps = {
  editorProps?: HTMLAttributes<HTMLDivElement>;
  palette?: string[];
  primaryTextColor?: string;
  activeColor?: string;
};

export default function Editor({
  editorProps,
  palette,
  primaryTextColor = '#59595A',
  activeColor = '#59595a',
  ...props
}: EditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState(15);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUrl, setIsUrl] = useState(false);
  const [url, setUrl] = useState('');
  const [color, setColor] = useState('#59595A');

  const handleOnNowColor = (color: string) => {
    setColor(color);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tabsRef.current &&
        !tabsRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).classList.contains('editor-url-tab')
      ) {
        setIsUrl(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [tabsRef]);

  return (
    <div css={{ width: '100%', height: '100%' }}>
      <div
        ref={editorRef}
        contentEditable
        // onKeyDown={handleKeyDown}
        {...editorProps}
        css={{
          appearance: 'none',
          outline: 'none',
          border: 'none',
          width: '100%',
          height: '100%',
        }}
      />

      <div css={{ width: '100%', height: 1, background: '#eee', margin: '10px 0' }} />

      <Flex ref={tabsRef} gap={10} css={{ width: '100%', flexDirection: 'column' }}>
        <div
          className='editor-url-input'
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
                type='text'
                placeholder='url ...'
                value={url}
                onChange={e => setUrl(e.target.value)}
                css={{ width: '100%', height: '100%', appearance: 'none', outline: 'none', border: 'none' }}
              />

              <button
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

        <Flex gap={10} css={{ width: '100%', justifyContent: 'space-between' }}>
          <Flex className='editer-inputs' gap={2}>
            <input
              className='editor-textSize-input'
              type='text'
              placeholder='-'
              value={fontSize}
              onChange={e => {
                let value = Number(e.target.value.replace(/\D/g, ''));
                if (value > 80) value = 80;
                setFontSize(value);
              }}
              onBlur={() => {
                if (fontSize < 5) setFontSize(5);
              }}
              css={{
                ...boxSize(33),
                textAlign: 'center',
                outline: 'none',
                fontSize: '0.875rem',
                appearance: 'none',
                borderRadius: 10,
                border: '1px solid #E2E2E2',
                marginRight: 5,
              }}
            />

            <Tab className='editor-bold-tab' activeColor={activeColor} onClick={() => setIsBold(!isBold)}>
              <BoldIcon fill={isBold ? activeColor : '#CCCCCC'} />
            </Tab>

            <Tab className='editor-italic-tab' activeColor={activeColor} onClick={() => setIsItalic(!isItalic)}>
              <ItalicIcon fill={isItalic ? activeColor : '#CCCCCC'} />
            </Tab>

            <Tab
              className='editor-photo-tab'
              activeColor={activeColor}
              onClick={() => document.getElementById('fileInput')?.click()}
            >
              <PhotoIcon fill={'#CCCCCC'} />
              <input
                type='file'
                id='fileInput'
                accept='image/*'
                style={{ display: 'none' }}
                onChange={e => {
                  const file = e.target.files?.[0];
                  if (file) {
                    console.log('File uploaded:', file);
                  }
                }}
              />
            </Tab>

            <Tab className='editor-url-tab' activeColor={activeColor} onClick={() => setIsUrl(!isUrl)}>
              <UrlIcon fill={isUrl ? activeColor : '#CCCCCC'} />
            </Tab>
          </Flex>

          {!!palette && palette?.length > 0 && (
            <Flex className='editor-color-platte' gap={2}>
              {[primaryTextColor, ...(palette || [])]?.map(thisColor => (
                <div
                  className='editor-color-item'
                  css={{
                    padding: 4,
                    borderRadius: 1000,
                    backgroundColor: color === thisColor ? `${thisColor}22` : 'transparent',
                    transition: '0.25s ease-in-out',

                    '&:hover': {
                      backgroundColor: `${thisColor}33`,
                    },
                  }}
                >
                  <div
                    className='editor-color-picker'
                    css={{
                      ...boxSize(20),
                      background: thisColor,
                      borderRadius: 100,
                      cursor: 'pointer',
                    }}
                    onClick={() => handleOnNowColor(thisColor)}
                  >
                    {color === thisColor && <CheckedIcon />}
                  </div>
                </div>
              ))}
            </Flex>
          )}
        </Flex>
      </Flex>
    </div>
  );
}

const boxSize = (size: number) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    minWidth: size,
    maxWidth: size,
    height: size,
    minHeight: size,
    maxHeight: size,
  };
};

const Flex = React.forwardRef<HTMLDivElement, { gap?: number } & HTMLAttributes<HTMLDivElement>>(
  ({ children, gap = 6, ...props }, ref) => {
    return (
      <div {...props} ref={ref} css={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap }}>
        {children}
      </div>
    );
  },
);

const Tab = React.memo(
  ({ children, activeColor, ...props }: { activeColor?: string } & HTMLAttributes<HTMLDivElement>) => (
    <div
      css={{
        ...boxSize(30),
        cursor: 'pointer',
        transition: '0.25s ease-in-out',
        borderRadius: 10,
        '&:hover': { backgroundColor: `${activeColor}0D` },
      }}
      {...props}
    >
      {children}
    </div>
  ),
);
