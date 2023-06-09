import { toyService } from '../services/toy.service.js'

export const toyStore = {
  state: {
    toys: null,
    toysCount: null,
    currToy: null,
    filterBy: {
      txt: '',
      status: '',
      pageIdx: 0,
      pageSize: 5,
    },
    sortBy: {
      by: '',
      desc: 1,
    },
  },
  getters: {
    toy({ currToy }) {
      return currToy
    },
    donePct({ toys }) {
      if (!toys || !toys.length) return 0
      const dones = toys.reduce(
        (acc, toy) => (toy.isDone ? acc + 1 : acc),
        0
      )
      const total = toys.length

      return ((dones / total) * 100).toFixed(2)
    },
    toysToDisplay({ filterBy, toys }) {
      if (!toys) return null
      return toys
      // if (!toys) return null

      // const { status, txt, pageIdx, pageSize } = filterBy
      // let filteredToys = toys

      // const regex = new RegExp(txt, 'i')
      // filteredToys = filteredToys.filter(toy => regex.test(toy.txt))

      // if (status) {
      //   filteredToys = filteredToys.filter(
      //     toy =>
      //       (toy.inStock && status === 'done') ||
      //       (!toy.inStock && status === 'active')
      //   )
      // }

      // const startIdx = pageIdx * pageSize
      // filteredToys = filteredToys.slice(startIdx, startIdx + pageSize)

      // return filteredToys
    },
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys
    },
    setCurrToy(state, { toy }) {
      state.currToy = toy
    },
    addToy(state, { toy }) {
      state.toys.unshift(toy)
    },
    updateToy(state, { toy }) {
      const idx = state.toys.findIndex(t => t._id === toy._id)
      state.toys.splice(idx, 1, toy)
    },
    removeToy(state, { toyId }) {
      const idx = state.toys.findIndex(toy => toy._id === toyId)
      state.toys.splice(idx, 1)
    },
    setFilterBy(state, { filterBy }) {
      state.filterBy = filterBy
    },
  },
  actions: {
    loadToys(context) {
      console.log('context', context)
      toyService
        .query()
        .then(toys => {
          context.commit({ type: 'setToys', toys })
        })
        .catch(err => {
          throw err
        })
    },
    saveToy({ commit, dispatch }, { toy }) {
      const actionType = toy._id ? 'updateToy' : 'addToy'
      return toyService.save(toy).then(savedToy => {
        commit({ type: actionType, toy: savedToy })
        let txt = actionType === 'addToy' ? 'Added a toy' : 'Updated toy'
        txt += `: ${savedToy.txt}`
        // const activity = { txt, at: Date.now() }
        // dispatch({ type: 'addActivity', activity })
        return savedToy
      })
    },
    removeToy({ commit, dispatch, state }, { toyId }) {

      return toyService.remove(toyId)
        .then(() => {
          commit({ type: 'removeToy', toyId })
        })
    },
    getById({ commit }, { toyId }) {
      return toyService.getById(toyId).then(toy => {
        commit({ type: 'setCurrToy', toy })
        return toy
      })
    },
  },
  // loadToys({ commit }, { filterBy }) {
  //   toyService
  //     .query(filterBy)
  //     .then(toys => commit({ type: 'setToys', toys }))
  //     .catch(err => {
  //       throw err
  //     })
  // },
}
