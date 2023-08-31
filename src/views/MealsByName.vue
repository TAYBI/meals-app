<template>
  <div class="conatainer p-6 bg-grey-400">
    <input
      v-model="keyword"
      type="text"
      class="bg-grey border-2 border-blue-200 focus:border-green-200 rounded-lg w-full"
      placeholder="Search for Meals"
      @change="searchMeals" />

    <pre>{{ meals }}</pre>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import store from "../store";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

const searchMeals = async () => {
  store.dispatch("searchMeals", keyword.value);
};
</script>
