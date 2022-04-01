<template>
  <div class="list-item">
    <input class="list-item__checkbox" type="checkbox" v-model="checked" @change="toggleTodo" />
    <p class="list-item__title" :class="{ completed: checked }">{{ props.todo.title }}</p>
    <button class="list-item__delete" @click="deleteTodo">
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
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  min-height: 40px;
  width: 100%;
  background: #141414;
  border-radius: 8px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &__checkbox {
    margin-left: 15px;
    transform: scale(1.5);
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
  }
  &__title {
    margin-left: 15px;
    font-size: 18px;
    flex: 1;
    &.completed {
      text-decoration: line-through;
    }
  }
  &__delete {
    margin-right: 15px;
    background: transparent;
    border: none;
    cursor: pointer;
  }
}
</style>
