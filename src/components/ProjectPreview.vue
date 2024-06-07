<script setup>
import { computed, inject, onMounted, ref } from 'vue';
import ImageModal from './ImageModal.vue';
import gradientComposable from '../assets/gradientComposable.js'

const { blurActive, blurSpread, colorActive, colorStrength } = inject('decorations', { blurActive: false, blurSpread: 100, colorActive: false, colorStrength: 1 })
const stop0 = ref(null), stop1 = ref(null), stop2 = ref(null), stop3 = ref(null), stop4 = ref(null), stop5 = ref(null)
const blurMax = computed(() => orientation.value === 'portrait' ? 12 : 16)

//NO CHANGES AS OF 05.01.24
//MAY NEED INDEX IDs FOR SVG DEFS

const orientation = inject('orientation', { orientation: 'landscape' })
const { id, project } = defineProps({ id: String, project: Object })
const fullScreen = ref(false)
const tagDeclareClass = computed(() => colorActive.value ? 'tag-declare' : 'white')
const varClass = computed(() => colorActive.value ? 'var' : 'white')
const stringClass = computed(() => colorActive.value ? 'string' : 'white')
const functionClass = computed(() => colorActive.value ? 'function' : 'white')
const importControlClass = computed(() => colorActive.value ? 'import-control' : 'white')

function toggleFullScreen() { fullScreen.value = !fullScreen.value; }

onMounted(() => {
    gradientComposable(stop0, stop1, stop2, stop3, stop4, stop5)
})
</script>

<!--
SCRIPT SETUP LAYOUT:
    IMPORTS:
    VUE: inject, onMounted, ref
    gradientComposable
    ImageModal - Component
    DECORATION REFS & VARS:
        INJECT: blurActive, blurSpread, colorActive, colorStrength
        stop0-stop5 - ELEMENT REFS FOR EACH GRADIENT STOP
        blurMax - MAX STD DEV FOR BLUR SCALING (PORTRAIT ? 12 : 16)
    COMPONENT REFS & VARS:
        INJECT: orientation, DEFINE MODAL PLACEMENT (LEFT / ABOVE TEXT)
        PROPS: project - FROM projectData V FOR IN App.vue
        fullScreen - WHETHER FULL SCREEN IS DISPLAYED
        tagDeclare - colorActive ? GIVEN CSS COLOR : WHITE
        varClass - colorActive ? GIVEN CSS COLOR : WHITE
        string - colorActive ? GIVEN CSS COLOR : WHITE
        functionClass - colorActive ? GIVEN CSS COLOR : WHITE
        importControl - colorActive ? GIVEN CSS COLOR : WHITE
    FUNCTIONS:
        toggleFullScreen() - TOGGLES fullScreen
    onMounted - ATTACH gradientComposable TO SVG BACKGROUND
-->

<template>
    <h1 :class="{ portrait: orientation === 'portrait', 'title': true }">{{ project.title }}</h1>
    <div :class="{ portrait: orientation === 'portrait', 'project-container': true }">
        <svg :id="`${id}-svg`" xmlns="http://www.w3.org/2000/svg"
            :viewBox="orientation === 'portrait' ? '0 0 500 500' : '0 0 1000 480'" preserveAspectRatio="none">
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
        <div class="modal-container">
            <ImageModal :fullScreen="fullScreen" :imgs="project.imgs" @toggleFullScreen="toggleFullScreen" />
        </div>
        <div class="content-container">
            <h2><span :class="tagDeclareClass">const </span><span :class="varClass">description </span>=<span
                    :class="stringClass">
                    "</span></h2>
            <h4 :class="stringClass">{{ project.details.description }}</h4>
            <h2><span :class="stringClass">"</span></h2>
            <h2><span :class="tagDeclareClass">let </span><span :class="varClass">goals </span>=<span
                    :class="stringClass"> "</span></h2>
            <h4 :class="stringClass">{{ project.details.goals }}</h4>
            <h2><span :class="stringClass">"</span></h2>
            <h2><span :class="tagDeclareClass">async function </span><span :class="functionClass">development() {</span>
            </h2>
            <h4 :class="stringClass">{{ project.details.development }}</h4>
            <h2><span :class="functionClass">}</span></h2>
            <h2>
                <span :class="importControlClass">await </span>
                <span :class="functionClass">nextSteps(</span>
                <span :class="importControlClass">()</span><span :class="tagDeclareClass"> => </span>
                <span :class="importControlClass">{</span>
            </h2>
            <h4 :class="stringClass">{{ project.details.nextSteps }}</h4>
            <h2><span :class="importControlClass">}</span><span :class="functionClass">)</span></h2>
        </div>
    </div>
</template>

<!--
TEMPLATE LAYOUT:
    div - project-container
        h1 - title, PLACED ABOVE CONTAINER
        SVG WRAPPER - project-svg, PORTRAIT ? 500 x 500 : 1000 x 480, PLACED BEHIND modal/content-containers
            defs
                filter - BLUR, project-blur
                    feGaussianBlur - STD-DEV BY blurMax*blurSpread
                linear-gradient - project-gradient, USERSPACEONUSE
            rect - FILL: gradient/WHITE, FILTER: blur/NONE, PORTRAIT ? 450 x 450 : 400 x 400
        div - modal-container, LEFT
            ImageModal - PROPS: fullScreen, imgs, EMITS: toggleFullScreen()
        div - content-container, RIGHT
            h2 - project.details.description TITLE
                span - tagDeclareClass
                span - varClass
                span - stringClass
            h2 - CLOSING ", stringClass
            h4 - project.details.description, stringClass
            h2 - project.details.goals TITLE
                span - tagDeclareClass
                span - varClass
                span - stringClass
            h4 - project.details.goals, stringClass
            h2 - CLOSING ", stringClass
            h2 - project.details.development TITLE
                span - tagDeclareClass
                span - functionClass
            h4 - project.details.development, stringClass
            h2 - CLOSING }, functionClass
            h2 - project.details.nextSteps TITLE
                span - importControlClass
                span - functionClass
                span - importControlClass
                span - tagDeclareClass
                span - importControlClass
            h4 - project.details.nextSteps, stringClass
            h2 - CLOSING
                span - importControlClass, )
                span - functionClass, }
END TEMPLATE
-->

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

.project-container {
    aspect-ratio: 5 / 2;
    position: relative;
    width: 100%;
    display: flex;
    margin-bottom: 15vh;
    margin-top: 10vh;
    align-items: center;
}

.project-container.portrait {
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

.modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5.5%;
    margin-right: 5.5%;
    width: 39%;
    aspect-ratio: 1;
    box-sizing: border-box;
    border-radius: 5px;
    background: var(--dark-grey-translucent);
    position: relative;
}

.portrait .modal-container {
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
    font-size: calc(1.5vw + 10px);
    margin: 0.5vw 4px;
    color: #fff;
}

h4 {
    margin: 0 16px;
    font-size: calc(1.2vw + 8px);
}
</style>

<!--
STYLE LAYOUT:
    h1 - BEBAS, FONT-SIZE, MARGIN-T-AUTO-B, LINE-HEIGHT-1, WHITE
        .portrait -> - FONT-SIZE
    .project-container - ASPECT-RATIO-5/2, RELATIVE, D-FLEX, MARGIN-T/B, ALIGN-CENTER
        .portrait - PADDING, ASPECT-RATIO-1, FLEX-COLUMN, MARGIN-T/B
    #project-svg - ABSOLUTE, Z-INDEX-(-1), TOP-(-10) (OVERSIZED FOR BLUR OVERFLOW)
        .portrait -> - WIDTH-100, TOP-0
    .modal-container - D-FLEX, JUSTIFY-CENTER, ALIGN-CENTER, MARGIN-L/R, WIDTH-39, ASPECT-RATIO-1, RELATIVE, BORDER-RADIUS, DARK-GREY-TRANSLUCENT
        .portrait -> - WIDTH-98, MARGIN, HEIGHT
    .content-container - WIDTH-45, GUTTER-STABLE, MARGIN-R, BORDER-T/B, SCROLLBAR-WHITE-TRANSPARENT, OVERFLOW-A
        .portrait -> - WIDTH-100, MARGIN-T-!R, HEIGHT-AUTO-MAX-90
    h2 - FONT-SIZE, MARGIN, WHITE (FOR = SYMBOLS)
    h4 - FONT-SIZE, MARGIN
-->../assets/gradientComposable.js