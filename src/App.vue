<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from "vue-router";

import { offset, offsetValue, maxNumber } from "../store";

const route = useRoute();

console.log(route.path === "/");
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>

      <!-- SI DOVREBBE FARE UN COMPONENTE -->
      <div class="pagination-container" v-if="route.path === '/'">
        <button @click="offset = Math.max(0, offset - offsetValue)" :disabled="!offset">
          Prev
        </button>
        {{ offset / offsetValue }}
        <button
          @click="offset = Math.min(maxNumber, offset + offsetValue)"
          :disabled="offset >= maxNumber"
        >
          Next
        </button>
      </div>
    </nav>
  </header>

  <Suspense> <RouterView /></Suspense>
</template>

<style scoped lang="scss">
@import "@/scss/includes.scss";

@import url("https://fonts.googleapis.com/css2?family=Truculenta:opsz,wght@12..72,100..900&display=swap");

body {
  font-family: "Truculenta", sans-serif;
}

.pagination-container {
  margin-top: rem(8);
}
</style>
