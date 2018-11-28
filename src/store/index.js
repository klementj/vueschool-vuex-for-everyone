import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // = data
    products: []
  },

  getters: { // = computed properties e.g. filter or calculate on runtime
    availableProducts (state, getters) {
      return state.products.filter( product => product.inventory > 0)
    }
  },

  // Actions må være komplekse, men aldrig opdatere state direkte
  actions: {
    fetchProducts () {
      // make the call
      // run setProducts mutation
    }
  },

  mutations: {
    setProducts (state, products) { // responsible for updating a single piece of state
      // update products
      state.products = products
    }
  }
})
