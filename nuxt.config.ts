// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiBase: 'https://api.hexarz.com/v1/api/manage/blogadmin'
        }
    },
    css: ['~/assets/css/main.css'],
    build: {
        transpile: ['vue-toastification'],
    },
})
