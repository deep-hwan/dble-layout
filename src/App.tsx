import { useState } from 'react';
import { Layer } from './package';
import Editor from './package/editor/Editor';

export default function App() {
  const [write, setWrite] = useState('');

  const handleWrite = (content: string) => {
    console.log('Content updated:', content);
    setWrite(content);
  };

  return (
    <Layer
      as='section'
      flex={{ align: 'center', direction: 'column', gap: 20 }}
      background={{ fill: '#f6f7f0c' }}
      padding={{ all: 20 }}
    >
      <Editor onWrite={handleWrite} colorPalette={['#FC5E5E', '#5E9DFC', '#64C272']} />
      <div dangerouslySetInnerHTML={{ __html: write }} />

      <div>{write}</div>
    </Layer>
  );
}
