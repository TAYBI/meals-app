<template>
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
</template>
