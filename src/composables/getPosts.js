import { ref } from 'vue'
import  {projectFirestore}  from '@/firebase/config'

export function getPosts() {
    const posts = ref([])
    const error = ref(null)
    
    
    const load = async () => {
        //await new Promise(resolve => setTimeout(resolve, 2000))

        try {
            //const response = await fetch('http://localhost:3000/posts')
            const response = await projectFirestore.collection('posts').orderBy('createdAt','desc').get()
            posts.value = await response.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            })
        } catch (err) {
            error.value = err
        }
    }

    return { posts, error, load }
}