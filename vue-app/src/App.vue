<template>
  <div class="container p-5">
    <h3>Learning Vue 3</h3>
    <Sample :firstName=person.firstName :lastname=person.lastName :city=person.city />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sample from './components/Sample.vue'

export default defineComponent({
  name: 'App',
  components: {
    Sample
  },
  data: function () {
    return {
      person: {
        firstName: "uday",
        lastName: "k",
        age: 25,
        city : "bang"
      }
    }
  } 
});
</script>

<style scoped>

</style>
