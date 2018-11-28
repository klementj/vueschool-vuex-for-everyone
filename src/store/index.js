import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // = data
    products: []
  },

  getter: { // = computed properties
    productsCount () {
      // ...
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
