import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'resolve-sub-project-alias',
      enforce: 'pre',
      resolveId(source, importer) {
        if (source.startsWith('@/')) {
          if (!importer) return null;
          
          // Find the nearest 'src' directory by walking up from the importer
          let currentDir = path.dirname(importer);
          while (currentDir.includes('Topview_Landing_Page')) {
            const srcDir = path.join(currentDir, 'src');
            if (fs.existsSync(srcDir)) {
              const subPath = source.substring(2); // remove '@/'
              const targetPath = path.join(srcDir, subPath);
              
              // Try to find the file with extensions
              for (const ext of ['.tsx', '.ts', '.jsx', '.js']) {
                if (fs.existsSync(targetPath + ext)) {
                    return targetPath + ext;
                }
                if (fs.existsSync(path.join(targetPath, 'index' + ext))) {
                    return path.join(targetPath, 'index' + ext);
                }
              }
              return null;
            }
            const parent = path.dirname(currentDir);
            if (parent === currentDir) break;
            currentDir = parent;
          }
        }
        return null;
      }
    }
  ],
  server: {
    port: 3000,
    host: true,
    fs: {
      allow: ['..']
    }
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    },
  },
});
