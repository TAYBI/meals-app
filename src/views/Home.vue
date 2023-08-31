<template>
  <div class="conatainer p-6 bg-grey-400">
    <input
      type="text"
      class="bg-grey rounded-lg w-full"
      placeholder="Search for Meals" />

    <div class="flex gap-1 justify-center gap-2 mt-2">
      <router-link
        class="uppercase"
        v-for="(letter, index) in letters.split('')"
        :key="index"
        :to="{ name: 'MealList', params: { letter } }">
        {{ letter }}</router-link
      >
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient";

const letters = "abcdefghijklmnopqrstuvwxyz";
const ingrediants = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("list.php?i=list");
  ingrediants.value = response.data;
});
</script>
<style></style>
