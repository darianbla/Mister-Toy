import { createStore } from 'vuex'
// import { toyService } from '../services/toy.service'
import { toyStore } from './toy.store.js'
// import { userStore } from './user.store.js'
export const store = createStore({
   strict: true,
   modules: {
       toyStore,
   },
})
