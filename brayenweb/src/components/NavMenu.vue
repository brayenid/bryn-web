<template>
  <nav>
    <div class="left">
      <img width="45" height="45" src="@/assets/bryn.webp" alt="bryn" />
      <h1>Brayen Luhat</h1>
    </div>
    <div class="right">
      <ul class="menuList">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div class="hamburger">
      <input type="checkbox" id="menuCheck" />
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</template>
<style scoped>
a {
  color: white;
  display: block;
}
nav {
  display: flex;
  width: 100%;
  background-color: var(--backgroundColor);
  justify-content: space-between;
  align-items: center;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
  position: relative;
  padding: 9px;
  text-transform: uppercase;
  z-index: 40;
  font-size: 0.9rem;
  font-weight: 600;
}
.left {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.left h1 {
  display: none;
}
.left img {
  border-radius: 50%;
}
.menuList {
  position: absolute;
  left: 0;
  top: 4.1rem;
  width: 100%;
  background-color: var(--backgroundColor);
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  box-sizing: border-box;
  padding: 1rem;
  z-index: 10;
  transform: translateX(-100%);
  transition: 0.2s ease-in-out;
}
.showMenu {
  transform: translateX(0);
}
.right ul li a {
  padding: 1rem 0;
}
.menuAppear {
  transform: translateX(0);
}
.hamburger {
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
}
.hamburger span {
  width: 60%;
  height: 2px;
  background-color: white;
  transition: 0.2s ease-in-out;
}
.hamburger input {
  position: absolute;
  width: 30px;
  height: 30px;
  opacity: 0;
  z-index: 10;
  cursor: pointer;
}
.hamburger input:checked ~ span:nth-child(2) {
  transform-origin: 0;
  transform: rotate(45deg) translateX(-3px);
}
.hamburger input:checked ~ span:nth-child(3) {
  transform: scale(0);
}
.hamburger input:checked ~ span:nth-child(4) {
  transform-origin: 0;
  transform: rotate(-45deg) translateX(-3px);
}
@media screen and (min-width: 700px) {
  .menuList {
    position: static;
    flex-direction: row;
    transform: translateX(0);
    padding: 0;
  }
  .menuList li a {
    padding: 0;
  }
  .hamburger {
    display: none;
  }
  .left h1 {
    display: block;
    color: white;
  }
}
</style>
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const menuCheck = document.querySelector('#menuCheck')
  const menuList = document.querySelector('.menuList')
  menuCheck.addEventListener('click', () => {
    menuList.classList.toggle('showMenu')
  })
})
</script>
