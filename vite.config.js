import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'

export default ({ mode }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  console.log(`build mode: ${mode}`, env)

  return defineConfig({
    base: '/',
    plugins: [
      vue(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: 'Marie Polášková MSc.',
            description: 'The official website of Marie Polášková MSc.'
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
