<script setup lang="ts">
import type { Pokemon } from "@/models/pokemon";
import PokemonCard from "@/components/PokemonCard.vue";

import { offset } from "../../store";

import axios from "axios";
import { ref, watchEffect } from "vue";

const data = ref<Pokemon[]>([]);

const isLoading = ref<boolean>(true);

const searchValue = ref<string>("");

const finalData = ref<Pokemon[]>([]);

watchEffect(async () => {
  isLoading.value = true;

  const {
    data: { results }
  } = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset.value}&limit=20`);

  data.value = results;

  console.log("results", data.value);

  isLoading.value = false;
});

watchEffect(
  () => (finalData.value = data.value.filter(({ name }) => name.includes(searchValue.value)))
);
</script>

<template>
  <div class="pokemon-list-container">
    <h1>Pokemon List</h1>

    <div class="pagination-container">
      <input v-model="searchValue" placeholder="Name" class="search-input" />
    </div>

    <template v-if="!isLoading">
      <div class="pokemon-container">
        <PokemonCard
          v-for="({ url }, index) in finalData"
          :key="index"
          :id="index + 1 * offset + 1"
          :url="url"
        />
      </div>
    </template>

    <p v-else>Loading...</p>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/includes.scss";

.pokemon-list-container {
  .pagination-container {
    background: $background;
    position: sticky;
    top: rem(16);
    left: 0;

    .search-input {
      margin-left: rem(8);
    }
  }

  .pokemon-container {
    @include flex($flex-wrap: wrap);
    gap: rem(16);

    margin-top: rem(16);
  }
}
</style>
