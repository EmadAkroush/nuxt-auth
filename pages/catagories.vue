<template lang="">
      <div class="container mt-5">
        <div class="row">
        
        <button type="button" class="btn btn-primary" @click="createCategory" >create the catagories</button>
        <input type="text" v-model="formData.name" class="form-control" id="email" />
        <input type="text" v-model="formData.logo" class="form-control" id="email" />
            <div class="col-md-12 ">
                list of catagories
                <ul class="list-group" v-for="item in data.data.catagories">
                    <li class="list-group-item">name : {{item.name}}  , logo :  {{item.logo}}  ,
                        createdAt :  {{item.createdAt}}  ,  updatedAt :  {{item.updatedAt}} </li>
                    
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
const { data } = await useFetch('/api/catagories', {
    headers 
})
let formData = reactive({
    name: "",
    logo: ""
   
});

 async  function createCategory(){
    const { data } = await $fetch('/api/catagoriesk', {
    method: 'POST',   
    body: {
        name: "bbb",
        logo: "hhhh"
    } ,
    headers,

})
console.log("hhhhhhhhhh" , data );
}


</script>
<style lang="">
    
</style>