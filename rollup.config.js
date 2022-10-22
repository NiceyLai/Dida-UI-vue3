// 请先安装 rollup-plugin-esbuild rollup-plugin-vue rollup-plugin-scss sass rollup-plugin-terser
import esbuild from "rollup-plugin-esbuild";
import vue from "'@vitejs/plugin-vue";
import scss from "rollup-plugin-scss";
import dartSass from "sass";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/lib/index.ts",
  output: {
    globals: {
      vue: "Vue",
    },
    name: "Dida",
    file: "dist/lib/dida.js",
    format: "umd",
    plugins: [terser()],
  },
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === "production",
      target: "es2015",
    }),
    vue({
      include: /\.vue$/,
    }),
  ],
};
