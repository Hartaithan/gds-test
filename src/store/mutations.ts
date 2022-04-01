import { MutationTree } from 'vuex'
import { ITodo, Mutations, MutationType, State } from '../models/storeModel'

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.AddTodo] (state, title) {
    const id = state.todos.length + 1
    const todo: ITodo = { id, title, complete: false }
    state.todos.push(todo)
  }
}
