import { Actions } from '@/store/actions'
import { Getters } from '@/store/getters'
import { Mutations } from '@/store/mutations'
import { CommitOptions, DispatchOptions, Store as VuexStore } from 'vuex'

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
};

export type Store = Omit<
  VuexStore<State>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};
