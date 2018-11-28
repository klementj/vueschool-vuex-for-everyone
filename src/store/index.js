import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // = data
    products: []
  },

  getters: { // = computed properties e.g. filter or calculate on runtime
    availableProducts (state, getters) {
      return state.products.filter(product => product.inventory > 0)
    }
  },

  // Actions må være komplekse, men aldrig opdatere state direkte
  actions: { // = stores methods
    fetchProducts (context) {
      return new Promise((resolve, reject) => {
        // make the call
        shop.getProducts(products => {
          // run setProducts mutation
          context.commit('setProducts', products)
          resolve()
        })
      })
    }
  },

  mutations: {
    setProducts (state, products) { // responsible for updating a single piece of state
      // update products
      state.products = products
    }
  }
})
