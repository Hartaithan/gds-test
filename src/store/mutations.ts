import { MutationTree } from 'vuex'
import { ITodo, Mutations, MutationType, State } from '../models/storeModel'

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.AddTodo] (state, title) {
    const id = state.todos.length + 1
    const todo: ITodo = { id, title, complete: false }
    state.todos.push(todo)
  },
  [MutationType.DeleteTodo] (state, id) {
    state.todos = state.todos.filter((todo) => todo.id !== id)
  },
  [MutationType.ToggleTodo] (state, id) {
    const todo = state.todos.find((item) => item.id === id)
    if (todo) {
      todo.complete = !todo.complete
    } else {
      console.error('todo not found')
    }
  },
  [MutationType.ChangeFilter] (state, type) {
    state.filter = type
  }
}
