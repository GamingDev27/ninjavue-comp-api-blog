<template>
  <div>
    <h3>{{ post.title }}</h3>
    <div>{{ snippet }}</div>
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
