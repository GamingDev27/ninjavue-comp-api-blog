<script>
import { ref } from 'vue';
export default {
  name: 'HomeView',
  setup() {
    const name = ref('John Doe');
    const age = 30;
    let p = ref(null);

    const handleClick = () => {
      name.value = 'Jane Doe';
    }
    
    return { name, age, handleClick, p};
  },
}
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="p">My name is {{name}} and my age is {{age }}</p>
    <button @click="handleClick">click me</button>
    <input type="text" v-model="name" />
  </div>
</template>
