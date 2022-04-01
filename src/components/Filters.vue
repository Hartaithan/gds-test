<template>
  <div class="filters">
    <div class="filters_left">
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
    <div class="filters_right">
      <button>Clear completed</button>
    </div>
  </div>
</template>

<script setup lang="ts">

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
