import { md } from "./plugins/md";
import { demo } from "./plugins/demo";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    assetsDir: "assets",
  },
  plugins: [vue(), demo(), md()],
});
