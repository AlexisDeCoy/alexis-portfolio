<script setup>
import { inject, onMounted, ref } from 'vue';
import gradientComposable from '../assets/gradientComposable.js'
const { blurActive, blurSpread, colorActive, colorStrength } = inject('decorations', { blurActive: false, blurSpread: 100, colorActive: false, colorStrength: 1 })
const stop0 = ref(null), stop1 = ref(null), stop2 = ref(null), stop3 = ref(null), stop4 = ref(null), stop5 = ref(null)
const blurMax = ref(5)
const props = defineProps({id : String})

//NO CHANGES AS OF 05.01.24

const title = ref(null)

onMounted(() => {
  gradientComposable(stop0, stop1, stop2, stop3, stop4, stop5)
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
        title - SVG ELEMENT REF
    onMounted - ATTACH GRADIENT COMPOSABLE
-->

<template>
  <svg :id="`${props.id}-spacer`" ref="title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
    <defs>
      <filter :id="`${props.id}-spacer-blur`" x="-20" y="-20" height="150" width="150">
        <feGaussianBlur result="blur" :stdDeviation="blurMax * (blurSpread / 100)" />
        <feBlend in="SourceGraphic" in2="blur" mode="normal" />
      </filter>
      <linearGradient :id="`${props.id}-spacer-gradient`" x1="0" y1="0" x2="100%" y2="0" gradientUnits="userSpaceOnUse">
        <stop ref='stop0' offset="0.0" :stop-opacity="colorStrength" stop-color="#E057F2" />
        <stop ref='stop1' offset="0.2" :stop-opacity="colorStrength" stop-color="#F2490C" />
        <stop ref='stop2' offset="0.4" :stop-opacity="colorStrength" stop-color="#F28705" />
        <stop ref='stop3' offset="0.6" :stop-opacity="colorStrength" stop-color="#04d94b" />
        <stop ref='stop4' offset="0.8" :stop-opacity="colorStrength" stop-color="#04C4D9" />
        <stop ref='stop5' offset="1.0" :stop-opacity="colorStrength" stop-color="#5D04D9" />
      </linearGradient>
    </defs>
    <rect id="spacer" stroke="none" :fill="colorActive ? `url(#${props.id}-spacer-gradient)` : 'white'"
      :filter="blurActive ? `url(#${props.id}-spacer-blur)` : 'none'" x="50" y="46" width="900" height="8" />
  </svg>
</template>

<!--
TEMPLATE LAYOUT:
    SVG WRAPPER - SET TEMPLATE REF, 1000 x 100 VIEWBOX
        defs
            filter - BLUR, spacer-blur
              feGaussianBlur - STD-DEV BY blurMax*blurSpread
            linear-gradient - spacer-gradient, USERSPACEONUSE
        rect - STROKE-0, FILL-GRADIENT/WHITE, FILTER-BLUR/NONE, 900 x 8
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