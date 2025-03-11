<script setup>
import {defineComponent, onMounted } from 'vue'
import PostList from '@/components/PostList.vue'
import {getPosts} from '@/composables/getPosts'
import Spinner from '@/components/Spinner.vue'

const {posts, error, load} = getPosts()

defineComponent({
  PostList,
  Spinner
})

onMounted(() => {
  load()
})

</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <router-link :to="{name: 'post-create'}">Create a Post</router-link>
    <div v-if="error">Error: {{ error }}</div>

    <div v-else-if="!posts.length"><Spinner /></div>
    <div v-else>
      <div class="posts">
        <PostList :posts="posts" />
      </div>
    </div>

  </div>
</template>
