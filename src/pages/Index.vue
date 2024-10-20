<script setup>
import MovieCard from "src/components/MovieCard.vue";
import { ref, onMounted } from "vue";

defineOptions({
  name: "IndexPage",
});

const movies = ref([]);

const getData = async () => {
  const res = await fetch(process.env.API);
  const data = await res.json();

  movies.value = data.data;
};

onMounted(async () => {
  await getData();
});
</script>

<template>
  <q-page class="bg-primary text-white q-pa-xl">
    <div class="row justify-between items-center q-mb-xl">
      <div class="text-h1 heading-1">
        My movies <q-btn outline round icon="add" to="/create" />
      </div>
      <div>
        <q-btn flat size="13px">
          <div>Logout</div>
          <q-icon right size="3em" name="logout" />
        </q-btn>
      </div>
    </div>
    <div v-if="movies.length !== 0" class="row q-gutter-xl">
      <MovieCard :movies="movies" />
    </div>
    <div v-else class="flex flex-center">
      <div class="column items-center">
        <div class="text-h2 heading-2 q-mt-xl q-mb-md">
          Your movie list is empty
        </div>
        <q-btn
          class="col"
          label="Add a new movie"
          to="/create"
          color="positive"
        />
      </div>
    </div>
  </q-page>
</template>
