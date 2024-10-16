<script setup>
defineOptions({
  name: "SignIn",
});
</script>

<template>
  <q-page class="bg-primary text-white flex flex-center">
    <div class="wrapper column">
      <p class="text-h1 heading-1 q-mb-xl">Sign In</p>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          standout="bg-secondary text-white"
          v-model="text"
          label="Email"
          color="secondary"
          class="full-width col-8 text-white bg-secondary"
        />
        <q-input
          standout="bg-secondary text-white"
          v-model="text"
          label="Password"
          type="password"
          color="secondary"
          class="full-width col-8 text-white bg-secondary"
        />

        <q-checkbox v-model="right" label="Remember me" color="secondary" />
        <q-btn
          to="/"
          label="Login"
          type="submit"
          color="positive"
          class="full-width"
        />
      </q-form>
    </div>
  </q-page>
</template>

<style scoped>
.wrapper {
  width: 350px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
