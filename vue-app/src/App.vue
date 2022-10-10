<template>
  <h3>hello uday</h3>
  <p>{{firstName}} {{lastName}}</p>
  <p :class="firstName">this is a p tag</p>
  <input type="text" :value = "lastName">
  <button @click="handleClick">click here</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data: function () {
    return {
      firstName: 'Uday',
      lastName: 'k',
      age: 25
    }
  },
  methods: {
    handleClick: function (e: any) {
      console.log("button clicked", this.firstName)
    }
  }
});
</script>

<style>

</style>
