<template>
  <div class="container p-5">
    <h3>Learning Vue</h3>
    <hr />
    <form @submit.prevent="onSubmit">
      <div class="form-group mt-3">
        <label>Username</label>
        <input type="text" class="form-control" name="username" v-model="username" />
      </div>
      <div class="form-group mt-3">
        <label>Password</label>
        <input type="password" class="form-control" name="password" v-model="password" />
      </div>
      <button class="btn btn-primary mt-5">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {
      console.log({
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>

<style>

</style>
