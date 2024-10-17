<script setup>
import Button from "src/components/Button.vue";
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
        <Button
          :no-caps="true"
          :unelevated="true"
          class="full-width"
          label="Login"
          to="/"
          type="submit"
          color="positive"
        />
      </q-form>
    </div>
  </q-page>
</template>
