<template>
  <div class="card-item">
    <p class="card-item__id">{{ `#${props.todo.id}` }}</p>
    <p class="card-item__title" :class="{ completed: checked }">{{ props.todo.title }}</p>
    <div class="card-item__checkbox">
      <input :id="`${props.todo.id}`" type="checkbox" v-model="checked" @change="toggleTodo" />
      <label :for="`${props.todo.id}`">Completed</label>
    </div>
    <button class="card-item__delete" @click="deleteTodo">
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.22566 4.81096C5.83514 4.42044 5.20197 4.42044 4.81145 4.81096C4.42092 5.20148 4.42092 5.83465 4.81145 6.22517L10.5862 11.9999L4.81151 17.7746C4.42098 18.1651 4.42098 18.7983 4.81151 19.1888C5.20203 19.5793 5.8352 19.5793 6.22572 19.1888L12.0004 13.4141L17.7751 19.1888C18.1656 19.5793 18.7988 19.5793 19.1893 19.1888C19.5798 18.7983 19.5798 18.1651 19.1893 17.7746L13.4146 11.9999L19.1893 6.22517C19.5799 5.83465 19.5799 5.20148 19.1893 4.81096C18.7988 4.42044 18.1657 4.42044 17.7751 4.81096L12.0004 10.5857L6.22566 4.81096Z"
          fill="#ffffff"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType, ref } from 'vue'
import { MutationType, ITodo } from '@/models/storeModel'
import { useStore } from '@/store'

const store = useStore()
const props = defineProps({
  todo: {
    type: Object as PropType<ITodo>,
    required: true
  }
})
const checked = ref(props.todo.complete)

const toggleTodo = () => {
  store.commit(MutationType.ToggleTodo, props.todo.id)
}

const deleteTodo = () => {
  store.commit(MutationType.DeleteTodo, props.todo.id)
}
</script>

<style scoped lang="scss">
.card-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100px;
  width: 100%;
  padding: 15px;
  background: #141414;
  border-radius: 8px;
  &__checkbox {
    & > label {
      margin-left: 5px;
    }
    & > input {
      filter: grayscale(100%);
      -webkit-filter: grayscale(100%);
      -moz-filter: grayscale(100%);
    }
  }
  &__id {
    font-weight: bold;
    margin-bottom: 10px;
  }
  &__title {
    font-size: 18px;
    overflow-wrap: anywhere;
    margin-bottom: 15px;
    flex: 1;
    &.completed {
      text-decoration: line-through;
    }
  }
  &__delete {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
  }
}
</style>
