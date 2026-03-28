// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $development: {
    devtools: { enabled: true },
  },
  $production: {
    devtools: { enabled: false },
  },

  vite: {
    css: {
      preprocessorMaxWorkers: true,
    },
  },
  css: ['~/assets/scss/style.scss'],

  app: {
    head: {
      title: 'kiNgchev Hub',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  modules: [
    '@nuxt/content',
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxtjs/tailwindcss',
  ],
  compatibilityDate: '2024-04-03',
})