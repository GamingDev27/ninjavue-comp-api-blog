<script>
import { computed, ref, watch, watchEffect } from 'vue';
export default {
  name: 'HomeView',
  setup() {
    const names = ref(['John Doe', 'Jane Doe', 'John Smith', 'Jane Smith']);
    const search = ref('');

    const matchingNames = computed(() => {
      return names.value.filter(name => name.toLowerCase().includes(search.value.toLowerCase()));
    });

    watch(search, () => {
      console.log('search changed');
    });

    watchEffect(() => {
      console.log('[WE]search changed',search.value);
    });

    return { names, search, matchingNames };
  },
}
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>{{search}}</p>
    <div v-for="name in matchingNames" :key="name">{{name}}</div>
  </div>
</template>
