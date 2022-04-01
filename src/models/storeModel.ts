import { CommitOptions, Store as VuexStore } from 'vuex'

export interface ITodo {
  id: number;
  title: string;
  complete: boolean;
}

export enum FilterTypes {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}

export type State = {
  filter: FilterTypes;
  todos: ITodo[];
  unfiltered: ITodo[];
};

export type Getters = {
  getTodosCount(state: State): number;
  getAllTodos(state: State): ITodo[];
  getActiveTodos(state: State): ITodo[];
  getCompletedTodos(state: State): ITodo[];
};

export enum MutationType {
  AddTodo = 'ADD_TODO',
  DeleteTodo = 'DELETE_TODO',
  ToggleTodo = 'TOGGLE_TODO',
  ChangeFilter = 'CHANGE_FILTER',
  ClearCompleted = 'CLEAR_COMPLETED_TODOS',
}

export type Mutations = {
  [MutationType.AddTodo](state: State, title: string): void;
  [MutationType.DeleteTodo](state: State, id: number): void;
  [MutationType.ToggleTodo](state: State, id: number): void;
  [MutationType.ChangeFilter](state: State, type: FilterTypes): void;
  [MutationType.ClearCompleted](state: State): void;
};

export type Store = Omit<VuexStore<State>, 'getters' | 'commit'> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};
