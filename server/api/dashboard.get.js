export default defineEventHandler(async (event) => {
    const { public: { apiBase } } = useRuntimeConfig()
    const token = getCookie(event, 'token');

    try {
        const data = await $fetch(`${apiBase}/blog/dashboard`, {
            headers: {
                'Accept': 'application/json',
                'api_key': token
            }
        })

        return data;
    } catch (error) {
        return error
    }
})