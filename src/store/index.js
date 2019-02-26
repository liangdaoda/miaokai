import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  showMainIndex: 1
}
const store = new Vuex.Store({
  state
})

export default store