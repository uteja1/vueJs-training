<template>
  <h3>Learning Vue 3</h3>
  <Sample />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sample from './components/Sample.vue'

export default defineComponent({
  name: 'App',
  components: {
    Sample
  }
});
</script>

<style scoped>

</style>
