<template>
  <div class="conatainer p-6 bg-grey-400">
    <input
      v-model="keyword"
      type="text"
      class="bg-grey border-2 border-blue-200 focus:border-green-200 rounded-lg w-full"
      placeholder="Search for Meals"
      @change="searchMeals" />

    <div
      class="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-4 p-6 container mx-auto">
      <div
        v-for="(meal, index) in meals"
        :key="index"
        class="bg-white border border-blue-200 rounded-lg shado shadow-sm">
        <router-link to="/">
          <img
            class="rounded-t-lg h-48 w-full object-cover"
            :src="meal.strMealThumb"
            :alt="meal.strMeal" />
        </router-link>

        <h3></h3>

        <div class="p-4">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {{ meal.strMeal }}
          </h5>
          <div v-if="meal.strTags" class="py-3 mb-3 border-y">
            <span
              v-for="(tag, index) in splitJoin(meal.strTags)"
              :key="index"
              class="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
              >{{ tag }}</span
            >
          </div>
          <hr v-else class="mb-2" />

          <router-link
            to="/"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-800 focus:ring-4 cursor-pointer">
            Read more
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import store from "../store";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals) || [];

const splitJoin = (theText: string) => theText.split(",");

const searchMeals = async () => {
  store.dispatch("searchMeals", keyword.value);
};
</script>
