export default defineEventHandler(async (event) => {
    const { public: { apiBase } } = useRuntimeConfig()
    const token = getCookie(event, 'token');

    try {
        const data = await $fetch(`${apiBase}/blog/posts?page=1&limit=10`, {
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