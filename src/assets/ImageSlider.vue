<script setup>
import { computed, inject, onMounted, ref, watch } from 'vue';
const props = defineProps({ fullScreen: Boolean, imgs: Object, fullImgs: Object })
const { effects } = inject('decorations', { effects: false })
const emit = defineEmits(['toggleFullScreen'])

const container = ref(null)
const containerClasses = computed(() => ({ 'full-screen': props.fullScreen, effects: effects.value, container: true }))
const imgClasses = computed(() => ({ 'full-screen': props.fullScreen, beforeImg: true }))
const beforeImg = ref(null)
const afterContainerWidth = ref("100%")

const sliderPosition = ref(20);
const sliderBarActive = ref(false);
const sliderThumbActive = ref(false);
const sliderBarClasses = computed(() => ({ active: sliderBarActive.value, 'slider-bar': true }))
const sliderThumbClasses = computed(() => ({ active: sliderThumbActive.value, 'slider-thumb': true }))

const afterImgStyles = computed(() => ({ clipPath: `polygon(0% 0%, ${sliderPosition.value}% 0%, ${sliderPosition.value}% 100%, 0% 100%)` }))

const o0 = { opacity: 0 }
const o1 = { opacity: 1 }

// watch(() => props.fullScreen, () => {
//     if (effects.value) container.value.animate([o0, o1], { duration: 500, iterations: 1 })
//     setTimeout(() => afterContainerWidth.value = beforeImg.value.getBoundingClientRect().width + 'px', 1)
// })

onMounted(() => {
    // setTimeout(() => afterContainerWidth.value = beforeImg.value.getBoundingClientRect().width + 'px', 100)
})
</script>

<template>
    <Transition :name="effects ? 'active': ''">
        <div class="blur" v-if="props.fullScreen" @click="emit('toggleFullScreen');"></div>
    </Transition>
    <div ref="container" :class="containerClasses">
        <img v-if="!fullScreen" ref="beforeImg" :class="imgClasses" :src="props.imgs.before" alt="Before Image">
        <img v-else="fullScreen" ref="beforeImg" :class="imgClasses" :src="props.fullImgs.before" alt="Before Image">
        <div ref="afterContainer" class="after-container" :style="{ width: afterContainerWidth }">
            <img v-if="!fullScreen" class="afterImg" :src="props.imgs.after" alt="After Image" :style="afterImgStyles">
            <img v-else class="afterImg" :src="props.fullImgs.after" alt="After Image" :style="afterImgStyles">
            <div ref="sliderBar" :class="sliderBarClasses" :style="{ left: sliderPosition + '%' }"></div>
            <img src="/icons/slider-arrows.svg" :class="sliderThumbClasses" alt="Slider Arrows"
                :style="{ left: sliderPosition + '%' }">
            <input ref="imgSlider" type="range" class="slider" min="0" max="100" v-model="sliderPosition"
                @mouseenter="sliderBarActive = true; sliderThumbActive = true"
                @mouseleave="sliderBarActive = false; sliderThumbActive = false">
        </div>
        <div class="open" v-if="!props.fullScreen" @click.stop="emit('toggleFullScreen');">
            <img src="/icons/link-arrow.svg" />
        </div>
    </div>
    <img class="close" v-if="props.fullScreen" src="/icons/cross.svg" @click.stop="emit('toggleFullScreen');">
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
    height: 100%;
    width: 100%;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container.full-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    max-width: 80%;
    max-height: 80%;
    height: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px 5px #fff;
    border-radius: 5px;
    z-index: 3;
}

img {
    /* max-height: 100%;
    max-width: 100%; */
    vertical-align: middle;
    user-select: none;
    border-radius: 5px;
}

img.full-screen {
    max-height: 80vh;
    border-radius: 5px;
}

.after-container {
    height: 100%;
    position: absolute;
    overflow-x: clip;
    display: flex;
}

.beforeImg, .afterImg {
    object-fit: contain;
    height: 100%;
    width: 100%;
}

.slider-bar {
    background: #fff;
    position: absolute;
    top: 0;
    height: 100%;
    width: 0.5%;
    transform: translateX(-50%);
    }
    
.effects .slider-bar {
    transition: box-shadow 0.5s ease;
    box-shadow: 0 0 10px 5px #fff;
}

.slider-bar.active {
    box-shadow: none;
}

.slider-thumb {
    aspect-ratio: 1;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 6vh;
    border-radius: 50%;
    background: #808080;
    }
    
.effects .slider-thumb {
    transition-property: transform, background-color;
    transition-duration: 0.5s;
    transition-timing-function: ease;

}

.effects .slider-thumb.active {
    transform: translate(-50%, -50%) scale(1.5);
    background: #181818;
    border: 1px solid #fff;
}

.slider {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.open {
    padding: 1vh;
    overflow: visible;
    border-radius: 50%;
    background: #808080;
    transition: all 0.5s ease;
    width: 6vh;
    height: 6vh;
    position: absolute;
    top: 0;
    margin: 2vh;
    right: 0;
    z-index: 1;
    display: block;
}

.effects .open:hover {
    transform: scale(1.5);
    border: 1px solid #fff;
    background: #181818;
}

.close {
    width: 50px;
    height: 50px;
    position: fixed;
    top: 0;
    left: 100%;
    transform: translate(-150%, 50%);
    z-index: 3;
    cursor: pointer;
}
</style>