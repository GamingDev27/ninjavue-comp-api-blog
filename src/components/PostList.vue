<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
        <PostSingleView :post="post" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import PostSingleView from '@/components/PostSingleView.vue'

defineProps({
  posts: Array
})

</script>

<style>

</style>