export default defineEventHandler(async (event) => {
    const { public: { apiBase } } = useRuntimeConfig()
    const token = getCookie(event, 'token');
     
    try {
        const data = await $fetch(`${apiBase}/blog/logout`, {
            method: 'DELETE',
            headers: {
                'accept': 'application/json',
                'api_key': token
            }
        })

        setCookie(event, 'token', '', {
            httpOnly: true,
            secure: true,
            maxAge: new Date(0),
            path: '/'
        })

        return data;
    } catch (error) {
        return error
    }
})