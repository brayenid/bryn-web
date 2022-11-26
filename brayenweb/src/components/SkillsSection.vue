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
  background-color: #fff;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;
  box-sizing: border-box;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}
.skills h2 {
  font-size: 1.3rem;
  font-weight: bolder;
  color: #333;
}
.skills span {
  padding: 0.7rem 1.5rem;
  color: #333;
  /* box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); */
  border-radius: 0.3rem;
  font-size: 0.9rem;
  transition: 0.3s ease-in-out;
  border: 2px solid;
}
.skills span::before {
  content: '';
  width: 0;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -10;
  transition: 0.3s ease-in-out;
}
.skillsItem {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
.skills span:nth-child(1) {
  border-color: #fbedac;
  position: relative;
}
.skills span:nth-child(1)::before {
  background-color: #fbedac;
}
.skills span:nth-child(1):hover::before {
  width: 70%;
}
.skills span:nth-child(2) {
  border-color: #a2d2ff;
}
.skills span:nth-child(2)::before {
  background-color: #a2d2ff;
}
.skills span:nth-child(2):hover::before {
  width: 80%;
}
.skills span:nth-child(3) {
  border-color: #a8e2dd;
}
.skills span:nth-child(3)::before {
  background-color: #a8e2dd;
}
.skills span:nth-child(3):hover::before {
  width: 50%;
}
.skills span:nth-child(4) {
  border-color: #66c6a3;
}
.skills span:nth-child(4)::before {
  background-color: #66c6a3;
}
.skills span:nth-child(4):hover::before {
  width: 25%;
}
@media screen and (min-width: 800px) {
  .skills {
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    max-width: 800px;
    margin: -70px auto 0;
    border-radius: 0.8rem;
    box-shadow: 0px 1px 4px rgba(83, 83, 83, 0.1);
  }
  .skillsItem {
    justify-content: start;
  }
}
</style>
