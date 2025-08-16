import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  publicDir: "public",
  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.jpg') || assetInfo.name && assetInfo.name.endsWith('.jpeg') || assetInfo.name && assetInfo.name.endsWith('.png')) {
            return 'assets/[name].[ext]';
          }
          return 'assets/[name]-[hash].[ext]';
        },
      },
    },
  },
});
