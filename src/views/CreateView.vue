<template>
  <div class="create">
    <form @submit.prevent="addPost">
        <div>
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required v-model="title">
        </div>
        <div>
            <label for="content">Content:</label>
            <textarea required rows="5" v-model="body"> </textarea>
        </div>
        <div>
            <label for="tags">Tags(hit enter to add a atg):</label>
            <input type="text" id="tags" name="tags" v-model="tag" @keydown.enter.prevent="handleTag" >
            <span class="pill" v-for="tag in tags" :key="tag">#{{tag}}</span>
        </div>
        
        <button>Add Post</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('')
const body = ref('')
const tag = ref('')
const tags = ref([])

const handleTag = () => {
    if(!tags.value.includes(tag.value)){
        tag.value = tag.value.replace(/\s/g, '')
        tags.value.push(tag.value)
        tag.value = ''
    }
}

const addPost = async () => {
    
        const response = await fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title.value,
                body: body.value,
                tags: tags.value
            })
        })
        if(response.ok){
            title.value = ''
            body.value = ''
            tags.value = []
            tag.value = ''
            alert('Post added successfully')
        }else{
            alert('Failed to add post')
        }
}


</script>

<style>
    form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
  }
  button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
</style>