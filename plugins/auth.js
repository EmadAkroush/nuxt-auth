export default defineNuxtPlugin(async (nuxtApp) => {
    const { authUser } = useAuth();

    const headers = useRequestHeaders(['cookie']);
    authUser.value = headers;

    

    // try {
    //      const data = await $fetch ('/api/auth/login', {
    //         headers
    //      })

    //      authUser.value = data.data.token;
    // } catch (error) {
    //     authUser.value = null;
    // }
})