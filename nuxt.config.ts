import { setAbsoluteSqliteDatabaseUrlForPrisma } from './prisma/utils'

setAbsoluteSqliteDatabaseUrlForPrisma()

export default defineNuxtConfig({
  runtimeConfig: {
    version: '0.0.1'
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', '@huntersofbook/naive-ui-nuxt', '@sidebase/nuxt-auth'],
  extends: ['@sidebase/core'],
  typescript: {
    shim: false
  },
  auth: {
    globalAppMiddleware: true,
    provider: {
      type: 'authjs',
      trustHost: false,
      defaultProvider: 'github',
      addDefaultCallbackUrl: true
    }
  }
})
