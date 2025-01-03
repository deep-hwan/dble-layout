import * as path from "path";
import visualizer from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/package/index.tsx"),
      name: "DbleTest",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
      plugins: [
        visualizer({
          filename: "stats.html",
          template: "treemap",
        }),
      ],
    },
    minify: "esbuild",

    commonjsOptions: {
      esmExternals: ["react"],
    },

    sourcemap: true,
  },

  plugins: [
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
});
