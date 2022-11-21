<script setup>
import NavMenu from './NavMenu.vue'
import IconGithubVue from './icons/IconGithub.vue'
import IconLinkedinVue from './icons/IconLinkedin.vue'
import IconInstagramVue from './icons/IconInstagram.vue'
</script>
<template>
  <header>
    <NavMenu />
    <div class="jumbo">
      <h1>a <span>fullstack</span> web developer</h1>
    </div>
    <div class="socials">
      <a href="#"><IconGithubVue /></a>
      <a href="#"><IconLinkedinVue /></a>
      <a href="#"><IconInstagramVue /></a>
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
  font-size: 4.3rem;
  color: #fff;
  text-transform: uppercase;
  width: 38rem;
  box-sizing: border-box;
  padding: 1rem;
}
.jumbo span {
  color: var(--mainColor);
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
</style>
