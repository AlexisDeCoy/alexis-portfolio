<script setup>
import { inject, onMounted, ref } from 'vue';
import gradientComposable from '../assets/gradientComposable.js'
const { blurActive, blurSpread, colorActive, colorStrength } = inject('decorations', { blurActive: false, blurSpread: 100, colorActive: false, colorStrength: 1 })
const stop0 = ref(null), stop1 = ref(null), stop2 = ref(null), stop3 = ref(null), stop4 = ref(null), stop5 = ref(null)
const blurMax = ref(6)

//NO CHANGES AS OF 04.29.24

const props = defineProps({id : String})
const emit = defineEmits(['setPosition'])
const title = ref(null)

onMounted(() => {
  gradientComposable(stop0, stop1, stop2, stop3, stop4, stop5)
  emit('setPosition', title.value.getBoundingClientRect().top + document.documentElement.scrollTop)
});
</script>

<!--
SCRIPT SETUP LAYOUT:
    IMPORTS:
        vue: inject, onMounted, ref
        gradientComposable
    DECORATION REFS & VARS:
        INJECT: blurActive, blurSpread, colorActive, colorStrength
        stop0-stop5 - ELEMENT REFS FOR EACH GRADIENT STOP
        blurMax - MAX STD DEV FOR BLUR SCALING
    SVG REFS & VARS:
        emit - setPosition, SET WINDOW Y FOR NAV LINKS
        title - SVG ELEMENT REF
    onMounted - ATTACH GRADIENT COMPOSABLE, EMIT setPosition, GIVEN POSITION DEFINED IN app.vue
-->

<template>
  <svg :id="`${id}-break`" ref="title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
    <defs>
      <filter :id="`${id}-break-blur`" x="-20" y="-20" height="150" width="150">
        <feGaussianBlur result="blur" :stdDeviation="blurMax * (blurSpread / 100)" />
        <feBlend in="SourceGraphic" in2="blur" mode="normal" />
      </filter>
      <linearGradient :id="`${id}-break-gradient`" x1="0" y1="0" x2="100%" y2="0" gradientUnits="userSpaceOnUse">
        <stop ref='stop0' offset="0.0" :stop-opacity="colorStrength" stop-color="#E057F2" />
        <stop ref='stop1' offset="0.2" :stop-opacity="colorStrength" stop-color="#F2490C" />
        <stop ref='stop2' offset="0.4" :stop-opacity="colorStrength" stop-color="#F28705" />
        <stop ref='stop3' offset="0.6" :stop-opacity="colorStrength" stop-color="#04d94b" />
        <stop ref='stop4' offset="0.8" :stop-opacity="colorStrength" stop-color="#04C4D9" />
        <stop ref='stop5' offset="1.0" :stop-opacity="colorStrength" stop-color="#5D04D9" />
      </linearGradient>
    </defs>
    <path id="break" stroke-width="10" fill="none" :stroke="colorActive ? `url(#${id}-break-gradient)` : 'white'"
      :filter="blurActive ? `url(#${id}-break-blur)` : 'none'" d="M 1000 72.834 C 981.668 72.834 968.04 69.83 956.7 65.368 C 923.866 52.442 910.237 27.255 857.142 27.255
    C 785.711 27.255 785.711 72.834 714.28 72.834 C 642.848 72.834 642.853 27.255 571.422 27.255 C 499.991 27.255 499.995
    72.834 428.564 72.834 C 357.133 72.834 357.138 27.255 285.711 27.255 C 214.284 27.255 214.284 72.834 142.858 72.834
    C 83.81 72.834 73.573 41.686 31.449 30.892 C 22.616 28.623 12.384 27.255 0 27.255" />
  </svg>
</template>

<!--
TEMPLATE LAYOUT:
    SVG WRAPPER - SET TEMPLATE REF, 1000 x 100 VIEWBOX
        defs
            filter - BLUR, break-blur
              feGaussianBlur - STD-DEV BY blurMax*blurSpread
            linear-gradient - break-gradient, USERSPACEONUSE
        path - STROKE-WIDTH-10, FILL-NONE, STROKE-GRADIENT/WHITE, FILTER-BLUR/NONE
END TEMPLATE
-->

<style scoped>
svg {
  width: 100%;
}
</style>

<!--
STYLE LAYOUT:
    svg - WIDTH-100
-->./gradientComposable.js