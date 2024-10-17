<script setup>
defineProps({
  movies: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <q-card
    v-for="movie in movies"
    :key="movie.id"
    class="my-card bg-accent column"
  >
    <img class="col q-pa-sm" :src="movie.attachment" :alt="movie.name" />

    <q-card-section class="col-auto">
      <div class="text-h5">{{ movie.name }}</div>
      <div class="text-subtitle1">{{ movie.year }}</div>
    </q-card-section>
  </q-card>
</template>

<style lang="css" scoped>
.my-card {
  width: 100%;
  max-width: 282px;
  height: 504px;
}

img {
  object-fit: cover;
  object-position: center;
}
</style>
