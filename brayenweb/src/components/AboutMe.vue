<script setup>
import { RouterLink } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
</script>
<template>
  <div class="aboutContainer">
    <div class="about">
      <div data-aos="fade-up" class="leftAbout">
        <h1>#about</h1>
        <p>
          My name is Brayen Luhat, You can call me Brayen. I live in a small district in East Kalimantan (Borneo), West Kutai, Indonesia. I'm an independent Web Developer learner and will always be. My main programming language is
          Javascript (JS). I usually work as a JS fullstack developer. <RouterLink class="aboutLink" to="/about">Know more</RouterLink>
        </p>
      </div>
      <div data-aos="fade-down" data-aos-delay="200" class="rightAbout">
        <div class="image">
          <img src="@/assets/bryn.webp" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.aboutContainer {
  background-color: var(--mainColor);
}
.about {
  display: flex;
  flex-direction: column;
  max-width: 48rem;
  margin: auto;
  gap: 1.5rem;
  min-height: 100vh;
  align-items: center;
  box-sizing: border-box;
  padding: 2rem;
}
.leftAbout {
  order: 2;
  max-width: 350px;
}
.leftAbout p {
  font-weight: 300;
  line-height: 1.6rem;
  padding: 1.5rem 0;
  font-size: 1.2rem;
}
.leftAbout h1 {
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
  color: #222;
}
.rightAbout {
  order: 1;
}
.rightAbout img {
  max-width: 350px;
  transition: 0.3s ease-in-out;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
.rightAbout img:hover {
  clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%);
}
.aboutLink {
  font-weight: 500;
  border-radius: 0.3rem;
  transition: 0.3s ease-in-out;
  color: #222;
  position: relative;
}
.aboutLink::before {
  content: '';
  position: absolute;
  bottom: -0.1rem;
  width: 20%;
  height: 2px;
  background-color: rgb(105, 166, 166);
  transition: 0.2s ease-in-out;
}
.aboutLink:hover::before {
  width: 100%;
  background-color: aquamarine;
}
@media screen and (min-width: 780px) {
  .about {
    flex-direction: row;
    gap: 3rem;
  }
  .rightAbout img {
    clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%);
    transition: 0.3s ease-in-out;
  }
  .rightAbout img:hover {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  .leftAbout {
    order: 1;
  }
  .rightAbout {
    order: 2;
  }
}
</style>
