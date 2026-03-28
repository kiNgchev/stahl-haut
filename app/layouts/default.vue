<script setup lang="ts">
import navbar from "~/components/Navbar.vue";
import SearchBar from "~/components/SearchBar.vue";
</script>

<template>
  <header class="header-container flex wrap-normal justify-between">
    <navbar />
    <search-bar />
  </header>
  <slot />
</template>

<style scoped lang="scss">
@use "~/assets/scss/theme";

.header-container {
  padding: 10px;
  width: 1280px;

  border-left: 2px solid theme.$secondary-color;
  border-bottom: 2px solid theme.$secondary-color;
  border-right: 2px solid theme.$secondary-color;
  border-radius: 0 0 10px 10px;
}
</style>