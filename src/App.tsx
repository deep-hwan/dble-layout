import { Layer } from './package';
import Editor from './package/editor/Editor';

export default function App() {
  return (
    <Layer
      as='section'
      flex={{ align: 'center', direction: 'column', gap: 20 }}
      background={{ fill: '#f6f7f0c' }}
      padding={{ all: 20 }}
    >
      <Editor palette={['#FC5E5E', '#5E9DFC', '#64C272']} />
    </Layer>
  );
}
