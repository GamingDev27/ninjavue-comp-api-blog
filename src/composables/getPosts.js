import { ref } from 'vue'

export function getPosts() {
    const posts = ref([])
    const error = ref(null)
    
    
    const load = async () => {
        //await new Promise(resolve => setTimeout(resolve, 2000))

        try {
            const response = await fetch('http://localhost:3000/posts')
            posts.value = await response.json()
        } catch (err) {
            error.value = err
        }
    }

    return { posts, error, load }
}