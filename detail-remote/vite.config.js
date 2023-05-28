import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  base:'http://localhost:5011',
  plugins: [
    react(),

    federation({
      name:"remote-detail",
      filename:"remoteDetail.js",
      remotes:{
        remoteComponents: "http://localhost:5012/assets/remoteEntry.js",
      },
      exposes:{
        "./Detail":"./src/Detail",
      },
shared:["react", "react-dom"]
    })

  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
