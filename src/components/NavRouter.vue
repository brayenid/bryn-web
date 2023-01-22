<script setup>
import { RouterLink } from 'vue-router'
import HamburgerButton from './HamburgerButton.vue'
import { ref } from 'vue'
import { useHamburgerButton } from '../store/hamburger'
const menuList = ref()
const hamburgerButton = ref()
const closeMenu = () => {
  useHamburgerButton().hamburgerEl.click()
}
</script>

<template>
  <nav>
    <ul ref="menuList" @click="closeMenu">
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
    <HamburgerButton class="hamburger" :menu-list="menuList" ref="hamburgerButton" />
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
  align-items: center;
  padding: 1rem 3rem;
}
nav ul {
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  height: 3rem;
  top: 0;
  position: fixed;
  flex-direction: column;
  background-color: beige;
  width: 100%;
  height: 100vh;
  z-index: 10;
  transform: translateY(-100%);
  transition: 0.3s ease-in-out;
}
nav ul span {
  display: none;
}
nav ul li a {
  font-size: 2rem;
  font-weight: 300;
  padding: 1rem;
}
.activeLinkNav {
  font-weight: 500;
}
span {
  font-weight: 300;
  font-size: 0.5rem;
}
.show {
  transform: translate(0);
}
@media screen and (min-width: 1000px) {
  nav {
    justify-content: end;
  }
}
@media screen and (min-width: 770px) {
  nav ul {
    display: flex;
    position: static;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    height: 3rem;
    left: 0;
    top: 0;
    width: auto;
    background-color: transparent;
    transform: translate(0);
  }
  nav ul span {
    display: block;
  }
  .hamburger {
    display: none;
  }
  nav ul li a {
    font-size: 1.1rem;
    font-weight: 300;
  }
}
</style>
