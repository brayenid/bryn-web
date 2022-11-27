<template>
  <div class="capabilities">
    <div class="skill">
      <i class="devicon-javascript-plain"></i>
      <div class="skillName">Javascript</div>
    </div>
    <div class="skill">
      <i class="devicon-css3-plain"></i>
      <div class="skillName">CSS</div>
    </div>
    <div class="skill">
      <i class="devicon-tailwindcss-plain"></i>
      <div class="skillName">Tailwind CSS</div>
    </div>
    <div class="skill">
      <i class="devicon-vuejs-plain"></i>
      <div class="skillName">Vue JS</div>
    </div>
  </div>
</template>
<style scoped>
.capabilities {
  min-height: 12rem;
  width: 100%;
  display: grid;
  justify-content: space-around;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
}
.capabilities .skill {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background-color: #fafafa;
  color: #aaa;
  transition: all 0.1s ease-in-out;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.01);
}

.capabilities .skill i {
  transform: translateY(0.8rem);
  transition: all 0.3s ease-in-out;
}
.capabilities .skill:hover i {
  transform: scale(1.2);
}
.capabilities .skill:nth-child(1):hover {
  background-color: #ffeea3;
  color: #f49d1a;
}
.capabilities .skill:nth-child(2):hover {
  background-color: #96d5ff;
  color: #1a75f4;
}
.capabilities .skill:nth-child(3):hover {
  background-color: #9efff4;
  color: #18b9d9;
}
.capabilities .skill:nth-child(4):hover {
  background-color: #9affd7;
  color: #1fab6a;
}
.skillName {
  transform: scale(0);
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  margin-top: 0.5rem;
  transition: all 0.3s ease-in-out;
}
.capabilities .skill:hover .skillName {
  transform: scale(1);
}
@media screen and (min-width: 780px) {
  .capabilities {
    min-height: 6rem;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
