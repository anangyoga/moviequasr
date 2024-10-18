<script setup>
import { useRouter } from "vue-router";

defineProps({
  movies: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

const cardNavigate = (id) => {
  router.push(`/edit/${id}`);
};
</script>

<template>
  <q-card
    v-for="movie in movies"
    :key="movie._id"
    v-ripple="{ color: 'secondary' }"
    class="my-card bg-accent column cursor-pointer q-hoverable"
    @click="cardNavigate(movie._id)"
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
