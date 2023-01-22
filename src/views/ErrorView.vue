<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="error">
    <h1>404</h1>
    <p>Back to <RouterLink to="/">Homepage</RouterLink></p>
  </div>
</template>
<style scoped>
.error {
  color: var(--secondaryColor);
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
}
p {
  font-size: 1rem;
  color: var(--secondaryColor);
}
a {
  color: var(--secondaryColor);
  text-decoration: underline;
}
h1 {
  font-size: 4rem;
  font-weight: bold;
}
</style>
