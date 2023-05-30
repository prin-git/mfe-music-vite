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
        remoteComponents: "http://mfe-princy-2.s3-website-us-east-1.amazonaws.com/list/assets/remoteEntry.js",
        remoteDetail: "http://mfe-princy-2.s3-website-us-east-1.amazonaws.com/detailPage/assets/remoteDetail.js",
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
