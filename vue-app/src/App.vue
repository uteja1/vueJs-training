<template>
  <div class="container p-5">
    <h3>Learning Vue {{ counter }}</h3>
    <button class="btn btn-primary" @click="increment">Increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      ++this.counter;
    },
  },
  beforeCreate() {
    console.log('beforeCreate', this.counter);
  },
  created() {
    console.log('created', this.counter);
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate', this.counter);
  },
  updated() {
    console.log('updated', this.counter);
  },
});
</script>

<style scoped>

</style>
