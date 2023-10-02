<template>
    <div class="container mt-5">
        <NuxtLink class="nav-link" activeClass="active" to="./createPost">
        <button type="button" class="btn btn-primary" >create the post</button></NuxtLink>
        <div class="row gy-4">
            <div v-for="post in Posts.data.Posts"  class="col-md-4">
                <div class="card">
                    <img :src="post.banner" class="img-fluid" alt="Responsive image">
                    <div class="card-header">
                        {{ post.title }}
                    </div>
                    <div class="card-body">
                        <p class="card-text">{{ post.description }}</p>
                    </div>
                </div>
            </div>
        </div>

        
     
    </div>
</template>

<script setup>

definePageMeta({
    middleware: 'auth'
})

const headers = useRequestHeaders(['cookie']);
const { data : Posts } = await useFetch('/api/posts', {
    headers
})
 console.log(Posts.value , "post");

</script>
