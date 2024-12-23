import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: 'src/package',
      outDir: 'dist/types',
      staticImport: true,
      insertTypesEntry: true,
    }),
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/package/index.tsx',
      name: 'test-t-package',
      fileName: format => `index.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
  },
});
