import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teachers: [
      {name: "11", num: 50},
      {name: "22", num: 60},
      {name: "33", num: 70},
      {name: "44", num: 80}
    ],
  },
  getters: {
    changeTeachers(state) {
      let change = state.teachers.map(item => {
        return {
          name: 'vip ' + item.name,
          num: item.num * 2
        }
      })
      return change
    }
  },
  mutations: {
    decNum(state, payload) {
      if(state.teachers[0].num == 0) {
        return false
      }
      state.teachers.map(item => {
        item.num -= payload
      })
    }
  },
  actions: {
    decNum({commit}, payload) {
      setTimeout(function () {
        commit('decNum', payload)
        // x.commit('decNum')
      }, 1)
    }
  }
})
