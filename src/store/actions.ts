import { FilterTypes, State } from '@/models/storeModel'
import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from './mutations'

export enum ActionTypes {
  Initial = 'INITIALISE_STORE',
  AddTodo = 'ADD_TODO',
  DeleteTodo = 'DELETE_TODO',
  ToggleTodo = 'TOGGLE_TODO',
  ChangeFilter = 'CHANGE_FILTER',
  ClearCompleted = 'CLEAR_COMPLETED_TODOS',
}

export type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>;

export interface Actions {
  [ActionTypes.Initial]({ commit }: AugmentedActionContext): void;
  [ActionTypes.AddTodo](
    { commit }: AugmentedActionContext,
    payload: string
  ): void;
  [ActionTypes.DeleteTodo](
    { commit }: AugmentedActionContext,
    payload: number
  ): void;
  [ActionTypes.ToggleTodo](
    { commit }: AugmentedActionContext,
    payload: number
  ): void;
  [ActionTypes.ChangeFilter](
    { commit }: AugmentedActionContext,
    payload: FilterTypes
  ): void;
  [ActionTypes.ClearCompleted]({ commit }: AugmentedActionContext): void;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.Initial] ({ commit }) {
    return commit(MutationType.Initial)
  },
  [ActionTypes.AddTodo] ({ commit }, title) {
    return commit(MutationType.AddTodo, title)
  },
  [ActionTypes.DeleteTodo] ({ commit }, id) {
    return commit(MutationType.DeleteTodo, id)
  },
  [ActionTypes.ToggleTodo] ({ commit }, id) {
    return commit(MutationType.ToggleTodo, id)
  },
  [ActionTypes.ChangeFilter] ({ commit }, type) {
    return commit(MutationType.ChangeFilter, type)
  },
  [ActionTypes.ClearCompleted] ({ commit }) {
    return commit(MutationType.ClearCompleted)
  }
}
