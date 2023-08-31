<template>
  <section
    v-if="meal"
    class="bg-gradient-to-r from-amber-300 via-orange-400 to-yellow-500">
    <div
      class="grid container mx-auto max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="drop-shadow-[0_2px_2px_rgba(255,255,255)] mb-3 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          {{ meal.strMeal }}
        </h1>

        <h3 class="text-2xl mb-4 drop-shadow-[0_2px_2px_rgba(255,255,255)]">
          {{ meal.strCategory }} - {{ meal.strArea }}
          <div v-if="meal.strTags" class="py-3 mb-3">
            <span
              v-for="(tag, index) in meal.strTags.split(',')"
              :key="index"
              class="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
              >{{ tag }}</span
            >
          </div>
        </h3>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img
          :src="meal.strMealThumb"
          alt="mockup "
          class="rounded-xl shadow-2xl border-2" />
      </div>
    </div>
  </section>

  <div v-if="meal" class="container mx-auto p-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ol>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }} . {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ol>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>

  <!-- <div>
    <pre>{{ meal }}</pre>
  </div> -->
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import { useRoute } from "vue-router";

const route = useRoute();
const meal = ref();

onMounted(async () => {
  const response = await axiosClient.get("lookup.php?i=" + route.params.id);
  meal.value = response.data.meals[0];

  console.log(meal.value);
});
</script>
<style></style>
