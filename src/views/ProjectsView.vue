<script setup>
import datas from '../Data.json'
import CreditYear from '../components/CreditYear.vue'
const { projects } = datas
</script>
<template>
  <div class="container">
    <div class="title">
      <h1><span>My</span> Projects</h1>
      <p>These are the projects that I made. I create these projects with Javascript and some cool technologies.</p>
    </div>
    <main>
      <div class="project" v-for="data in projects" :key="data.id">
        <a :href="data.url" target="_blank" rel="noopener noreferrer">
          <div class="imgContainer">
            <img :src="data.image" :alt="data.name" loading="lazy" />
          </div>
        </a>
        <div class="detail">
          <a :href="data.url" target="_blank" rel="noopener noreferrer">
            <h2>{{ data.name }}</h2></a
          >
          <p>{{ data.desc }}</p>
          <div class="stacksContainer">
            <p class="stack" v-for="stack in data.stack" :key="stack.id">#{{ stack }}</p>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <CreditYear />
    </footer>
  </div>
</template>
<style scoped>
.container {
  margin: 7rem auto 1rem;
  width: 100%;
  max-width: 850px;
}
.title {
  text-align: center;
  margin-bottom: 2rem;
}
.title h1 {
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 1rem;
}
.title h1 span {
  font-weight: 500;
}
.title p {
  max-width: 420px;
  margin: 0 auto;
  line-height: 1.5rem;
  font-weight: 300;
  font-size: 1.1rem;
}
main {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}
.project {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.imgContainer {
  min-height: 150px;
  background-color: #ddd;
}
.project img {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  transition: 0.2s ease-in-out;
  display: block;
}
.project:hover img {
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
}
.project .detail {
  text-align: center;
}
.project .detail h2 {
  margin: 1rem 0;
  font-weight: 600;
}
.project .detail p {
  font-weight: 300;
  margin-bottom: 1rem;
  line-height: 1.2rem;
}
.stacksContainer {
  margin-bottom: 1rem;
}
.stack {
  margin: 0.5rem;
  font-weight: 300;
  display: inline;
  font-size: 0.8rem;
}
footer {
  text-align: center;
  margin-top: 2rem;
  padding: 2rem;
}
</style>
