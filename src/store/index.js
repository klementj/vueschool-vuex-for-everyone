import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)

new Vuex.Store({
  state: { // = data
    products: []
  },

  getter: { // = computed properties
    productsCount () {
      //...
    }
  }, 

  actions: {
    fetchProducts () {
      // make the call
    }
  },

  mutation: {
    setProducts () {
      // update products
    }
  }
})