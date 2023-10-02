export default defineEventHandler(async (event) => {
    const { public: { apiBase } } = useRuntimeConfig()
    const token = getCookie(event, 'token');

    try {
        const data = await $fetch(`${apiBase}/blog/catagories?page=1&limit=10`, {
            headers: {
                'accept': 'application/json',
                'api_key': token
            }
        })
        return data;
    } catch (error) {
        return error
    }
})