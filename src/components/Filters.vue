<template>
  <div class="filters">
    <div class="filters_left">
      <button @click="changeFilter(FilterTypes.All)">All</button>
      <button @click="changeFilter(FilterTypes.Active)">Active</button>
      <button @click="changeFilter(FilterTypes.Completed)">Completed</button>
    </div>
    <div class="filters_right" v-if="completedTodosLength > 0">
      <button @click="clearCompleted">Clear completed</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FilterTypes, MutationType } from '@/models/storeModel'
import { useStore } from '@/store'
import { computed } from '@vue/reactivity'

const store = useStore()
const completedTodosLength = computed(() => store.getters.getCompletedTodosCount)

const changeFilter = (type: FilterTypes) => {
  store.commit(MutationType.ChangeFilter, type)
}

const clearCompleted = () => {
  store.commit(MutationType.ClearCompleted)
}
</script>

<style scoped lang="scss">
.filters {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}
button {
  border: none;
  background: #141414;
  padding: 5px 10px;
  border-radius: 8px;
  transition: all 0.2s ease-in;
  cursor: pointer;
  &:hover {
    background: #2b2b2b;
  }
  &:not(:last-child) {
    margin-right: 5px;
  }
}
</style>
