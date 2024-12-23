import { renderToString } from 'react-dom/server';
import App from './App';

export function render(url: string, context: any) {
  return renderToString(<App />);
}
