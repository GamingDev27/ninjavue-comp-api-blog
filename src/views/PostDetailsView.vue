<template>
  Details
  <div v-if="!post"><Spinner /></div>
  <div v-else>
    <h3>{{post.title}}</h3>
    <p>{{post.body}}</p>
  </div>
 
 
</template>

<script setup>
import { defineComponent, defineProps, onMounted } from 'vue'
import { getPost } from '@/composables/getPost'
import Spinner from '@/components/Spinner.vue'

let props = defineProps({
  id: Number
})

defineComponent({
  Spinner
})

let {post, load} = getPost(props.id)

onMounted(() => {
  load()
})

</script>

<style>
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
</style>