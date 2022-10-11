<template>
  <h3>counter : {{counter}}</h3>
  <button @click="handleClick">Incrementcl</button>

  <p v-show="counter < 5">counter is &lt; 5 </p>
  
  

  <p v-for="(value, key , index) in person" :key="key">{{key}} :: {{value}} @ {{index}}</p>

</template>

<script lang="ts">  
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data: function () {
    return {
      person: {
        firstName: "uday",
        lastName: "k",
        age: 25
      }
    } 
  },
  methods: {
    handleClick: function (e: any) {
      this.counter++;
    }
  }
});
</script>

<style> 

</style>
