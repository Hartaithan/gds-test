<template>
  <div class="filters">
    <div class="filters_left">
      <button
        v-for="button in Object.entries(FilterTypes)"
        :key="button[0]"
        @click="changeFilter(button[1])"
      >{{ button[0] }}</button>
    </div>
    <div class="filters_right">
      <button>Clear completed</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FilterTypes, MutationType } from '@/models/storeModel'
import { useStore } from '@/store'

const store = useStore()

const changeFilter = (type: string) => {
  switch (type) {
    case FilterTypes.All:
      store.commit(MutationType.ChangeFilter, FilterTypes.All)
      break
    case FilterTypes.Active:
      store.commit(MutationType.ChangeFilter, FilterTypes.Active)
      break
    case FilterTypes.Completed:
      store.commit(MutationType.ChangeFilter, FilterTypes.Completed)
      break
    default:
      break
  }
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
