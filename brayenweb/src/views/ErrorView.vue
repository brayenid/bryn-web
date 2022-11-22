<template>
  <div class="error">
    <h1>404</h1>
    <p>Back to <a href="/">Homepage</a></p>
  </div>
</template>
<style scoped>
.error {
  background-color: var(--backgroundColor);
  color: var(--mainColor);
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
}
p {
  font-size: 1rem;
  color: #eee;
}
a {
  color: var(--mainColor);
  text-decoration: underline;
}
h1 {
  font-size: 4rem;
  font-weight: bold;
}
</style>
