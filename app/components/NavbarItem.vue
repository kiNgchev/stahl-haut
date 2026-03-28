<script setup lang="ts">
const { title, icon, path } = defineProps<{ title: string, icon: string, path: string }>()
const route = useRoute();
</script>

<template>
  <div class="navbar-item-container flex wrap-normal justify-evenly content-center text-center" :class="{ isActive: route.path === path }">
    <nuxt-link class="navbar-item-link flex wrap-normal justify-evenly content-center text-center" :to="path">
      <img :src="icon" alt="icon"/>
      {{ title }}
    </nuxt-link>
  </div>
</template>

<style scoped lang="scss">
@use 'sass:color';
@use '~/assets/scss/theme';

.navbar-item-container {
  padding: 10px;
  width: 100px;
  border-radius: 10px;

  flex-direction: column;

  .navbar-item-link {
    font-size: 1.2rem;
  }

  &.isActive {
    font-size: 1.3rem;

    background: color.adjust(theme.$neutral-color, $lightness: 10%);
  }
}
</style>