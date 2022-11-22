<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
</script>
<template>
  <div class="contactContainer">
    <div data-aos="zoom-in-up" class="contactTitle">
      <h1>#contact</h1>
      <p>Want to work together or just talk about your project, feel free to send me a message!</p>
    </div>
    <div data-aos="zoom-in-down" data-aos-delay="400" id="form">
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
  color: var(--mainColor);
}
.contactTitle p {
  margin-top: 1rem;
  line-height: 1rem;
}
#form {
  max-width: 35rem;
  width: auto;
  margin: auto;
}
#form input,
#form textarea {
  width: 100%;
  background-color: #e5dccd;
  border: solid 1px #ccc;
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
}
#form textarea {
  resize: none;
}
#form input:focus,
#form textarea:focus {
  outline: none;
}
#form button {
  background-color: var(--mainColor);
  border: none;
  padding: 1em 2em;
  color: white;
  cursor: pointer;
  box-shadow: -2px 3px 0px rgba(20, 162, 115, 0.3);
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
  background-color: var(--hoverColor);
}
.btn {
  text-align: right;
}
</style>
