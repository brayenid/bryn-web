<script setup>
const thisYear = new Date().getFullYear()
</script>
<template>
  <p>© {{ thisYear }}</p>
</template>
<style scoped>
p {
  color: #666;
  font-size: 0.8rem;
}
</style>
