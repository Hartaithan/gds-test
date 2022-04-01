import { CommitOptions, Store as VuexStore } from 'vuex'

export interface ITodo {
  id: number;
  title: string;
  complete: boolean;
}

export type State = {
  todos: ITodo[];
};

export enum MutationType {
  AddTodo = 'ADD_TODO',
  DeleteTodo = 'DELETE_TODO',
  ToggleTodo = 'TOGGLE_TODO',
}

export type Mutations = {
  [MutationType.AddTodo](state: State, title: string): void;
};

export type Store = Omit<VuexStore<State>, 'commit'> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};
