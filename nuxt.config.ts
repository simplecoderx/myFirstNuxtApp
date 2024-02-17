// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt Sample Title',
      meta: [{
        name: "description",
        content: "This is my first Nuxt application"
      }] 
    }
  },
  hooks: {
    ready: (ctx) => console.log(ctx),
  },
  alias: {
   /*  "@": resolve(__dirname, "/"), */
   assets: "/<rootDir>/assets",
  },
  modules: [
    '@nuxt/content',
    '@pinia/nuxt',
  ],
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
})
