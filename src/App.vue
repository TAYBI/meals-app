<script setup></script>

<template>
  <div class="bg-gray-100 h-full">
    <header
      class="bg-white shadow-md h-14 flex items-stretch justify-between px-6">
      <router-link
        class="inline-flex items-center h-full px-4 font-semibold transition-all hover:font-extrabold hover:border-b"
        :to="{ name: 'home' }">
        Home</router-link
      >

      <div class="flex gap-4 h-full items-center">
        <router-link
          class="inline-flex items-center h-full px-4 transition-all hover:font-semibold hover:border-b"
          :to="{ name: 'ByName' }">
          Search Meals</router-link
        >
        <router-link
          class="inline-flex items-center h-full px-4 transition-all hover:font-semibold hover:border-b"
          :to="{ name: 'ByLetter' }">
          Meals By letrer</router-link
        >
        <router-link
          class="inline-flex items-center h-full px-4 transition-all hover:font-semibold hover:border-b"
          :to="{ name: 'ByIngrediant' }">
          Meas By ingrediants</router-link
        >
      </div>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
