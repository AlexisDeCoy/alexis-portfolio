<script setup>
import { computed, inject, onMounted, ref } from 'vue';
import ImageSlider from './ImageSlider.vue';
import gradientComposable from '../assets/gradientComposable.js'

const { blurActive, blurSpread, colorActive, colorStrength } = inject('decorations', { blurActive: false, blurSpread: 100, colorActive: false, colorStrength: 1 })
const stop0 = ref(null), stop1 = ref(null), stop2 = ref(null), stop3 = ref(null), stop4 = ref(null), stop5 = ref(null)
const blurMax = computed(() => orientation.value === 'portrait' ? 12 : 16)

const orientation = inject('orientation', { orientation: 'landscape' })
const { id, reno } = defineProps({ id: String, reno: Object })
const fullScreen = ref(false)

const viewBox = computed(() => (orientation.value === 'portrait' ? '0 0 500 500' : '0 0 1000 480'))

function toggleFullScreen() { fullScreen.value = !fullScreen.value; }

onMounted(() => { gradientComposable(stop0, stop1, stop2, stop3, stop4, stop5) })
</script>

<template>
    <h1 :class="{ portrait: orientation === 'portrait', 'title': true }">{{ reno.title }}</h1>
    <div :class="{ portrait: orientation === 'portrait', 'reno-container': true }">
        <svg :id="`${id}-svg`" xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox" preserveAspectRatio="none">
            <defs>
                <filter :id="`${id}-blur`" x="-2" y="-2" height="24" width="24">
                    <feBlend :in="`${id}-blur`" />
                    <feGaussianBlur in="sourceGraphic" :stdDeviation="blurMax * (blurSpread / 100)" />
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <linearGradient :id="`${id}-gradient`" x1="0" y1="0" x2="100%" y2="0" gradientUnits="userSpaceOnUse">
                    <stop ref='stop0' offset="0.0" :stop-opacity="colorStrength" stop-color="#E057F2" />
                    <stop ref='stop1' offset="0.2" :stop-opacity="colorStrength" stop-color="#F2490C" />
                    <stop ref='stop2' offset="0.4" :stop-opacity="colorStrength" stop-color="#F28705" />
                    <stop ref='stop3' offset="0.6" :stop-opacity="colorStrength" stop-color="#04d94b" />
                    <stop ref='stop4' offset="0.8" :stop-opacity="colorStrength" stop-color="#04C4D9" />
                    <stop ref='stop5' offset="1.0" :stop-opacity="colorStrength" stop-color="#5D04D9" />
                </linearGradient>
            </defs>
            <rect :x="orientation === 'portrait' ? '25' : '50'" :y="orientation === 'portrait' ? '25' : '40'"
                :height="orientation === 'portrait' ? '450' : '400'" :width="orientation === 'portrait' ? '450' : '400'"
                :fill="colorActive ? `url(#${id}-gradient)` : '#fff'"
                :filter="blurActive ? `url(#${id}-blur)` : 'none'" :rx="orientation === 'portrait' ? '10' : '4'" />
        </svg>
        <div class="slider-container">
            <ImageSlider :full-screen="fullScreen" :imgs="reno.imgs" @toggleFullScreen="toggleFullScreen" />
        </div>
        <div class="content-container">
            <h2 :class="colorActive ? 'var' : 'white'">Location: </h2>
            <h4 :class="colorActive ? 'string' : 'white'">{{ reno.details.location }}</h4>
            <h2 :class="colorActive ? 'var' : 'white'">-</h2>
            <h2 :class="colorActive ? 'function' : 'white'">Description: </h2>
            <h4 :class="colorActive ? 'string' : 'white'">{{ reno.details.description }}</h4>
            <h2 :class="colorActive ? 'function' : 'white'">-</h2>
            <h2 :class="colorActive ? 'import-control' : 'white'">Work: </h2>
            <h4 :class="colorActive ? 'string' : 'white'">{{ reno.details.work }}</h4>
            <h2 :class="colorActive ? 'import-control' : 'white'">-</h2>
        </div>
    </div>
</template>

<style scoped>
h1 {
    width: 90%;
    margin: 0 auto 0;
    font-size: calc(6.5vw + 10px);
    color: #fff;
    line-height: 1;
}

h1.portrait {
    font-size: calc(9.5vw + 10px);
    text-align: center;
}

.reno-container {
    aspect-ratio: 5 / 2;
    position: relative;
    width: 100%;
    display: flex;
    margin-bottom: 15vh;
    margin-top: 10vh;
    align-items: center;
}

.reno-container.portrait {
    padding: 5%;
    aspect-ratio: 1;
    flex-direction: column;
    margin-top: 0;
    margin-bottom: 5vh;
}

svg {
    position: absolute;
    top: -10%;
    left: 0;
    width: 100%;
    z-index: -1;
}

.portrait svg {
    width: 100%;
    top: 0;
}

.slider-container {
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5.5%;
    margin-right: 5.5%;
    width: 39%;
    box-sizing: border-box;
    border-radius: 5px;
    background: var(--dark-grey-translucent);
    position: relative;
}

.portrait .slider-container {
    width: 98%;
    margin: 1%;
    height: 98%;
}

.content-container {
    width: 45%;
    scrollbar-gutter: stable;
    margin-right: 5%;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    scrollbar-color: #fff transparent;
    height: 100%;
    overflow: auto;
}

.portrait .content-container {
    width: 100%;
    margin-right: 0;
    margin-top: 10%;
    height: auto;
    max-height: 90%;
}

h2 {
    font-family: "Bebas Neue", sans-serif;
    font-size: calc(1.5vw + 10px);
    margin: 0.5vw 4px;
}

h4 {
    margin: 0 16px;
    font-size: calc(1.2vw + 8px);
}
</style>../assets/gradientComposable.js