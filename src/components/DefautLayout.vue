<template>
  <div class="bg-gray-100 h-full">
    <Navbar />
    <main class="bg-gray-100 h-full">
      <RouterView />
    </main>
  </div>
</template>
<script setup>
import Navbar from "./Navbar.vue";
</script>
<style></style>
