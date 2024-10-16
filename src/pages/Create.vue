<script setup>
defineOptions({
  name: "Create",
});
</script>

<template>
  <q-page class="bg-primary text-white q-pa-xl">
    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <div class="column">
          <div class="text-h1 heading-1 q-mb-xl">Create a new movie</div>
          <div class="">
            <q-form class="row q-col-gutter-x-xl">
              <div class="col-7">
                <q-file
                  bg-color="secondary"
                  outlined
                  v-model="model"
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
                      placeholder="Title"
                      bg-color="secondary"
                      class="full-width q-mb-lg"
                      input-class="text-white"
                    />
                    <q-input
                      standout
                      placeholder="Publishing year"
                      bg-color="secondary"
                      input-class="text-white"
                      style="width: 200px"
                    />
                  </div>
                  <div class="row q-gutter-x-md">
                    <q-btn
                      class="col"
                      style="color: white"
                      outline
                      label="Cancel"
                    />
                    <q-btn
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
