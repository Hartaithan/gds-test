import { Getters, State } from '@/models/storeModel'
import { GetterTree } from 'vuex'

export const getters: GetterTree<State, State> & Getters = {
  getTodosCount: (state) => {
    return state.todos.length
  },
  getCompletedTodosCount: (state) => {
    return state.todos.filter((todo) => todo.complete === true).length
  },
  getAllTodos: (state) => {
    return state.todos
  },
  getActiveTodos: (state) => {
    return state.todos.filter((todo) => todo.complete === false)
  },
  getCompletedTodos: (state) => {
    return state.todos.filter((todo) => todo.complete === true)
  }
}
