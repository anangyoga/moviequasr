<script setup>
import { ref } from "vue";

defineOptions({
  name: "SignIn",
});

const isChecked = ref(false);
</script>

<template>
  <q-page class="bg-primary text-white flex flex-center">
    <div class="column" style="width: 350px">
      <div class="text-h1 heading-1 q-mb-xl text-center">Sign In</div>
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md flex flex-center"
      >
        <q-input
          standout
          placeholder="Email"
          bg-color="secondary"
          class="full-width"
          input-class="text-white"
        />
        <q-input
          standout
          placeholder="Password"
          type="password"
          bg-color="secondary"
          class="full-width"
          input-class="text-white"
        />
        <q-checkbox
          indeterminate-value="maybe"
          v-model="isChecked"
          label="Remember me"
          color="secondary"
          keep-color
        />
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
