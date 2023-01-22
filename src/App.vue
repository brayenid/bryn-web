<script setup>
import { RouterView } from 'vue-router'
import NavRouter from './components/NavRouter.vue'
</script>
<template>
  <div>
    <NavRouter />
    <RouterView v-slot="{ Component, route }">
      <Transition name="fade" mode="out-in">
        <div :key="route.name">
          <component :is="Component"></component>
        </div>
      </Transition>
    </RouterView>
  </div>
</template>
<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-in-out;
}
</style>
