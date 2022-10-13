<template>
  <div class="container p-5">
    <h3>Learning Vue </h3>
    <pre>{{res}}</pre>
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

  mounted() {
    // this.$http1.get('users')
    //   .then(r => {
    //     this.res = r.data;
    //   });
    // this.$http1
    //   .post('users', {
    //     id: 2,
    //     email: 'janet.weaver@reqres.in',
    //     first_name: 'Janet',
    //     last_name: 'Weaver',
    //     avatar: 'https://reqres.in/img/faces/2-image.jpg',
    //   })
    //   .then((r) => {
    //     this.res = r.data;
    //   });

    this.$http1
      .put('user/2', {
        id: 2,
        email: 'janet.weaver@reqres.in',
        first_name: 'Janet',
        last_name: 'Weaver',
        avatar: 'https://reqres.in/img/faces/2-image.jpg',
      })
      .then((r) => {
        this.res = r.data;
      });

  }
});
</script>

<style scoped>

</style>
