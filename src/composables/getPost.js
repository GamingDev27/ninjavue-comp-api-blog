import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'

export function getPost(id) {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        //await new Promise(resolve => setTimeout(resolve, 2000))

        try {
            //const response = await fetch(`http://localhost:3000/posts/${id}`)
            const response = await projectFirestore.collection('posts').doc(id).get()
            if(!response.exists) {
                throw Error('That post does not exist')
                console.log("ERROR")
            }
            post.value = {...response.data(), id: response.id}
            console.log(post.value)
       
        } catch (err) {
            error.value = err
        }
    }

    return { post, error, load }
}