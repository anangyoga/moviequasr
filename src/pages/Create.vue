<script setup>
import { reactive } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import Button from "src/components/Button.vue";

const $q = useQuasar();
const router = useRouter();

defineOptions({
  name: "Create",
});

const formInput = {
  name: "",
  attachment: null,
  year: "",
};

const form = reactive({ ...formInput });

const handleSubmit = async () => {
  try {
    await fetch(process.env.API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ ...form }]),
    });

    $q.notify({
      position: "top",
      message: "New movie just been added!",
      color: "positive",
    });

    form.name = "";
    form.attachment = null;
    form.year = "";

    setTimeout(() => {
      router.push("/");
    }, 3000);
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};
</script>

<template>
  <q-page class="bg-primary text-white q-pa-xl">
    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <div class="column">
          <div class="text-h1 heading-1 q-mb-xl">Create a new movie</div>
          <div class="">
            <q-form
              @submit.prevent="handleSubmit"
              class="row q-col-gutter-x-xl"
            >
              <div class="col-7">
                <q-file
                  v-model="form.attachment"
                  bg-color="secondary"
                  outlined
                  label="Drop an image here"
                >
                  <template v-slot:prepend>
                    <q-icon name="cloud_upload" />
                  </template>
                </q-file>
              </div>
              <div class="col-5">
                <div class="column q-gutter-y-xl">
                  <div class="column">
                    <q-input
                      standout
                      v-model="form.name"
                      placeholder="Title"
                      bg-color="secondary"
                      class="full-width q-mb-lg"
                      input-class="text-white"
                    />
                    <q-input
                      standout
                      v-model="form.year"
                      placeholder="Publishing year"
                      bg-color="secondary"
                      input-class="text-white"
                      style="width: 200px"
                    />
                  </div>
                  <div class="row q-gutter-x-md">
                    <Button class="col" color="white" outline label="Cancel" />

                    <Button
                      :unelevated="true"
                      :no-caps="true"
                      class="col"
                      label="Submit"
                      type="submit"
                      color="positive"
                    />
                  </div>
                </div>
              </div>
            </q-form>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-2"></div>
    </div>
  </q-page>
</template>
