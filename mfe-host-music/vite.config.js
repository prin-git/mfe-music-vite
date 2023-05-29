import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "hostApp",
      remotes: {
        remoteComponents: "http://mfe-remote-list.s3-website-us-east-1.amazonaws.com/assets/remoteEntry.js",
        remoteDetail: "http://mfe-detail-remote.s3-website-us-east-1.amazonaws.com/assets/remoteDetail.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
