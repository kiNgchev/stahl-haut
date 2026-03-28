<script setup lang="ts">
import NavbarItem from "~/components/NavbarItem.vue";
import homeIcon from "~/assets/public/icons/home_icon.svg?url"

const route = useRoute();
</script>

<template>
  <div class="navbar-container gap-3 flex justify-evenly">
    <navbar-item title="Home" :icon="homeIcon" path="/" />
    <navbar-item title="Chats" :icon="homeIcon" path="/chats" />
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/scss/theme";
</style>