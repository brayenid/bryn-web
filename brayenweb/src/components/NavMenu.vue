<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const menuCheck = document.querySelector('#check')
  const menuList = document.querySelector('.menuList')
  menuCheck.addEventListener('click', () => {
    menuList.classList.toggle('showMenu')
  })
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.menuList') && !e.target.closest('.hamburger') && menuList.classList.contains('showMenu')) {
      menuCheck.click()
    }
  })
  const eyes = document.querySelectorAll('.eye')
  const anchor = document.querySelector('.eyeContainer')
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX
    const mouseY = e.clientY
    const rect = anchor.getBoundingClientRect()
    const anchorX = rect.left + rect.width / 2
    const anchorY = rect.top + rect.height / 2
    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)
    eyes.forEach((eye) => {
      eye.style.transform = `rotate(${90 + angleDeg}deg)`
    })
  })
  const angle = (cx, cy, ex, ey) => {
    const dy = ey - cy
    const dx = ex - cx
    const rad = Math.atan2(dy, dx)
    const deg = (rad * 180) / Math.PI
    return deg
  }
})
const getElementPosition = (elementQuery) => {
  const element = document.querySelector(elementQuery).offsetTop - 65
  return element
}
const gotoElement = (elementQuery) => {
  const elementPosition = getElementPosition(elementQuery)
  window.scrollTo(0, elementPosition)
}
</script>
<template>
  <nav data-aos="fade-down" data-aos-delay="100">
    <div class="left">
      <div class="eyeContainer">
        <div class="eyeClover">
          <div class="eyeAware">
            <div class="eye"><div class="pupil"></div></div>
          </div>
        </div>
        <div class="eyeClover">
          <div class="eyeAware">
            <div class="eye"><div class="pupil"></div></div>
          </div>
        </div>
      </div>
      <h1>Brayen Luhat</h1>
    </div>
    <div class="right">
      <ul class="menuList">
        <li><a href="/">Home</a></li>
        <li><a class="aboutClick" @click.prevent="gotoElement('#about')" href="#about">About</a></li>
        <li><a @click.prevent="gotoElement('#projects')" href="#projects">Projects</a></li>
        <li><a @click.prevent="gotoElement('#contact')" href="#contact">Contact</a></li>
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
  background-color: var(--accentColor);
  bottom: 0;
}
nav {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
  position: relative;
  padding: 9px 2rem;
  text-transform: uppercase;
  z-index: 40;
  font-size: 0.9rem;
  font-weight: 600;
  position: fixed;
  background-color: var(--backgroundColor);
  top: 0;
  left: 0;
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
  height: 40px;
  width: 40px;
}
.menuList {
  position: absolute;
  left: 0;
  top: 3.7rem;
  width: 100%;
  background-color: #333;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  box-sizing: border-box;
  padding: 1rem 2rem;
  z-index: 10;
  transform: translateX(-120%);
  opacity: 0;
  transition: 0.2s ease-in-out;
}
.showMenu {
  transform: translateX(0);
  opacity: 1;
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
  transform: scale(0.7) translateY(-1px);
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
.eyeContainer {
  width: 60px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
}
.eyeClover {
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}
.eyeClover::before,
.eyeClover::after {
  content: '';
  transition: 0.1s ease-in-out;
  background-color: var(--mainColor);
  width: 100%;
  height: 50%;
  max-height: 0;
  position: absolute;
  z-index: 10;
  animation: blink 6s infinite;
}
.eyeClover::before {
  top: 0;
}
.eyeClover::after {
  bottom: 0;
}
@keyframes blink {
  0% {
    max-height: 0;
  }
  49% {
    max-height: 0;
  }
  50% {
    max-height: 100px;
  }
  51% {
    max-height: 0;
  }
  100% {
    max-height: 0;
  }
}
.eye {
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.2);
}
.pupil {
  height: 9px;
  width: 9px;
  background-color: #333;
  border-radius: 50%;
  margin-top: 7px;
}
.eyeAware {
  position: relative;
}
.eyeAware::before,
.eyeAware::after {
  content: '';
  position: absolute;
  background-color: var(--mainColor);
  height: 35%;
  max-height: 0;
  width: 100%;
  z-index: 11;
  transition: 0.1s ease-in-out;
}
.eyeAware::before {
  top: 0;
}
.eyeAware::after {
  bottom: 0;
}
.eyeContainer:hover .eyeAware::before,
.eyeContainer:hover .eyeAware::after {
  max-height: 10px;
}
@media screen and (min-width: 700px) {
  nav {
    padding: 9px 2rem;
  }
  .menuList {
    position: static;
    flex-direction: row;
    transform: translateX(0);
    padding: 0;
    background-color: transparent;
    opacity: 1;
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
  .left img {
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }
}
</style>
