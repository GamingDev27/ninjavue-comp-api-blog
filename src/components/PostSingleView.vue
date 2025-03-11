<template>
  <div>
    <router-link :to="{ name: 'post-details', params: { id: post.id }}">
      <h3>{{ post.title }}</h3>
    </router-link>  
    <div>{{ snippet }}</div>
    <span v-for="tag in post.tags" :key="tag"> #{{ tag }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  post: Object,
})

const snippet = computed(() => {
  return props.post.body.substring(0, 100)
})
</script>

<style></style>
