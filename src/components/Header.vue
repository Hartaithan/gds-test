<template>
  <div class="header">
    <div class="header__counter">
      <Transition name="fade" mode="out-in" :duration="{ enter: 200, leave: 200 }">
        <p v-if="todos > 0">Hello, u have {{ todos }} tasks 🙂</p>
        <p v-else>Hello, u don't have any tasks 😒</p>
      </Transition>
    </div>
    <ViewSwitch />
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { computed } from '@vue/reactivity'
import ViewSwitch from './ViewSwitch.vue'

const store = useStore()
const todos = computed(() => store.getters.getTodosCount)
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  border-bottom: 1px solid #2d2d2d;
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
