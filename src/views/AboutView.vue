<script setup>
import IconDownload from '../components/icons/IconDownload.vue'
import CreditYear from '../components/CreditYear.vue'
</script>
<template>
  <div class="container">
    <div class="left">
      <h1>About <span>Me</span></h1>
      <p>
        My name is Brayen Luhat, You can call me Brayen. I live in a small district in East Kalimantan (Borneo), West Kutai, Indonesia. I'm an independent Web Developer learner and will always be. My main programming language is Javascript
        (JS). I usually work with Javascript and some cool technologies like Vue JS, Tailwind CSS, ExpressJS, MongoDB, and curently learning Hapi JS and PostgreSQL.
      </p>
      <a href="/resume.pdf" target="_blank" aria-label="Download Resume"><IconDownload /> Resume </a>
    </div>
    <div class="right">
      <div class="imgContainer">
        <img src="@/assets/bryn.webp" alt="bryn" title="bryn" />
      </div>
    </div>
  </div>
  <footer>
    <CreditYear />
  </footer>
</template>
<style scoped>
.container {
  margin: 7rem auto;
  width: 100%;
  max-width: 850px;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-direction: column;
  padding: 0 3rem;
}
.left {
  width: 100%;
  order: 2;
}
.left h1 {
  font-size: 2.8rem;
  font-weight: 300;
}
.left h1 span {
  font-weight: 500;
}
.left p {
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.8rem;
  margin: 2rem 0;
}
.left a {
  background-color: var(--secondaryColor);
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: start;
  width: min-content;
  gap: 0.4rem;
  color: white;
  font-weight: 300;
  border: 1px solid transparent;
  transition: 0.2s ease-in-out;
}
.left a:hover {
  background-color: white;
  border-color: var(--secondaryColor);
  color: inherit;
}
.right {
  width: 100%;
  order: 1;
}
.imgContainer {
  min-height: 250px;
  width: 100%;
  background-color: #eee;
}
.right img {
  width: max-content;
  display: block;
}
footer {
  text-align: center;
  padding: 2rem;
}

@media screen and (min-width: 770px) {
  .left h1 {
    font-size: 3rem;
  }
  .left p {
    font-size: 1.2rem;
  }
}

@media screen and (min-width: 710px) {
  .container {
    flex-direction: row;
    padding: 0 2rem;
  }
  .left {
    width: 50%;
    padding-top: 6rem;
    order: 1;
  }
  .right {
    width: 50%;
    order: 2;
  }
}
</style>
