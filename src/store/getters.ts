import { ITodo, State } from '@/models/storeModel'
import { GetterTree } from 'vuex'

export type Getters = {
  getTodosCount(state: State): number;
  getCompletedTodosCount(state: State): number;
  getAllTodos(state: State): ITodo[];
  getActiveTodos(state: State): ITodo[];
  getCompletedTodos(state: State): ITodo[];
};

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
