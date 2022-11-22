<template>
  <div class="skills">
    <h2>Skills :</h2>
    <div class="skillsItem">
      <span data-aos="zoom-in">#Javascript</span>
      <span data-aos="zoom-in" data-aos-delay="300">#CSS</span>
      <span data-aos="zoom-in" data-aos-delay="500">#Tailwind</span>
      <span data-aos="zoom-in" data-aos-delay="700">#Vue</span>
    </div>
  </div>
</template>
<style scoped>
.skills {
  background-color: #fafafa;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;
  box-sizing: border-box;
  gap: 1rem;
  justify-content: center;
}
.skills h2 {
  font-size: 1.2rem;
  font-weight: bolder;
  color: #333;
}
.skills span {
  padding: 0.7rem 1.5rem;
  color: #333;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
  font-size: 0.9rem;
}
.skillsItem {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.skills span:nth-child(1) {
  background-color: #fbedac;
}
.skills span:nth-child(1):hover {
  background-color: #f8eaab;
}
.skills span:nth-child(2) {
  background-color: #a2d2ff;
}
.skills span:nth-child(2):hover {
  background-color: #adcdf9;
}
.skills span:nth-child(3) {
  background-color: #a8e2dd;
}
.skills span:nth-child(3):hover {
  background-color: #b8e2dd;
}
.skills span:nth-child(4) {
  background-color: #66c6a3;
}
.skills span:nth-child(4):hover {
  background-color: #61bb9a;
}
@media screen and (min-width: 780px) {
  .skills {
    flex-direction: row;
    align-items: center;
  }
}
</style>
