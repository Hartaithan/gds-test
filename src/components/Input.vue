<template>
  <div class="input">
    <input
      type="text"
      placeholder="What do you need to do?"
      v-model="input"
      @keydown="handleKeyDown"
    />
    <button @click="handleOnClick">
      <svg width="30px" height="30px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M16,464,496,256,16,48V208l320,48L16,304Z" fill="#a3a3a3" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { MutationType } from '@/models/storeModel'
import { useStore } from '@/store'
import { ref } from 'vue'

const store = useStore()
const input = ref('')

const handleOnClick = () => {
  if (input.value !== '') {
    store.commit(MutationType.AddTodo, input.value)
    input.value = ''
  }
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' && input.value !== '') {
    store.commit(MutationType.AddTodo, input.value)
    input.value = ''
  }
}
</script>

<style scoped lang="scss">
.input {
  position: relative;
  margin: 15px 0 10px 0;
}
input {
  width: 100%;
  height: 50px;
  background: transparent;
  border: 2px solid #2d2d2d;
  border-radius: 8px;
  font-size: 16px;
  padding: 5px 50px 5px 10px;
  outline: none;
  &::placeholder {
    color: #a1a1a1;
  }
}
button {
  position: absolute;
  width: 50px;
  height: 100%;
  top: 0;
  right: 0;
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>
