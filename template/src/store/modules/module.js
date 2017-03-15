/**
 * An example Vuex module
 */
const state = {
  x: 0
}

const mutations = {
  'INCREMENT' (state, amount) {
    state.x++
  }
}

const actions = {
  incrementX ({ commit }, amount) {
    commit('INCREMENT', amount)
  }
}

const getters = {
  getX (state) {
    return state.x
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
