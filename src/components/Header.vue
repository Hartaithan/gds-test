<template>
  <div class="header">
    <div class="header__counter">
      <p v-if="todos > 0">Hello, u have {{ todos }} tasks 🙂</p>
      <p v-else>Hello, u don't have any tasks 😒</p>
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
</style>
