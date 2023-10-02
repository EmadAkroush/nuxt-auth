export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { public: { apiBase } } = useRuntimeConfig()
    // const { authUser } = useAuth();
    
    try {
        const data = await $fetch(`${apiBase}/login` , {
            method: 'POST',
            body: body,
            headers: {
                'accept': 'application/json',
            }
        })
      console.log("ggg" , data.data.token);
    //   authUser.value = data;

        setCookie(event, 'token', data.data.token, {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/'
        })

        return data.data.token;
    } catch (error) {
        return error
    }
})