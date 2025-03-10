<script setup>
import { ref, defineComponent } from 'vue'
import PostList from '@/components/PostList.vue'

const posts = ref([
  { id: 1, title: 'Imperator Game', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, title: 'Rise of the Empire 2', body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 3, title: 'A New World 3', body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
])

defineComponent({
  PostList
})
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <div class="posts">
      <PostList :posts="posts" />
    </div>
  </div>
</template>
