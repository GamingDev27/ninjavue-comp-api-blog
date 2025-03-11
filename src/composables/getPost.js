import { ref } from 'vue'

export function getPost(id) {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        //await new Promise(resolve => setTimeout(resolve, 2000))

        try {
            const response = await fetch(`http://localhost:3000/posts/${id}`)
            if(!response.ok) {
                throw Error('That post does not exist')
            }
            post.value = await response.json()
            console.log(`post.value: ${post.value}`);
        } catch (err) {
            error.value = err
        }
    }

    return { post, error, load }
}