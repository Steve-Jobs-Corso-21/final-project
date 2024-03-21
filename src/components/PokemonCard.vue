<script setup lang="ts">
import axios from "axios";

const { url } = defineProps<{ id: number; url: string }>();

const { data } = await axios.get(url);
</script>

<template>
  <RouterLink :to="`/${id}`" class="pokemon-element">
    <img :src="data.sprites.front_default" :alt="data.name" />
    <p>{{ data.name }}</p>
  </RouterLink>
</template>

<style scoped lang="scss">
@import "@/scss/includes.scss";

.pokemon-element {
  width: 16.66666667%;

  box-shadow: 0 0 rem(8) rem(2) rgba(#000, 0.5);

  text-align: center;

  padding: rem(8) 0;

  border-radius: rem(8);

  text-decoration: none;
  color: $primary;

  transition: $transition;

  &:hover {
    color: $background;
    background: darken($background, 50%);
  }
}
</style>
