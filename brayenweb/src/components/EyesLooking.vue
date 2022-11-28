<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  const eyes = document.querySelectorAll('.eye')
  const anchor = document.querySelector('.eyeContainer')
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX
    const mouseY = e.clientY
    const rect = anchor.getBoundingClientRect()
    const anchorX = rect.left + rect.width / 2
    const anchorY = rect.top + rect.height / 2
    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)
    eyes.forEach((eye) => {
      eye.style.transform = `rotate(${90 + angleDeg}deg)`
    })
  })
  const angle = (cx, cy, ex, ey) => {
    const dy = ey - cy
    const dx = ex - cx
    const rad = Math.atan2(dy, dx)
    const deg = (rad * 180) / Math.PI
    return deg
  }
})
</script>
<template>
  <div class="eyeContainer">
    <div class="eyeLid">
      <div class="eyeAware">
        <div class="eye"><div class="pupil"></div></div>
      </div>
    </div>
    <div class="eyeLid">
      <div class="eyeAware">
        <div class="eye"><div class="pupil"></div></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.eyeContainer {
  width: 60px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
}
.eyeLid {
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}
.eyeLid::before,
.eyeLid::after {
  content: '';
  transition: 0.1s ease-in-out;
  background-color: var(--accentColor);
  width: 100%;
  height: 50%;
  max-height: 0;
  position: absolute;
  z-index: 10;
  animation: blink 6s infinite;
}
.eyeLid::before {
  top: 0;
}
.eyeLid::after {
  bottom: 0;
}
@keyframes blink {
  0% {
    max-height: 0;
  }
  49% {
    max-height: 0;
  }
  50% {
    max-height: 100px;
  }
  51% {
    max-height: 0;
  }
  100% {
    max-height: 0;
  }
}
.eye {
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.2);
}
.pupil {
  height: 9px;
  width: 9px;
  background-color: #333;
  border-radius: 50%;
  margin-top: 7px;
}
.eyeAware {
  position: relative;
}
.eyeAware::before,
.eyeAware::after {
  content: '';
  position: absolute;
  background-color: var(--accentColor);
  height: 35%;
  max-height: 0;
  width: 100%;
  z-index: 11;
  transition: 0.1s ease-in-out;
}
.eyeAware::before {
  top: 0;
}
.eyeAware::after {
  bottom: 0;
}
.eyeContainer:hover .eyeAware::before,
.eyeContainer:hover .eyeAware::after {
  max-height: 10px;
}
</style>
