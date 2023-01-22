<script setup>
import { RouterView } from 'vue-router'
import NavRouter from './components/NavRouter.vue'
</script>
<template>
  <NavRouter />
  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </RouterView>
</template>
<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}
</style>
