// https://nuxt.com/docs/api/configuration/nuxt-config
const isDev = import.meta.env.DEV

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
      title: 'MyOme',
      meta: [
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:site_name', content: 'MyOme - Harnessing the True Power of Genetics' },
        { property: 'og:url', content: 'https://myome.com/' },
        { name: 'description', content: 'whole genome sequencing, proactive health, personal genome, pharmcogenomics, genetics, wgs, Early detection, Disease prevention,Medication management. Early Detection Medication Management Clinically Relevant.Whole Genome. We provide a more complete picture of your disease risk through clinical-grade whole genome sequencing (30x coverage) and analysis–10 times more information than other tests–including rare and common variants and structural alterations. Genetic Information for Every Stage of Your Life. Your genetic testing needs change over time' },


        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@nuxt_js' },
        { name: 'twitter:creator', content: '@nuxt_js' },
      ],

    },
  },
  css: ['~/assets/css/styles.css'],
  modules: ['@nuxtjs/tailwindcss'],
})
