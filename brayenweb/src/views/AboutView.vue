<script setup>
import IconExitVue from '../components/icons/IconExit.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="aboutContainer">
    <div class="aboutMe">
      <div class="exit">
        <RouterLink class="exit" to="/" aria-label="Homepage"><IconExitVue /></RouterLink>
      </div>
      <h1>Hello World!</h1>
      <article>
        I don't know if anyone will ever open this page, but hey. Once again, my name is Brayen Luhat you can call me Brayen. I live in a small district in East Kalimantan (Kalimantan), West Kutai, Indonesia. I am an independent Web
        Developer learner and will always be. My main programming language is Javascript (JS). I usually work as a fullstack JS developer. <br /><br />
        As a web programming enthusiast, I learned a lot from great programming teachers. I learned from teachers like Shandika Galih, Eko Kurniawan Khannedy and also many other teachers. I am also learning programmatically on the
        <a href="https://www.dicoding.com/users/brayenluhat" target="_blank">Dicoding</a> platform, and currently undergoing an Advanced Class Front End Web Development program held by IDCamp via Dicoding since last May. I am also a member
        of Kelasfulstack.id organized by Codepolitan. Along the way through these learning programs, I will also be developing some independent projects, and if you are interested in working with me, you can contact me and talk about your
        plans. <br /><br />
        You can find me on <a href="https://github.com/brayenid" target="_blank">Github</a>, <a href="https://www.linkedin.com/in/brayenluhat/" target="_blank">Linkedin</a>, and
        <a href="https://www.instagram.com/brayenluhat/" target="_blank">Instagram</a>
      </article>
    </div>
  </div>
</template>
<style scoped>
.aboutContainer {
  background-color: var(--secondaryColor);
  box-sizing: border-box;
  padding: 2rem;
}
.aboutMe {
  max-width: 700px;
  margin: auto;
  padding: 0 1rem 1rem;
  box-sizing: border-box;
  min-height: 100vh;
  overflow: hidden;
}
.aboutMe h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  position: relative;
  padding: 0.7rem 0;
}
.aboutMe article {
  font-size: 1.1rem;
  line-height: 2rem;
  font-weight: 300;
}
.aboutMe article a {
  padding: 0;
  color: inherit;
  font-weight: 400;
  position: relative;
  display: inline-block;
}
.aboutMe article a::before {
  content: '';
  position: absolute;
  bottom: 0.2rem;
  width: 30%;
  background-color: var(--accentColorLighter);
  height: 3px;
  transition: 0.2s ease-in-out;
}
.aboutMe article a:hover:before {
  width: 100%;
  background-color: var(--accentColor);
}
.aboutMe a {
  padding: 1rem;
}
.exit {
  text-align: right;
  padding: 1rem 0;
}
.exit a {
  padding: 0.5rem;
}
.exit a:hover {
  color: var(--mainColor);
}
a {
  color: var(--backgroundColor);
  transition: 0.2s ease-in-out;
}
a:active {
  color: var(--mainColor);
}
</style>
