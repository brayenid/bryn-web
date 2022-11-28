<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
</script>
<template>
  <div class="contactContainer">
    <div class="contactTitle">
      <h1>contact me</h1>
      <p>Want to talk about your project or just want to ask me how to center a div? Feel free to send me a message!</p>
    </div>
    <div data-aos="zoom-in-up" data-aos-delay="100" id="form">
      <form target="_blank" action="https://formsubmit.co/319bddddd3b99cba0d6b68a77af1ed21" method="POST">
        <div>
          <input type="text" name="name" placeholder="Full Name" required />
        </div>
        <div>
          <input type="email" name="email" placeholder="Email Address" required />
        </div>
        <div>
          <textarea placeholder="Your Message" name="message" rows="10" required></textarea>
        </div>
        <div class="btn">
          <button type="submit">Send!</button>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
.contactContainer {
  background-color: var(--secondaryColor);
  box-sizing: border-box;
  padding: 0 2rem 3rem;
}
.contactTitle {
  text-align: center;
  line-height: 1.8rem;
  padding: 3rem 1rem;
}
.contactTitle h1 {
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
  color: var(--headerColor);
}
.contactTitle p {
  max-width: 35rem;
  margin: 1rem auto 0;
  line-height: 1.3rem;
  color: var(--headerColor);
}
#form {
  max-width: 35rem;
  width: auto;
  margin: auto;
}
#form input,
#form textarea {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  border: solid 1px rgba(0, 0, 0, 0.1);
  padding: 1em 2em 1em 1.5em;
  box-sizing: border-box;
  margin-bottom: 0.5em;
  border-radius: 0.4em;
  -webkit-border-radius: 0.4em;
  -moz-border-radius: 0.4em;
  -ms-border-radius: 0.4em;
  -o-border-radius: 0.4em;
  font-size: calc(11px + 0.33vw);
  font-family: 'Inter', sans-serif;
  color: #333;
}
#form textarea {
  resize: none;
}
#form input:focus,
#form textarea:focus {
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.4);
}
#form input::placeholder,
#form textarea::placeholder {
  color: #666;
}
#form button {
  background-color: var(--backgroundColor);
  border: none;
  padding: 1em 2em;
  color: white;
  cursor: pointer;
  box-shadow: -2px 3px 0px var(--backgroundColorDarker);
  border-radius: 0.4em;
  -webkit-border-radius: 0.4em;
  -moz-border-radius: 0.4em;
  -ms-border-radius: 0.4em;
  -o-border-radius: 0.4em;
  font-size: calc(11px + 0.33vw);
}
#form button:active {
  box-shadow: none;
  transform: translate(-2px, 3px);
  -webkit-transform: translate(-2px, 3px);
  -moz-transform: translate(-2px, 3px);
  -ms-transform: translate(-2px, 3px);
  -o-transform: translate(-2px, 3px);
  background-color: var(--backgroundColorDarker);
}
.btn {
  text-align: right;
}
</style>
