import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'

export default ({ mode }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  console.log(`build mode: ${mode}`, env)

  return defineConfig({
    base: mode === 'development' ? '/' : '/mariepolaskova',
    plugins: [
      vue(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: 'ProjectName',
            description: 'A single page application created using Vue.js 3'
          }
        }
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, '/src'),
        '~bootstrap': 'bootstrap'
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/scss/variables";`
        }
      }
    },
    esbuild: {},
    build: {
      target: mode === 'development' ? 'modules' : 'es2015',
      sourcemap: mode === 'development'
    }
  })
}
