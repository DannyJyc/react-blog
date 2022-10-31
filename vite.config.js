import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import styleImport from 'vite-plugin-style-import';

import url from 'url';
import path from 'path'
//声明变量__filename，__dirname会报错，改为__filename2，__dirname2
const __filename2 = url.fileURLToPath(import.meta.url);
const __dirname2 = path.dirname(__filename2);
console.log(__filename2);
console.log(__dirname2);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    styleImport({
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name) => {
            return `antd/es/${name}/style/index`;
          }
        }
      ],
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      }
    }
  },
  resolve: {
    //配置别名 @为src 引入
    alias: {
      '@': path.resolve(__dirname2, 'src')
    }
  }
})
