<template>
  <!-- <div class="container py-3">
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <symbol id="check" viewBox="0 0 16 16">
        <title>Check</title>
        <path
          d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
      </symbol>
    </svg>
    <Navbar></Navbar>
    <main>
      <Jumbotron></Jumbotron>
      <h2 class="display-6 text-center mb-4">Compare plans</h2>
      <Table></Table>
    </main>

    <Footer></Footer>
  </div> -->

  <div class="container p-5">
    <h3>vue</h3>
    <p v-bind="allAttributes">hi dude</p>

    <Demo></Demo>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Jumbotron from './components/Jumbotron.vue';
import Navbar from './components/Navbar.vue';
import Table from './components/Table.vue';
import Footer from './components/Footer.vue';
import Demo from './components/Demo.vue'

export default defineComponent({
  name: 'App',
  data() {
    return {
      allAttributes: {
        id: "34-df",
        class: "fun class",
        gh456: "custom"
      }
    }
  },
  components: {
    Jumbotron,
    Navbar,
    Table,
    Footer,
    Demo
  }
});
</script>

<style scoped>

</style>
