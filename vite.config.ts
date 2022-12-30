import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import pugPlugin from "vite-plugin-pug"
import pug from 'vite-plugin-pug'

const pugPluginOptions = {
    // pretty: true, // FIXME: pug pretty is deprecated!
}

const locals = {
    name: "My Pug",
}
const pugLocals: any = {
    reload: true,
    root: null,
    filters: {},
    data: '*.json',
    globals: {
        template: 'path/to/template.pug'
    },
    filetypes: {
        html: /.(json.html|pug.json.html|pug.html)$/,
        json: /.(json.pug.html)$/,
    },
    pug: {}
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        pugPlugin(pugPluginOptions, locals),
        pug(pugLocals),
    ],
})
