<template>
  <div class="container p-5">
    <h3>Learning Vue </h3>
    <pre>{{res.data}}</pre>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      res: {},
    };
  },

  async mounted() {
    try {
      this.res = await this.$http3.get('todos/3');
    } catch (e) {
      this.res = 'data is missing...';
    }
  },

  // mounted() {
  //   this.$http
  //     .get('todos/32111')
  //     .then((r) => (this.res = r.data))
  //     .catch((error) => {
  //       console.log('Error!', error.message);
  //       this.res = 'data is missing....';
  //     });
  //   }
 

});
</script>

<style scoped>

</style>
