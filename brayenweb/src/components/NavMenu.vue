<template>
  <nav data-aos="fade-down" data-aos-delay="100">
    <div class="left">
      <img width="50" height="50" src="@/assets/bryn.webp" alt="bryn" />
      <h1>Brayen Luhat</h1>
    </div>
    <div class="right">
      <ul class="menuList">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <div class="hamburger">
      <label for="check" class="bar">
        <input id="check" type="checkbox" />
        <span class="top"></span>
        <span class="middle"></span>
        <span class="bottom"></span>
      </label>
    </div>
  </nav>
</template>
<style scoped>
a {
  color: white;
  display: block;
  position: relative;
}
a::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: transparent;
  bottom: 10px;
  transition: 0.2s ease-in-out;
}
a:hover::before {
  background-color: aqua;
  bottom: 0;
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
  transform: translateX(-120%);
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
input[type='checkbox'] {
  -webkit-appearance: none;
  display: none;
  visibility: hidden;
}
.bar {
  position: relative;
  cursor: pointer;
  width: 50px;
  height: 40px;
}
.bar span {
  position: absolute;
  width: 45px;
  height: 5px;
  background: #f1faee;
  border-radius: 100px;
  display: inline-block;
  transition: 0.3s ease;
  left: 0;
}
.bar span.top {
  top: 3px;
}
.bar span.middle {
  top: 17px;
}
.bar span.bottom {
  bottom: 3px;
}
input[type]:checked ~ span.top {
  transform: rotate(45deg);
  transform-origin: top left;
  width: 48px;
  left: 5px;
}
input[type]:checked ~ span.bottom {
  transform: rotate(-45deg);
  transform-origin: top left;
  width: 48px;
  bottom: -1px;
  box-shadow: 0 0 10px #495057;
}
input[type]:checked ~ span.middle {
  transform: translateX(-20px);
  opacity: 0;
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
  const menuCheck = document.querySelector('#check')
  const menuList = document.querySelector('.menuList')
  menuCheck.addEventListener('click', () => {
    menuList.classList.toggle('showMenu')
  })
})
</script>
