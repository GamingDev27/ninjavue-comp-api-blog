<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="!post"><Spinner /></div>
  <div v-else class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="deletePost" class="delete">Delete Post</button>
  </div>
</template>

<script setup>
import { defineComponent, defineProps, onMounted } from 'vue'
import { getPost } from '@/composables/getPost'
import Spinner from '@/components/Spinner.vue'
import { projectFirestore } from '@/firebase/config'
import {useRouter} from 'vue-router'

let props = defineProps({
  id: Number,
})

defineComponent({
  Spinner,
})

let { post, error, load } = getPost(props.id)
const router = useRouter()

const deletePost = async () => {
  await projectFirestore.collection('posts').doc(post.value.id).delete()
  const response = await projectFirestore.collection('posts').doc(post.value.id).get()
  if (!response.exists) {
    router.push({name: 'home'}) 
  }
}

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
button.delete { 
  display: block;
  margin-top: 30px;
  background: rgb(224, 58, 58);
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
  cursor: pointer;
}
</style>
