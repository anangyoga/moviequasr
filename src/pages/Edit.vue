<script setup>
import Button from "src/components/Button.vue";
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

defineOptions({
  name: "Edit",
});

const $q = useQuasar();
const router = useRouter();

const formInput = {
  name: "",
  attachment: null,
  year: "",
};

const route = useRoute();
const id = route.params.id;
const movieData = reactive({ ...formInput });

const getData = async () => {
  const res = await fetch(`${process.env.API}/${id}`);
  const { name, attachment, year } = await res.json();

  Object.assign(movieData, {
    _id: id,
    name,
    attachment,
    year,
  });
};

const handleUpdate = async () => {
  try {
    await fetch(process.env.API, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: movieData._id,
        ...movieData,
      }),
    });

    $q.notify({
      position: "top",
      message: "Update movie success!",
      color: "positive",
    });

    setTimeout(() => {
      router.push("/");
    }, 3000);
  } catch (error) {
    console.error("Error updating data:", error);
  }
};

onMounted(async () => {
  await getData();
});
</script>

<template>
  <q-page class="bg-primary text-white q-pa-xl">
    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <div class="column">
          <div class="text-h1 heading-1 q-mb-xl">Edit</div>
          <div class="">
            <q-form
              @submit.prevent="handleUpdate"
              class="row q-col-gutter-x-xl"
            >
              <div class="col-7">
                <q-file
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
                      v-model="movieData.name"
                      placeholder="Title"
                      bg-color="secondary"
                      class="full-width q-mb-lg"
                      input-class="text-white"
                    />
                    <q-input
                      standout
                      v-model="movieData.year"
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
                      label="Update"
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
