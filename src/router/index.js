import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealsList from "../views/MealsList.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByIngrediant from "../views/MealsByIngrediant.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/search/:letter",
    name: "MealList",
    component: MealsList,
  },
  {
    path: "/by-name/:name?",
    name: "ByName",
    component: MealsByName,
  },
  {
    path: "/by-letter/:letter?",
    name: "ByLetter",
    component: MealsByLetter,
  },
  {
    path: "/by-ingrediant/:ingrediant?",
    name: "ByIngrediant",
    component: MealsByIngrediant,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
