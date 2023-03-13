import { createStore } from 'vuex'
import { toyService } from '../services/toy.service'
import { toyStore } from './toy.store.js'
// import { userStore } from './user.store.js'
export const store = createStore({
 state: {
  msg: 'Store Is Running',
  toys: [],
 },
 getters: {
  getMsg(state) {
   return state.msg
  }
 },
 modules: {
    toyStore,
    // userStore,
 }
})
