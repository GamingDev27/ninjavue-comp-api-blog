<template>
  <router-link :to="{name: 'tag-filter',params:{tag: props.tag}}"> #{{ tag }}</router-link>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  tag: String
})
</script>

<style>

</style>