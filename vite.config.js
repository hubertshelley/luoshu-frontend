import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '~/': `${path.resolve(__dirname, 'src')}/`,
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "~/styles/index.scss" as *;`,
            },
        },
    },
    plugins: [vue(), AutoImport({
        resolvers: [ElementPlusResolver()],
    }), Components({
        resolvers: [ElementPlusResolver()],
    }),], server: {
        proxy: {
            // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
            '/api': {
                target: 'http://127.0.0.1:19999/api', changeOrigin: true,
            },
        },
    },
})
