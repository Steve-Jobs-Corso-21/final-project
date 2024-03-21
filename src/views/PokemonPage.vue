<script setup lang="ts">
import { useRoute } from "vue-router";

import axios from "axios";
import { ref } from "vue";

const isLoading = ref<boolean>(true);

const {
  params: { id }
} = useRoute();

const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

setTimeout(() => (isLoading.value = false), 1000);
</script>

<template>
  <div class="pokemon-container" v-if="!isLoading">
    <img :src="data?.sprites?.front_default" :alt="data.name" />
    <h1 class="pokemon-name">{{ data.name }}</h1>
  </div>

  <p v-else>Loading...</p>
</template>

<style scoped lang="scss">
@import "@/scss/includes.scss";

.pokemon-container {
  .pokemon-name {
    text-transform: capitalize;
  }
}
</style>
