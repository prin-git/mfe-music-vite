import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  base: "http://mfe-princy-2.s3-website-us-east-1.amazonaws.com/detailPage",
 
  plugins: [
    react(),
    federation({
      name: "remote-detail",

      filename: "remoteDetail.js",
      remotes: {
        remoteComponents: "http://mfe-princy-2.s3-website-us-east-1.amazonaws.com/list/assets/remoteEntry.js",
      },
      exposes: {
        "./Detail": "./src/Detail",
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
