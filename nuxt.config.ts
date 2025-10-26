import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  ssr: process.env.NUXT_PUBLIC_NODE_ENV === 'production' ? true : false,

  runtimeConfig: {
    public: {
      baseUrl: 'https://agenciaby.com',
      environment: 'preview'
    }
  },

  css: ['~/assets/css/main.css'],

  modules: [
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_TOKEN }],
    '@nuxt/eslint', 
    '@nuxt/image'
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  image: process.env.NUXT_PUBLIC_NODE_ENV === 'production' ? {
    provider: 'netlify',
    domains: ['a.storyblok.com']
  } : {
    provider: 'storyblok',
    storyblok: {
      baseURL: 'https://a.storyblok.com'
    }
  },
})