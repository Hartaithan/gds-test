<template>
  <div class="list-view">
    <ListItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script setup lang="ts">
import ListItem from '@/components/ListItem.vue'
import { useStore } from '@/store'
import { computed } from '@vue/reactivity'

const store = useStore()
const todos = computed(() => store.state.todos)
</script>

<style scoped lang="scss">
</style>
