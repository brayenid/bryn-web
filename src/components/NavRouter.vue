<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <span>|</span>
      <li>
        <RouterLink to="/about">About</RouterLink>
      </li>
      <span>|</span>
      <li>
        <RouterLink to="/projects">Projects</RouterLink>
      </li>
      <span>|</span>
      <li>
        <RouterLink to="/contact">Contact</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav ul {
  display: flex;
  gap: 0.5rem;
  justify-content: end;
  align-items: center;
  height: 3rem;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  padding: 2rem;
}
nav ul li a {
  padding: 0.5rem;
  font-size: 1.1rem;
  font-weight: 300;
}
.activeLinkNav {
  font-weight: 500;
}
</style>
