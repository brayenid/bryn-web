<script setup>
import HeaderSectionVue from '../components/HeaderSection.vue'
import AboutMe from '../components/AboutMe.vue'
import SkillsSectionVue from '../components/SkillsSection.vue'
import ProjectsSectionVue from '../components/ProjectsSection.vue'
import ContactSectionVue from '../components/ContactSection.vue'
import CreditSection from '../components/CreditSection.vue'
</script>
<template>
  <HeaderSectionVue />
  <AboutMe id="about" />
  <SkillsSectionVue />
  <ProjectsSectionVue id="projects" />
  <ContactSectionVue id="contact" />
  <CreditSection />
</template>
