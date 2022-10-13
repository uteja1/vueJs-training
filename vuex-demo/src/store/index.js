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
  actions: {},
  modules: {},
});
