<script setup>
import { computed, inject, ref, watch } from 'vue';
const props = defineProps({ fullScreen: Boolean, imgs: Array })
const { effects } = inject('decorations', { effects: false })
const emit = defineEmits(['toggleFullScreen'])
const orientation = inject('orientation', { orientation: 'landscape' })

const container = ref(null)
const containerClasses = computed(() => ({ 'full-screen': props.fullScreen, effects: effects.value, 'container': true }))
const markersClasses = computed(() => ({ 'full-screen': props.fullScreen, 'markers': true }))

const currentImage = ref(null)
const imageIndex = ref(0)

const o0 = { opacity: 0 }
const o1 = { opacity: 1 }

async function changeImage(backwards, index) {
  if (!effects) {
    await currentImage.value.animate([o1, o0], { duration: 250, iterations: 1 }).finished
    currentImage.value.style.opacity = 0
  }
  if (index !== undefined) {
    imageIndex.value = index
  } else {
    if (backwards) {
      if (imageIndex.value === 0) { imageIndex.value = props.imgs.length - 1 }
      else { imageIndex.value-- }
    }
    else {
      if (imageIndex.value === props.imgs.length - 1) { imageIndex.value = 0 }
      else { imageIndex.value++ }
    }
  }
  if (!effects) {
    await currentImage.value.animate([o0, o1], { duration: 250, iterations: 1 }).finished
    currentImage.value.style.opacity = 1
  }
}


watch(() => props.fullScreen, () => {
  if (effects.value) container.value.animate([o0, o1], { duration: 500, iterations: 1 })
})
</script>


<template>
  <Transition :name="effects ? 'active' : ''">
    <div class="blur" v-if="props.fullScreen" @click="emit('toggleFullScreen');"></div>
  </Transition>
  <div ref="container" :class="containerClasses">
    <img ref="currentImage" :src="props.imgs[imageIndex].img" :alt="props.imgs[imageIndex].alt"
      @click="!fullScreen ? emit('toggleFullScreen') : {}">
    <div :class="{ show: orientation === 'portrait' || !effects, description: true }">{{ props.imgs[imageIndex].alt }}
    </div>
    <input type="button" class="arrow forward" value="&#10095;" @click.stop="(() => changeImage())" />
    <input type="button" class="arrow back" value="&#10094;" @click.stop="(() => changeImage(true))" />
  </div>
  <div :class="markersClasses">
    <div :class="{ 'active': i - 1 === imageIndex, 'marker': true }" v-for="i in props.imgs.length"
      @click.stop="(() => changeImage(false, i - 1))"></div>
  </div>
  <img class="close" v-if="props.fullScreen" src="../assets/icons/cross.svg" @click.stop="emit('toggleFullScreen');">
</template>

<style scoped>
.blur {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #000000CA;
  z-index: 3;
}

.container {
  background: transparent;
  max-height: 80vh;
  height: 100%;
  width: 100%;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container.full-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  width: unset;
  height: unset;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: unset;
  box-shadow: 0 0 10px 5px #fff;
  border-radius: 5px;
  z-index: 3;
}

img {
  border-radius: 5px;
  position: relative;
  top: 0;
  left: 0;
  object-fit: contain;
  height: 100%;
  width: 100%;
  vertical-align: middle;
  border-radius: 5px;
}

.full-screen img {
  max-height: 70vh;
  max-width: 80vw;
  height: unset;
  width: unset;
}

.container:hover .description,
.show.description {
  opacity: 1;
}

.description {
  position: absolute;
  bottom: 0;
  width: 100%;
  opacity: 0;
  background: linear-gradient(transparent, #181818);
  border-radius: 0 0 5px 5px;
  transition: opacity 1s;
  text-align: center;
  font-size: calc(2vw + 10px);
  color: white;
}

.markers {
  display: flex;
  width: 100%;
  height: 10%;
  position: absolute;
  top: 101%;
  justify-content: center;
  align-items: center;
}

.markers.full-screen {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 15vh;
  top: unset;
  z-index: 3;
}

.marker {
  aspect-ratio: 1;
  background: #808080;
  border-radius: 50%;
  margin: 0 6px;
  width: max-content;
  height: 50%;
  min-width: 12px;
  min-height: 12px;
  max-width: 25px;
  max-height: 25px;
}

.effects .marker:hover {
  transform: scale(1.1);
}

.marker.active {
  background: #fff;
}

.arrow {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-anchor: middle;
  color: #fff;
  border: none;
  width: 40px;
  height: 90px;
  position: absolute;
  top: 50%;
  line-height: 100%;
  font-size: calc(2vw + 5px);
  background: #1818187E;
  cursor: pointer;
  transition: all 0.5s ease;
}

.arrow.forward {
  left: 100%;
  transform: translate(-100%, -50%);
  border-radius: 15px 0 0 15px;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
  border-left: 2px solid #fff;
}

.arrow.back {
  right: 100%;
  transform: translate(100%, -50%);
  border-radius: 0 15px 15px 0;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
}

.effects .arrow:hover {
  opacity: 1;
  background: #000;
}

.close {
  width: 50px;
  height: 50px;
  position: fixed;
  top: 0;
  left: 100%;
  transform: translate(-150%, 50%);
  cursor: pointer;
  z-index: 3;
}
</style>