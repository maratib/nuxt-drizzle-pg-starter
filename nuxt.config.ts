// https://nuxt.com/docs/api/configuration/nuxt-config
const isDev = process.env.NODE_ENV === 'development'
const ONE_DAY = 60 * 60 * 24 * 1000;
const ONE_WEEK = ONE_DAY * 7;

export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'en',
      },
      bodyAttrs: {
        class: isDev ? 'debug-screens' : ''
      },
      title: 'MySite',
      meta: [
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:site_name', content: 'MySite - Generic title' },
        { property: 'og:url', content: 'https://example.com/' },
        { name: 'description', content: 'description details' },


        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@nuxt_js' },
        { name: 'twitter:creator', content: '@nuxt_js' },
      ],

    },
  },
  typescript: {

  },
  css: ['~/assets/css/global.css'],
  modules: ['@nuxt/ui'],
  runtimeConfig: {
    cookieName: process.env.COOKIE_NAME || "__session",
    cookieSecret: process.env.COOKIE_SECRET || "secret",
    cookieExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_DAY.toString(), 10), // 1 day
    cookieRememberMeExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_WEEK.toString(), 10), // 7 days
  },
})
