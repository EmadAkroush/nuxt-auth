export default defineEventHandler(async (event) => {
    const { public: { apiBase } } = useRuntimeConfig()
    const token = getCookie(event, 'token');
     console.log("hjhjh" , token);
    try {
        const data = await $fetch(`${apiBase}/token/refresh`, {
            body : {
                
             'refreshtoken': token
                
            },
            headers: {
                'accept': 'application/json'
            }
        })

        return data.data.token;
    } catch (error) {
        
            setCookie(event, 'token', '', {
                httpOnly: true,
                secure: true,
                maxAge: new Date(0),
                path: '/'
            })
       

        return error
    }
})