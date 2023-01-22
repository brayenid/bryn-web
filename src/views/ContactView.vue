<template>
  <div class="container">
    <div class="title">
      <h1>Contact <span>Me</span></h1>
      <p>Want to talk about your project or just want to ask me how to center a div? Feel free to send me a message!</p>
    </div>
    <main>
      <form id="contact" target="_blank" action="https://formsubmit.co/319bddddd3b99cba0d6b68a77af1ed21" method="POST">
        <input type="text" placeholder="Your Name" name="name" />
        <input type="email" placeholder="Your Email" name="name" />
        <textarea name="message" rows="10" placeholder="Your Message ..."></textarea>
        <div class="button">
          <button type="submit">Send!</button>
        </div>
      </form>
    </main>
  </div>
</template>
<style scoped>
.container {
  margin: 7rem auto;
  width: 100%;
  max-width: 800px;
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
#contact {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
#contact input,
#contact textarea {
  padding: 1rem;
  font-family: inherit;
  border: none;
  background-color: rgba(0, 0, 0, 0.03);
  resize: none;
}
.button {
  text-align: right;
}
#contact button {
  padding: 0.8rem 1.5rem;
  background-color: var(--secondaryColor);
  color: white;
  border: 1px solid;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
#contact button:hover {
  background-color: white;
  border-color: var(--secondaryColor);
  color: inherit;
}
</style>
