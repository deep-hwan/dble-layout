/** @jsxImportSource @emotion/react */

import { CheckedIcon } from '../icons/checked-icon';

interface ColorPaletteProps {
  colorPalette?: string[];
  primaryTextColor: string;
  color: string;
  handleOnNowColor: (color: string) => void;
}

const ColorPalette = ({ colorPalette, primaryTextColor, color, handleOnNowColor }: ColorPaletteProps) => {
  if (!!colorPalette && colorPalette?.length > 0)
    return (
      <div className='editor-color-platte' css={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 4 }}>
        {[primaryTextColor, ...(colorPalette || [])]?.map(thisColor => (
          <div
            key={thisColor}
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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 20,
                minWidth: 20,
                maxWidth: 20,
                height: 20,
                minHeight: 20,
                maxHeight: 20,
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
      </div>
    );
};

export { ColorPalette };
