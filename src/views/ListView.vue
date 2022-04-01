<template>
  <div class="list-view" v-if="todos.length > 0">
    <ListItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
  <p class="list-view__empty" v-else>Tasks have not yet been added</p>
</template>

<script setup lang="ts">
import ListItem from '@/components/ListItem.vue'
import { useStore } from '@/store'
import { computed } from '@vue/reactivity'

const store = useStore()
const todos = computed(() => store.state.todos)
</script>

<style scoped lang="scss">
.list-view {
  &__empty {
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }
}
</style>
