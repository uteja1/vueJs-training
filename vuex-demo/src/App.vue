<template>
  <h3>Hello Vue 3 ---> {{ appCounter }}</h3>
  <button @click="inc">Increment</button>
  <button @click="dec">Decrement</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  computed: {
    appCounter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    inc() {
      this.$store.commit('increment');
    },
    dec() {
      this.$store.commit('decrement');
    },
  },
};
</script>

<style>

</style>
