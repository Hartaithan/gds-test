<template>
  <Transition name="fade" mode="out-in">
    <template v-if="filterType === FilterTypes.All">
      <TransitionGroup name="list" tag="div" class="cards-view" v-if="allTodos.length > 0">
        <CardItem v-for="todo in allTodos" :key="todo.id" :todo="todo" />
      </TransitionGroup>
      <p class="cards-view__empty" v-else>Tasks have not yet been added</p>
    </template>
    <template v-else-if="filterType === FilterTypes.Active">
      <TransitionGroup name="list" tag="div" class="cards-view" v-if="activeTodos.length > 0">
        <CardItem v-for="todo in activeTodos" :key="todo.id" :todo="todo" />
      </TransitionGroup>
      <p class="cards-view__empty" v-else>There are no active tasks at the moment</p>
    </template>
    <template v-else-if="filterType === FilterTypes.Completed">
      <TransitionGroup name="list" tag="div" class="cards-view" v-if="completedTodos.length > 0">
        <CardItem v-for="todo in completedTodos" :key="todo.id" :todo="todo" />
      </TransitionGroup>
      <p class="cards-view__empty" v-else>There are no completed tasks at this time</p>
    </template>
  </Transition>
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
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@media (max-width: 1200px) {
  .cards-view {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .cards-view {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
