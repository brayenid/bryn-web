<script setup>
import { ref } from 'vue'
const year = ref(new Date().getFullYear())
</script>
<template>
  <div class="credit">
    <p>
      © <span>{{ year }}</span> Brayen Luhat - Made in <span class="love">Sendawar</span>
    </p>
  </div>
</template>
<style scoped>
.credit {
  background-color: var(--backgroundColor);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 8rem;
  color: white;
}
.love {
  color: var(--mainColor);
}
</style>
