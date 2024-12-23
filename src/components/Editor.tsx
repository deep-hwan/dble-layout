import React, { useRef, useState } from 'react';

const Editor = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isBold, setIsBold] = useState(false);
  const [isH1, setIsH1] = useState(false);
  const [isH2, setIsH2] = useState(false);
  const [isUrl, setIsUrl] = useState(false);
  const [url, setUrl] = useState('');
  const [color, setColor] = useState('#59595a');

  const toggleBold = () => {
    setIsBold(!isBold);
    document.execCommand('bold', false, '');
  };

  const toggleH1 = () => {
    setIsH1(!isH1);
    document.execCommand('formatBlock', false, isH1 ? 'p' : 'h1');
  };

  const toggleH2 = () => {
    setIsH2(!isH2);
    document.execCommand('formatBlock', false, isH2 ? 'p' : 'h2');
  };

  const toggleUrl = () => {
    setIsUrl(!isUrl);
    if (isUrl && url) {
      document.execCommand('createLink', false, url);
    } else {
      document.execCommand('unlink', false);
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(e.target.value);
    document.execCommand('foreColor', false, e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      // Reset styles on new line
      setIsBold(false);
      setIsH1(false);
      setIsH2(false);
      setIsUrl(false);
      setColor('#59595a');
    }
  };

  return (
    <div>
      <div>
        <button onClick={toggleBold}>{isBold ? 'Unbold' : 'Bold'}</button>
        <button onClick={toggleH1}>{isH1 ? 'Un-H1' : 'H1'}</button>
        <button onClick={toggleH2}>{isH2 ? 'Un-H2' : 'H2'}</button>
        <button onClick={toggleUrl}>{isUrl ? 'Remove URL' : 'Add URL'}</button>
        {isUrl && <input type='text' value={url} onChange={handleUrlChange} placeholder='Enter URL' />}
        <select value={color} onChange={handleColorChange}>
          <option value='#59595a'>Default</option>
          <option value='red'>Red</option>
          <option value='blue'>Blue</option>
          <option value='green'>Green</option>
        </select>
      </div>
      <div
        ref={editorRef}
        contentEditable
        style={{ border: '1px solid #ccc', padding: '10px', minHeight: '200px' }}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Editor;
