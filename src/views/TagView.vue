<template>
    <div class="post-list">
        <h1>Tag: <span class="tag">{{route.params.tag}}</span></h1>
        <div v-if="error">{{ error }}</div>
        <div v-if="!posts.length"><Spinner /></div>
        <div v-else class="posts"> 
            <PostList :posts="postTag" /> 
            <TagCloud :posts="posts" />
        </div>    
    </div>
</template>

<script setup>
import {useRoute} from 'vue-router'
import {getPosts} from '@/composables/getPosts'
import { computed, onMounted } from 'vue'
import PostList from '@/components/PostList.vue'
import TagCloud from '@/components/TagCloud.vue'
import Spinner from '@/components/Spinner.vue'

const {posts, error, load} = getPosts()
const route = useRoute()

onMounted(() => {
    load()
})

let postTag = computed(() => {
    return posts.value.filter(post => post.tags.includes(route.params.tag))
})
</script>


<style scope>
     .post-list {
        max-width: 1800px !important;
        margin: 0 auto;
        padding: 40px;
    }
    .posts {
        display: grid;
        grid-template-columns: 3fr 1fr;
        gap: 20px;
    }
</style>