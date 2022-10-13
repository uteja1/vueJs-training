import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      ++state.counter;
    },
    decrement(state) {
      --state.counter;
    },
  },
  actions: {
    asyncIncrement(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 500);
    },

    asyncDecrement(context) {
      setTimeout(() => {
        context.commit('decrement');
      }, 500);
    },
  },
  modules: {},
});
