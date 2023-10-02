
import { EmailEditor } from 'vue-email-editor';


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(EmailEditor);
});