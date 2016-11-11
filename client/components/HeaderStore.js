import Vue from 'vue'
import Vuex from 'vuex'
import counterStore from './CounterStore.js'
Vue.use(Vuex)

const state = {
  world: 'world'
}
const getters = {
  hello: state => 'hello',
  count: state => counterStore.getters.count
}


const store = new Vuex.Store({
  getters,
})

export default store
