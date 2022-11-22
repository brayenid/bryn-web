<script setup>
import NavMenu from './NavMenu.vue'
import IconGithubVue from './icons/IconGithub.vue'
import IconLinkedinVue from './icons/IconLinkedin.vue'
import IconInstagramVue from './icons/IconInstagram.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
</script>
<template>
  <header>
    <NavMenu />
    <div data-aos="zoom-in-up" data-aos-delay="1000" class="jumbo">
      <h1>a <span>fullstack</span> web developer</h1>
    </div>
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="1200" class="socials">
      <a href="https://github.com/brayenid" target="_blank"><IconGithubVue /></a>
      <a href="https://www.linkedin.com/in/brayenluhat/" target="_blank"><IconLinkedinVue /></a>
      <a href="https://www.instagram.com/brayenluhat/" target="_blank"><IconInstagramVue /></a>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: var(--backgroundColor);
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 1.5rem;
  position: relative;
  z-index: 30;
}
.jumbo {
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.jumbo h1 {
  font-family: 'Roboto Mono', sans-serif;
  font-size: 2.4rem;
  width: 20.8rem;
  color: #fff;
  text-transform: uppercase;
  box-sizing: border-box;
  padding: 1rem;
  transform: translateY(-1.8rem);
}
.jumbo span {
  color: var(--mainColor);
  /* text-shadow: rgba(86, 232, 169, 0.334) 1px 1px 4px; */
}
.socials {
  background-color: var(--mainColor);
  width: 2rem;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 0.5rem;
  align-items: center;
  border-radius: 0.4rem 0.4rem 0 0;
}
.socials a {
  color: var(--backgroundColor);
}
@media screen and (min-width: 400px) {
  .jumbo h1 {
    font-size: 2.5rem;
    width: 25.49rem;
  }
}
@media screen and (min-width: 600px) {
  .jumbo h1 {
    font-size: 4rem;
    width: 34rem;
  }
}
</style>
