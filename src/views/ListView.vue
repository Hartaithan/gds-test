<template>
  <Transition name="fade" mode="out-in">
    <template v-if="filterType === FilterTypes.All">
      <div class="list-view" v-if="filterType === FilterTypes.All && allTodos.length > 0">
        <TransitionGroup name="list" tag="div">
          <ListItem v-for="todo in allTodos" :key="todo.id" :todo="todo" />
        </TransitionGroup>
      </div>
      <p class="list-view__empty" v-else>Tasks have not yet been added</p>
    </template>
    <template v-else-if="filterType === FilterTypes.Active">
      <div class="list-view" v-if="activeTodos.length > 0">
        <TransitionGroup name="list" tag="div">
          <ListItem v-for="todo in activeTodos" :key="todo.id" :todo="todo" />
        </TransitionGroup>
      </div>
      <p class="list-view__empty" v-else>There are no active tasks at the moment</p>
    </template>
    <template v-else-if="filterType === FilterTypes.Completed">
      <div class="list-view" v-if="completedTodos.length > 0">
        <TransitionGroup name="list" tag="div">
          <ListItem v-for="todo in completedTodos" :key="todo.id" :todo="todo" />
        </TransitionGroup>
      </div>
      <p class="list-view__empty" v-else>There are no completed tasks at this time</p>
    </template>
  </Transition>
</template>

<script setup lang="ts">
import ListItem from '@/components/ListItem.vue'
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
.list-view {
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
</style>
