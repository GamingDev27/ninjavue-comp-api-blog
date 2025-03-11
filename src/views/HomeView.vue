<script setup>
import {defineComponent, onMounted } from 'vue'
import PostList from '@/components/PostList.vue'
import {getPosts} from '@/composables/getPosts'
import Spinner from '@/components/Spinner.vue'
import TagCloud from '@/components/TagCloud.vue'
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
    
    <div v-if="error">Error: {{ error }}</div>

    <div v-else-if="!posts.length"><Spinner /></div>
    <div v-else>
      <div class="posts-list">
        <PostList :posts="posts" />
        <TagCloud :posts="posts" />
      </div>
    </div>

  </div>
</template>

<style scoped>
  .home {
    max-width: 1800px !important;
    margin: 0 auto;
    padding: 40px;
  }
  .posts-list {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>