import { createLogger, createStore } from 'vuex'
import { mutations } from './mutations'
import { State, Store } from '../models/storeModel'
import { state } from './state'
import { getters } from './getters'

export const store = createStore<State>({
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : [],
  state,
  getters,
  mutations,
  actions: {},
  modules: {}
})

export function useStore (): Store {
  return store as Store
}
