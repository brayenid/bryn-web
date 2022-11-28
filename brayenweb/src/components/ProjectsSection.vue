<script setup>
import datas from '../Data.json'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation, Pagination } from 'swiper/core'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import IconRight from './icons/IconsRight.vue'
import IconLeft from './icons/IconLeft.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
SwiperCore.use([Navigation, Pagination])
const { projects } = datas
</script>
<template>
  <div class="projects">
    <div class="projectsTop">
      <h1>projects</h1>
      <p>Here are a few projects that i made (Front-End and Back-End)</p>
    </div>
    <div data-aos="zoom-in-up" class="projectsBottom">
      <swiper
        :slides-per-view="1"
        :space-between="30"
        :navigation="{
          nextEl: '.next',
          prevEl: '.prev'
        }"
        :pagination="{
          el: '.pagination',
          type: 'fraction'
        }"
        :breakpoints="{
          '768': {
            slidesPerView: 2,
            spaceBetween: 30,
            direction: 'horizontal'
          }
        }"
      >
        <swiper-slide v-for="data in projects" :key="data.id">
          <div class="swipeContainer">
            <div class="swipeImg">
              <a :href="data.url" target="_blank">
                <img :src="data.image" :alt="data.name" :title="data.name" />
              </a>
            </div>
            <div class="swipeDetail">
              <h3>{{ data.name }}</h3>
              <p>{{ data.desc }}</p>
            </div>
          </div>
        </swiper-slide>
        <div class="pagination"></div>
      </swiper>
      <button class="prev"><IconLeft /></button>
      <button class="next"><IconRight /></button>
    </div>
  </div>
</template>
<style scoped>
.projects {
  width: 100%;
}
.swipeContainer {
  position: relative;
  overflow: hidden;
  border-radius: 0.8rem;
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.1);
}
.swipeImg img {
  display: block;
}
.swipeDetail {
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.841);
  transition: 0.3s ease-in-out;
  transform: translateY(100%);
  width: 100%;
}
.swipeContainer:hover .swipeDetail {
  transform: translateY(0);
}
.swipeDetail h3 {
  font-size: 1.2rem;
  font-weight: bolder;
}
.swipeDetail p {
  font-size: 0.8rem;
}
.projectsTop {
  text-align: center;
  line-height: 1.8rem;
  padding: 3rem;
}
.projectsTop h1 {
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
  color: var(--headerColor);
}
.projects p {
  margin-top: 1rem;
  line-height: 1.3rem;
}
.projectsBottom {
  position: relative;
  box-sizing: border-box;
  padding: 1rem 4rem 5rem;
}
.pagination {
  font-size: 0.9rem;
  text-align: center;
  margin-top: 2rem;
}
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 60%;
  z-index: 10;
}
.prev,
.next {
  transform: scale(1.5);
}
.prev {
  left: 1rem;
}
.next {
  right: 1rem;
}
@media screen and (min-width: 768px) {
  .projectsBottom {
    padding: 1rem 5rem 5rem;
  }
}
</style>
