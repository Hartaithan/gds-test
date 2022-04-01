import { MutationTree } from 'vuex'
import { FilterTypes, ITodo, State } from '../models/storeModel'

export enum MutationType {
  Initial = 'INITIALISE_STORE',
  AddTodo = 'ADD_TODO',
  DeleteTodo = 'DELETE_TODO',
  ToggleTodo = 'TOGGLE_TODO',
  ChangeFilter = 'CHANGE_FILTER',
  ClearCompleted = 'CLEAR_COMPLETED_TODOS',
}

export type Mutations = {
  [MutationType.Initial](state: State): void;
  [MutationType.AddTodo](state: State, title: string): void;
  [MutationType.DeleteTodo](state: State, id: number): void;
  [MutationType.ToggleTodo](state: State, id: number): void;
  [MutationType.ChangeFilter](state: State, type: FilterTypes): void;
  [MutationType.ClearCompleted](state: State): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.Initial] (state) {
    const persistStore = localStorage.getItem('todos')
    if (persistStore) {
      this.replaceState(Object.assign(state, JSON.parse(persistStore)))
    }
  },
  [MutationType.AddTodo] (state, title) {
    const id =
      state.todos.length > 0 ? state.todos[state.todos.length - 1].id + 1 : 1
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
  },
  [MutationType.ClearCompleted] (state) {
    state.todos = state.todos.filter((todo) => todo.complete === false)
  }
}
