<template>
  <Navbar></Navbar>
  <Jumbotron></Jumbotron>
  
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Jumbotron from './components/Jumbotron.vue';
import Navbar from './components/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Jumbotron,
    Navbar
  }
});
</script>

<style scoped>

</style>
