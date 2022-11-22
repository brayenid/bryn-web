<script setup>
import IconLeftVue from '../components/icons/IconLeft.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="aboutContainer">
    <RouterLink to="/"><IconLeftVue /></RouterLink>
    <div class="aboutMe">
      <h1>About Me</h1>
      <p>
        I don't know if anyone will ever open this page, but hey. Once again, my name is Brayen Luhat you can call me Brayen. I live in a small district in East Kalimantan (Kalimantan), West Kutai, Indonesia. I am an independent Web
        Developer student and always will be. My main programming language is Javascript (JS). I usually My name is Brayen Luhat, you can call me Brayen. I live in a small district in East Kalimantan (Kalimantan), West Kutai, Indonesia. I
        am an independent Web Developer student and always will be. My main programming language is Javascript (JS). I usually work as a fullstack JS developer. <br /><br />
        In my journey as a programmer, I learned a lot from great programming teachers, especially in web development which is my focus. I learned from teachers like Shandika Galih, Eko Kurniawan Khannedy and also many other teachers, with
        structured teaching materials. I am also learning programmatically on the Dicoding platform, and I am also currently undergoing an Advanced Class Front End Web Development program held by IDCamp via dicoding since last May. I am
        also a member of Kelasfulstack.id organized by Codepolitan. Along the way through these learning programs, I will also be developing some independent projects, and if you are interested in working with me, you can contact me and
        talk about your plans.
      </p>
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
  padding: 2rem;
  box-sizing: border-box;
  min-height: 100vh;
}
.aboutMe h1 {
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  position: relative;
  padding: 0.7rem 0;
  width: max-content;
}
.aboutMe h1::before {
  content: '';
  width: 100%;
  height: 4px;
  background-color: var(--mainColor);
  position: absolute;
  bottom: 0;
}
.aboutMe p {
  font-size: 1.1rem;
  line-height: 1.7rem;
  font-weight: 300;
}
.aboutMe a {
  padding: 3rem;
}
</style>
