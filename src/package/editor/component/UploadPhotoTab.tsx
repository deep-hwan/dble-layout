/** @jsxImportSource @emotion/react */

import { PhotoIcon } from '../icons/photo-icon';

interface UploadPhotoTabProps {
  activeColor: string;
  onPhotoChange: (file: File) => void;
}

export const UploadPhotoTab = ({ activeColor, onPhotoChange }: UploadPhotoTabProps) => {
  return (
    <div
      className='editor-upload-photo-tab'
      onClick={() => document.getElementById('fileInput')?.click()}
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
      <PhotoIcon fill={'#CCCCCC'} />
      <input
        type='file'
        id='fileInput'
        accept='image/*'
        style={{ display: 'none' }}
        onChange={e => {
          const file = e.target.files?.[0];
          if (file) {
            onPhotoChange(file);
          }
        }}
      />
    </div>
  );
};
