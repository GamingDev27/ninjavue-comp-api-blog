<template>
    <div v-for="post in posts" :key="post.id">
        {{ post.title }}
    </div>
</template>

<script setup>
import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";


    const posts = ref([]);
    projectFirestore.collection("posts")
        .orderBy("createdAt", "desc")
        .onSnapshot((snap) => {
            posts.value = snap.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
        })

</script>

<style>

</style>