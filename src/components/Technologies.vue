<script setup>
import { inject, onMounted, ref } from 'vue';
import gradientComposable from '../assets/gradientComposable.js'
import TechIcons from '../assets/data/TechIcons.js';

// ADD LINKS TO ICON GROUPS
// ADD TRANSITIONS CLASS FOR BUTTON UNDERLINE
// MOVE BEBAS + FONTSIZE TO GLOBAL?

const { blurActive, blurSpread, colorActive, colorStrength } = inject('decorations', { blurActive: false, blurSpread: 100, colorActive: false, colorStrength: 1 })
const stop0 = ref([]), stop1 = ref([]), stop2 = ref([]), stop3 = ref([]), stop4 = ref([]), stop5 = ref([])
const blurMax = ref(9)

const orientation = inject('orientation', { orientation: 'landscape' })
const viewBox = orientation.value === 'portrait' ? `0 0 540 ${Math.ceil(TechIcons.length / 2) * 120 + 30}` : `0 0 1000 ${Math.ceil(TechIcons.length / 4) * 120 + 30}`;
const remainingIconQuantity = orientation.value === 'portrait' ? TechIcons.length % 2 : TechIcons.length % 4;
const remainingIcons = TechIcons.slice(TechIcons.length - remainingIconQuantity);

const horizontalPosition = (i) => {
    if (orientation.value === 'portrait') {
        return (i - 1) % 2 * 230 + 50
    }
    else return (i - 1) % 4 * 230 + 50
}
const verticalPosition = (i) => {
    if (orientation.value === 'portrait') {
        return Math.floor((i - 1) / 2) * 120 + 20
    }
    else return Math.floor((i - 1) / 4) * 120 + 20
}
const horizontalPositionRemaining = (i) => {
    switch (remainingIconQuantity) {
        case 1:
            if (orientation.value === 'portrait') {
                return 165
            }
            else return 395
        case 2:
            return i * 230 + 50
        case 3:
            return (i - 1) * 230 + 165
        default:
            return horizontalPosition(i)
    }
}
const verticalPositionRemaining = () => {
    if (orientation.value === 'portrait') {
        return (TechIcons.length - remainingIconQuantity) / 2 * 120 + 20
    }
    else return (TechIcons.length - remainingIconQuantity) / 4 * 120 + 20
}

onMounted(() => {
    for (let i = 0; i < TechIcons.length; i++) {
        gradientComposable(
            { value: stop0.value[i] },
            { value: stop1.value[i] },
            { value: stop2.value[i] },
            { value: stop3.value[i] },
            { value: stop4.value[i] },
            { value: stop5.value[i] }
        )
    }
})
</script>

<!--
SCRIPT SETUP LAYOUT:
    IMPORTS:
        vue: computed, inject, onMounted, ref
        gradientComposable
        TechIcons - OBJECT ARRAY: [{ TITLE, { PATHS: PATH, FILL } }]
    DECORATION REFS & VARS:
        INJECT: blurActive, blurSpread, colorActive, colorStrength
        stop0-stop5 - ARRAY OF ELEMENT REFS FOR EACH GRADIENT STOP PER TechList ITEM
        blurMax - MAX STD DEV FOR BLUR SCALING
    SVG REFS & VARS:
        INJECT: orientation - DEFINE WINDOW ORIENTATION (2 / 4 PER ROW)
        viewBox - DEFINE VERTICAL SIZE FOR CONTAINER BASED ON MAX ROWS INCL. REMAINING
            PORTRAIT - 540 x DEFINED HEIGHT
            LANDSCAPE - 1000 x DEFINED HEIGHT
        remainingIconQuantity - QUANTITY OF ICONS OVER LAST FULL MULTIPLE OF 4 / 2
        remainingIcons - RETURNS ARRAY OF ICONS OVER LAST FULL MULTIPLE OF 4 / 2
    SVG POSITION FUNCTIONS:
        horizontalPosition - DETERMINE HORIZONTAL ELEMENT POSITION 1-4 (1-2 FOR PORTRAIT)
        verticalPosition - DETERMINE VERTICAL ELEMENT POSITION 1-MaxRows (NOT INCLUDING REMAINING)
        horizontalPositionRemaining - DETERMINE HORIZONTAL REMAINING ELEMENT POSITION 1-3 (ONLY 1 IF MOBILE)
            1 - CENTER
            2 - MIDDLE ALIGN TO COLUMNS
            3 - MIDDLE OF PRIOR COLUMNS
            DEFAULT - horizontalPosition
        verticalPositionRemaining - DETERMINE VERTICAL ELEMENT POSITION OF LAST ROW
    onMounted - LOOP ATTACH COMPOSABLE TO EACH TechList stop0-5, PASSED AS OBJECTS TO WORK WITH .value IN gradientComposable
-->

<template>
    <svg id="tech-svg" xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox">
        <defs v-for="i in TechIcons.length">
            <filter :id="`tech-blur-${i}`" x="-2" y="-2" height="24" width="24">
                <feGaussianBlur result="blur" :stdDeviation="blurMax * (blurSpread / 100)" />
                <feBlend in="SourceGraphic" in2="blur" mode="normal" />
            </filter>
            <linearGradient :id="`tech-gradient-${i}`" x1="0" y1="0" x2="100%" y2="0" gradientUnits="userSpaceOnUse">
                <stop ref='stop0' offset="0.0" :stop-opacity="colorStrength" stop-color="#E057F2" />
                <stop ref='stop1' offset="0.2" :stop-opacity="colorStrength" stop-color="#F2490C" />
                <stop ref='stop2' offset="0.4" :stop-opacity="colorStrength" stop-color="#F28705" />
                <stop ref='stop3' offset="0.6" :stop-opacity="colorStrength" stop-color="#04d94b" />
                <stop ref='stop4' offset="0.8" :stop-opacity="colorStrength" stop-color="#04C4D9" />
                <stop ref='stop5' offset="1.0" :stop-opacity="colorStrength" stop-color="#5D04D9" />
            </linearGradient>
        </defs>
        <g v-for="i in TechIcons.length - remainingIconQuantity">
            <rect id="tech-svg-wrapper" :x="horizontalPosition(i)" :y="verticalPosition(i)" width="210" height="98"
                rx="32" :fill="colorActive ? `url(#tech-gradient-${i})` : '#fff'"
                :filter="blurActive ? `url(#tech-blur-${i})` : 'none'" />
            <rect :x="horizontalPosition(i) + 5" :y="verticalPosition(i) + 5" width="200" height="88" fill="#181818"
                rx="26" />
            <svg :id="`${TechIcons[i - 1]['title']}-tech-svg`" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
                :x="horizontalPosition(i) + 20" :y="verticalPosition(i) + 24" width="50" height="50">
                <path v-for="j in TechIcons[i - 1]['paths'].length" :d="TechIcons[i - 1]['paths'][j - 1]['path']"
                    :fill="TechIcons[i - 1]['paths'][j - 1]['fill']" fill-rule="evenodd" />
            </svg>
            <a :href="TechIcons[i - 1]['link']">
                <text :x="horizontalPosition(i) + 135" :y="verticalPosition(i) + 49" width="160" height="78"
                    dominant-baseline="middle" text-anchor="middle" fill="#fff" :href="TechIcons[i - 1]['link']">{{
        TechIcons[i - 1]['title'] }}</text>
            </a>
        </g>
        <g v-for="i in remainingIconQuantity">
            <rect :x="horizontalPositionRemaining(i)" :y="verticalPositionRemaining()" width="210" height="98" rx="32"
                :fill="colorActive ? `url(#tech-gradient-${i + TechIcons.length - remainingIconQuantity})` : '#fff'"
                :filter="blurActive ? `url(#tech-blur-${i + TechIcons.length - remainingIconQuantity})` : 'none'" />
            <rect :x="horizontalPositionRemaining(i) + 5" :y="verticalPositionRemaining() + 5" width="200" height="88"
                fill="#181818" rx="26" />
            <svg :id="`${remainingIcons[i - 1]['title']}-tech-svg`" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100" :x="horizontalPositionRemaining(i) + 20" :y="verticalPositionRemaining() + 24"
                width="50" height="50">
                <path v-for="j in remainingIcons[i - 1]['paths'].length"
                    :d="remainingIcons[i - 1]['paths'][j - 1]['path']"
                    :fill="remainingIcons[i - 1]['paths'][j - 1]['fill']" fill-rule="evenodd" />
            </svg>
            <a :href="remainingIcons[i - 1]['link']">
                <text :x="horizontalPositionRemaining(i) + 135" :y="verticalPositionRemaining() + 49" width="160"
                    height="78" dominant-baseline="middle" text-anchor="middle" fill="#fff">{{
        remainingIcons[i - 1]['title'] }}</text>
            </a>
        </g>
    </svg>
</template>

<!--
TEMPLATE LAYOUT:
    SVG WRAPPER - DEFINE VIEWBOX, FIT GRADIENT
        defs
            filter - tech-blur
                feGaussianBlur - STD-DEV BY blurMax*blurSpread
            linear-gradient - tech-gradient, USERSPACEONUSE
        g - V-FOR ICONS EXCLUDING REMAINING
            rect - GRADIENT CONTAINER, 210 x 98, FILL: colorActive ?, FILTER: blurActive ?
                HORIZONTAL: OUTSIDE MARGIN 50, GAP OF 20
                VERTICAL: OUTSIDE MARGIN 20, GAP OF 22
            rect - CONTENT CONTAINER, CENTERED INSIDE GRADIENT CONTAINER, HEIGHT/WIDTH: 200 x 88
            svg - NESTED TO USE 100x100 VIEWBOX, 50 x 50
                path - V-FOR PATHS IN GIVEN ICON
            text - ICON TITLE, BASELINE-MIDDLE, ANCHOR-MIDDLE, WHITE, 160 x 78
        g - V-FOR REMAINING ICONS
            rect - GRADIENT CONTAINER
            rect - CONTENT CONTAINER
            svg
                path - V-FOR PATHS IN GIVEN ICON
            text - GIVEN ICON TITLE
END TEMPLATE
-->

<style scoped>
svg {
    width: 100%;
}

g {
    cursor: pointer;
}

g:hover text {
    text-decoration: underline;
}

text {
    font-family: "Bebas Neue", sans-serif;
    font-size: min(calc(1.4vw + 15px), 30px);
}
</style>

<!--
STYLE LAYOUT:
    svg - FULL WIDTH OF WINDOW
    g - POINTER CURSOR
        :hover - UNDERLINE
    text - BEBAS NEUE
-->../assets/gradientComposable.js