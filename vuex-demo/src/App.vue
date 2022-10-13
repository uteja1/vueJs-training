<template>
  <h3>Hello Vue 3 ---> {{ appCounter }}</h3>
  <button @click="inc">Increment</button>
  <button @click="dec">Decrement</button>
  <p> {{ firstName }} , {{ city }} , {{ counter }} </p>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    appCounter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    inc() {
      this.$store.dispatch('asyncIncrement');
    },
    dec() {
      this.$store.dispatch('asyncDecrement');
    },
  },
  computed: {
    ...mapGetters(['counter', 'firstName', 'city']),
  },

};
</script>

<style>

</style>
