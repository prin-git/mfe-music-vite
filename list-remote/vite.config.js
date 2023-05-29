import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  base: "http://mfe-remote-list.s3-website-us-east-1.amazonaws.com",
  plugins: [
    react(),

    federation({
      name: "remote-app",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/Header",
        "./MusicList": "./src/MusicList",
        "./store": "./src/store",
      },
      shared: ["react", "react-dom", "jotai"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
