import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import PokemonPage from "../views/PokemonPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage
    },
    {
      path: "/:id",
      name: "detail",
      component: PokemonPage
    }
  ]
});

export default router;
