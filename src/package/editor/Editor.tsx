/** @jsxImportSource @emotion/react */
import React, { BlockquoteHTMLAttributes, HTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { ColorPalette } from './component/ColorPalette';
import { TextBoldTab } from './component/TextBoldTab';
import { TextItalicTab } from './component/TextItalicTab';
import { TextSizeSelect } from './component/TextSizeSelect';
import { TextUrlTab, UrlInput } from './component/TextUrlTab';
import { UploadPhotoTab } from './component/UploadPhotoTab';

interface EditorProps extends BlockquoteHTMLAttributes<HTMLQuoteElement> {
  selectTextSizes?: number[];
  primaryTextSize?: number;
  primaryTextColor?: string;

  colorPalette?: string[];

  activeColor?: string;

  onWrite: (content: any) => void;
}

export default function Editor({
  selectTextSizes = [12, 14, 15, 18, 26],
  primaryTextSize = 15,
  primaryTextColor = '#59595A',

  colorPalette,

  activeColor = '#59595a',
  onWrite,
  ...props
}: EditorProps) {
  const [write, setWrite] = useState<string>('');

  const editorRef = useRef<HTMLQuoteElement>(null);
  const toolContainerRef = useRef<HTMLDivElement>(null);

  const [textSize, setTextSize] = useState<number>(
    typeof primaryTextSize === 'number' && !isNaN(primaryTextSize) ? primaryTextSize : 15,
  );
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUrl, setIsUrl] = useState(false);
  const [url, setUrl] = useState('');
  const [color, setColor] = useState('#59595A');
  const [isComposing, setIsComposing] = useState(false);

  const handleOnNowColor = (color: string) => setColor(color);

  //
  //
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        toolContainerRef.current &&
        !toolContainerRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).classList.contains('editor-url-tab')
      )
        setIsUrl(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [toolContainerRef]);

  //
  //
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.focus();
      editorRef.current.innerHTML = write;
    }
  }, []);

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionUpdate = () => {
    if (editorRef.current) {
      const content = editorRef.current.innerHTML;
      onWrite(content);
    }
  };

  const handleCompositionEnd = () => {
    setIsComposing(false);
    handleInput();
  };

  const handleInput = useCallback(() => {
    if (editorRef.current && !isComposing) {
      const selection = window.getSelection();
      const range = selection?.getRangeAt(0);
      const parentElement = range?.startContainer.parentElement;

      // If the parent element is not a <p> or is the editor itself, wrap the text in a <p>
      if (parentElement === editorRef.current || parentElement?.tagName !== 'P') {
        const p = document.createElement('p');
        p.style.fontSize = `${textSize}px`;
        p.style.margin = '0';

        // Collect all text nodes and wrap them in a <p>
        const textNodes = Array.from(editorRef.current.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);

        textNodes.forEach(node => {
          const newP = p.cloneNode() as HTMLParagraphElement;
          newP.textContent = node.textContent;
          node.parentNode?.replaceChild(newP, node);
        });

        // If there are no text nodes, ensure the current text is wrapped
        if (textNodes.length === 0 && range?.startContainer.nodeType === Node.TEXT_NODE) {
          const textContent = range.startContainer.textContent || '';
          p.textContent = textContent;
          range.startContainer.parentNode?.replaceChild(p, range.startContainer);
        }

        // Restore cursor position
        const newRange = document.createRange();
        newRange.setStart(p.firstChild!, p.firstChild?.textContent?.length || 0);
        newRange.collapse(true);
        selection?.removeAllRanges();
        selection?.addRange(newRange);
      }

      // Update content
      const content = editorRef.current.innerHTML;
      onWrite(content);
    }
  }, [onWrite, textSize, isComposing]);

  const applyFontSizeToNewText = () => {
    // if (editorRef.current) {
    //   const selection = window.getSelection();
    //   if (selection && selection.rangeCount > 0) {
    //     const range = selection.getRangeAt(0);
    //     const parentElement = range.startContainer.parentElement;
    //     // Check if the selection is collapsed and within a <div> with the same fontSize
    //     if (selection.isCollapsed && parentElement && parentElement.style.fontSize === `${textSize}px`) {
    //       // Append the new text to the existing <div>
    //       const newTextNode = document.createTextNode(selection.toString());
    //       range.insertNode(newTextNode);
    //       range.setStartAfter(newTextNode);
    //       range.collapse(true);
    //     } else {
    //       // Create a new <div> with the specified fontSize
    //       const selectedText = range.extractContents();
    //       const newDiv = document.createElement('div');
    //       newDiv.style.fontSize = `${textSize}px`;
    //       newDiv.appendChild(selectedText);
    //       range.insertNode(newDiv);
    //       range.setStartAfter(newDiv);
    //       range.collapse(true);
    //     }
    //     selection.removeAllRanges();
    //     selection.addRange(range);
    //   }
    // }
  };

  // useEffect(() => {
  //   document.addEventListener('input', applyFontSizeToNewText);
  //   return () => {
  //     document.removeEventListener('input', applyFontSizeToNewText);
  //   };
  // }, [textSize]);

  return (
    <div css={{ width: '100%', height: '100%' }}>
      <EditorInput
        ref={editorRef}
        onInput={handleInput}
        onCompositionStart={handleCompositionStart}
        onCompositionUpdate={handleCompositionUpdate}
        onCompositionEnd={handleCompositionEnd}
        contentEditable
        suppressContentEditableWarning
        {...props}
      />

      <Divider />

      <Flex
        className='editor-tool-container'
        ref={toolContainerRef}
        gap={10}
        css={{ width: '100%', flexDirection: 'column' }}
      >
        <UrlInput activeColor={activeColor} isUrl={isUrl} value={url} onChange={e => setUrl(e.target.value)} />

        <Flex className='editor-tool-tabs' gap={10} css={{ width: '100%', justifyContent: 'space-between' }}>
          <Flex className='editer-tools' gap={2}>
            <TextSizeSelect
              textSize={textSize}
              setTextSize={setTextSize}
              selectTextSizes={selectTextSizes}
              primaryTextColor={primaryTextColor}
            />

            <TextBoldTab activeColor={activeColor} isBold={isBold} setIsBold={setIsBold} />

            <TextItalicTab activeColor={activeColor} isItalic={isItalic} setIsItalic={setIsItalic} />

            <UploadPhotoTab activeColor={activeColor} onPhotoChange={file => console.log('file', file)} />

            <TextUrlTab activeColor={activeColor} isUrl={isUrl} setIsUrl={setIsUrl} />
          </Flex>

          <ColorPalette
            colorPalette={colorPalette}
            primaryTextColor={primaryTextColor}
            color={color}
            handleOnNowColor={handleOnNowColor}
          />
        </Flex>
      </Flex>
    </div>
  );
}

const Flex = React.forwardRef<HTMLDivElement, { gap?: number } & HTMLAttributes<HTMLDivElement>>(
  ({ children, gap = 6, ...props }, ref) => {
    return (
      <div {...props} ref={ref} css={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap }}>
        {children}
      </div>
    );
  },
);

const Divider = () => <div css={{ width: '100%', height: 1, background: '#eee', margin: '10px 0' }} />;

const EditorInput = React.forwardRef<HTMLQuoteElement, BlockquoteHTMLAttributes<HTMLQuoteElement>>((props, ref) => {
  return (
    <blockquote
      className='editor'
      ref={ref}
      translate='no'
      {...props}
      css={{
        minHeight: 30,
        appearance: 'none',
        outline: 'none',
        border: 'none',
        width: '100%',
        height: '100%',
        '&:empty:before': {
          content: 'attr(placeholder)',
          color: '#999',
        },
      }}
    />
  );
});
