<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12 ">
                <ul class="list-group">
                    <li class="list-group-item active" aria-current="true">users: {{ data.data.users }}</li>
                    <li class="list-group-item">catas: {{ data.data.catas }} </li>
                    <li class="list-group-item">posts: {{ data.data.posts }} </li>
                    <li class="list-group-item">news: {{ data.data.news }} </li>

                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: 'auth'
})

const headers = useRequestHeaders(['cookie']);
const { data } = await useFetch('/api/dashboard', {
    headers
})
 console.log(headers , "headers");

</script>