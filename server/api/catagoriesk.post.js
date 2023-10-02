export default defineEventHandler(async (event) => {
    const { public: { apiBase } } = useRuntimeConfig()
    const token = getCookie(event, 'token');

    try {
        const data = await $fetch(`${apiBase}/blog/catagories`, {
            method: 'POST',
            body : {
                name : "hjj",
                logo: "hhh"
            },
            headers: {
                'accept': 'application/json',
                'api_key': token
            },
         
        })
        console.log("fffffffffffffff");

        return data;
    } catch (error) {
        return error
    }
})