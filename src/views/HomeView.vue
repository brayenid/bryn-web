<script setup>
import IconGithub from '../components/icons/IconGithub.vue'
import IconLinkedin from '../components/icons/IconLinkedin.vue'
import IconSpotify from '../components/icons/IconSpotify.vue'
</script>
<template>
  <div class="container">
    <main>
      <h1>Brayen Luhat</h1>
      <p class="desc">a Web Developer</p>
      <ul class="socials">
        <li>
          <a href="https://github.com/brayenid" target="_blank" rel="noopener noreferrer" aria-label="Github"> <IconGithub /> </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/brayenluhat" target="_blank" rel="noopener noreferrer" aria-label="Linkedin"> <IconLinkedin /></a>
        </li>
        <li>
          <a href="https://open.spotify.com/artist/0xmU6BfzR5RsG8QZUQLJlN" target="_blank" rel="noopener noreferrer" aria-label="Spotify"><IconSpotify /></a>
        </li>
      </ul>
    </main>
    <div class="credit">
      <p>© 2023</p>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
}
h1 {
  font-size: 4rem;
  font-weight: 600;
}
p.desc {
  font-size: 3.2rem;
  font-weight: 300;
  margin-bottom: 2rem;
}
h1,
p.desc {
  text-align: center;
}
.socials {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}
.socials a {
  padding: 0.5rem;
}
.credit {
  position: absolute;
  bottom: 2rem;
  color: #666;
  font-size: 0.8rem;
}
</style>
