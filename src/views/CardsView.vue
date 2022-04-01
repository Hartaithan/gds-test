<template>
  <template v-if="filterType === FilterTypes.All">
    <div class="cards-view" v-if="allTodos.length > 0">
      <CardItem v-for="todo in allTodos" :key="todo.id" :todo="todo" />
    </div>
    <p class="cards-view__empty" v-else>Tasks have not yet been added</p>
  </template>
  <template v-if="filterType === FilterTypes.Active">
    <div class="cards-view" v-if="activeTodos.length > 0">
      <CardItem v-for="todo in activeTodos" :key="todo.id" :todo="todo" />
    </div>
    <p class="cards-view__empty" v-else>There are no active tasks at the moment</p>
  </template>
  <template v-if="filterType === FilterTypes.Completed">
    <div class="cards-view" v-if="completedTodos.length > 0">
      <CardItem v-for="todo in completedTodos" :key="todo.id" :todo="todo" />
    </div>
    <p class="cards-view__empty" v-else>There are no completed tasks at this time</p>
  </template>
</template>

<script setup lang="ts">
import CardItem from '@/components/CardItem.vue'
import { useStore } from '@/store'
import { computed } from '@vue/reactivity'
import { FilterTypes } from '@/models/storeModel'

const store = useStore()
const filterType = computed(() => store.state.filter)
const allTodos = computed(() => store.getters.getAllTodos)
const activeTodos = computed(() => store.getters.getActiveTodos)
const completedTodos = computed(() => store.getters.getCompletedTodos)
</script>

<style scoped lang="scss">
.cards-view {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  &__empty {
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }
}
</style>
