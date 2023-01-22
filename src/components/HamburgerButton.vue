<script setup>
import { ref } from 'vue'
const props = defineProps({
  menuList: Object
})
const hamburger = ref()
const hamburgerClick = () => {
  props.menuList.classList.toggle('show')
  hamburger.value.classList.toggle('hamburgerFixed')
}
</script>
<template>
  <div class="container" @click="hamburgerClick" ref="hamburger">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<style scoped>
.container {
  width: 40px;
  height: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 11;
}
span {
  width: 100%;
  height: 3px;
  background-color: black;
  transition: 0.3s ease-in-out;
}
span:nth-child(2) {
  transform-origin: 0;
}
span:nth-child(4) {
  transform-origin: 0;
}
.container input {
  position: absolute;
  top: 0;
  left: 0;
  width: 150%;
  height: 150%;
  transform: translate(-14px, -9px);
  opacity: 0;
  cursor: pointer;
  z-index: 30;
}
input:checked ~ span:nth-child(2) {
  transform: rotate(45deg) translate(2px, -8px);
}
input:checked ~ span:nth-child(3) {
  transform: translateX(-30px) scale(0);
  opacity: 0;
}
input:checked ~ span:nth-child(4) {
  transform: rotate(-45deg) translate(1px, 7px);
}
.hamburgerFixed {
  position: fixed;
  top: 1rem;
}
</style>
