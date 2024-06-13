<script setup>
import { inject, onMounted, ref, watchEffect } from 'vue';
import gradientComposable from '../assets/gradientComposable.js'

const emit = defineEmits(['disablePreview'])
const preview = inject('preview', { preview: true })
const { animationActive, blurActive, blurSpread, colorActive, colorStrength, effects } = inject('decorations', {
    animationActive: false,
    blurActive: false,
    blurSpread: 100,
    colorActive: false,
    colorStrength: 1,
    effects: true
})
const stop0 = ref(null), stop1 = ref(null), stop2 = ref(null), stop3 = ref(null), stop4 = ref(null), stop5 = ref(null)
const blurMax = ref(2.5)


const nameA = ref(null);
const nameLS = ref(null);
const nameDC = ref(null);
const nameIO = ref(null);

const aBlur = ref(false)
const lsBlur = ref(false)
const dcBlur = ref(false)
const ioBlur = ref(false)

const letterBlurs = [aBlur, lsBlur, dcBlur, ioBlur]

const o0 = { opacity: 0 }
const o1 = { opacity: 1 }

const subTitle = ref(null);
const subTitleString = "b Developer"
const subTitleTypo = "Full Stack Wev De"
const subTitleTypoSteps = 4

const abortController = new AbortController()

async function typeLetter(ref, addedString, typoString, typoSteps, signal) {
    try {
        if (typoString) {
            for (const char of typoString) {
                await new Promise(resolve => setTimeout(resolve, 100))
                ref.value.textContent += char;
                signal.throwIfAborted()
            }
            await new Promise(resolve => setTimeout(resolve, 250))
            for (let i = 0; i < typoSteps; i++) {
                typoString = typoString.slice(0, - 1)
                await new Promise(resolve => setTimeout(resolve, 100))
                ref.value.textContent = typoString;
                signal.throwIfAborted()
            }
        }
        for (const char of addedString) {
            await new Promise(resolve => setTimeout(resolve, 100))
            ref.value.textContent += char;
            signal.throwIfAborted()
        }
        intro(signal);
    } catch (error) { emit('disablePreview', true) }
};

async function letterOn(ref, blur, blink, fast) {
    await ref.value.animate([o0, o1], { duration: fast ? 50 : 100, iterations: 1 }).finished
    ref.value.attributes.opacity.value = 1
    await new Promise(resolve => setTimeout(resolve, fast ? 25 : 50))
    blur.value = true
    if (blink) {
        await new Promise(resolve => setTimeout(resolve, fast ? 50 : 100))
        blur.value = false
        await new Promise(resolve => setTimeout(resolve, fast ? 25 : 50))
        await ref.value.animate([o1, o0], { duration: fast ? 75 : 150, iterations: 1 }).finished
        ref.value.attributes.opacity.value = 0
    }
    return Promise.resolve();
}

async function intro(signal) {
    try {
        await letterOn(nameDC, dcBlur, true)
        signal.throwIfAborted()
        await new Promise(resolve => setTimeout(resolve, 500))
        signal.throwIfAborted()
        await letterOn(nameA, aBlur, true, true)
        signal.throwIfAborted()
        await new Promise(resolve => setTimeout(resolve, 250))
        signal.throwIfAborted()
        await letterOn(nameA, aBlur)
        signal.throwIfAborted()
        await letterOn(nameDC, dcBlur, true, true)
        signal.throwIfAborted()
        letterOn(nameIO, ioBlur, false, true)
        signal.throwIfAborted()
        await letterOn(nameDC, dcBlur)
        signal.throwIfAborted()
        await letterOn(nameLS, lsBlur, true, true)
        signal.throwIfAborted()
        await letterOn(nameLS, lsBlur)
        signal.throwIfAborted()
        await new Promise(resolve => setTimeout(resolve, 250))
        signal.throwIfAborted()
        for (blur of letterBlurs) {
            blur.value = false;
        }
        emit('disablePreview');
    } catch (error) {
        for (blur of letterBlurs) {
            blur.value = false;
        }
        emit('disablePreview', true)
    }
};

function abortPreview() { abortController.abort('cancel') }

watchEffect(() => { if (!preview.value) window.removeEventListener("keydown", abortPreview, { passive: true }) })

onMounted(() => {
    preview.value ? typeLetter(subTitle, subTitleString, subTitleTypo, subTitleTypoSteps, abortController.signal) : {}
    gradientComposable(stop0, stop1, stop2, stop3, stop4, stop5)
    window.addEventListener("keydown", abortPreview)
})
</script>

<!--
SCRIPT SETUP LAYOUT:
    IMPORTS:
        vue: inject, onMounted, ref, watchEffect
        gradientComposable
    DECORATION REFS & VARS:
        EMITS: disablePreview(cancelled) - TURNS OFF preview IN App.vue, IF cancelled, DISABLES ALL DECORATIONS
        INJECT: preview - RUNS typeLetter() ON MOUNT, USED FOR CLASSES
        INJECT: animationActive, blurActive, blurSpread, colorActive, colorStrength, effects
        stop0-stop5 - ELEMENT REFS FOR EACH GRADIENT STOP
        blurMax - MAX STD DEV FOR BLUR SCALING
    NAME REFS & VARS:
        INJECT: orientation - DEFINE WINDOW ORIENTATION (2 / 4 PER ROW)
        CONST: nameA, nameLS, nameDC, nameIO - TEMPLATE REFS FOR CERTAIN LETTERS OF NAME
        CONST: aBlur, lsBlur, dcBlur, ioBlur - BLUR ACTIVE FOR CERTAIN LETTERS DURING PREVIEW
        CONST: letterBlurs - ARRAY OF Blur VARS ABOVE FOR EASIER USAGE DURING intro()
        CONST: o0, o1 - OPACITY VALUES FOR JS ANIMATION OBJECTS
        CONST: subTitle, subTitleString, subTitleTypo, subTitleTypoSteps - USED FOR typeLetter()
        CONST: abortController - USED TO CANCEL PREVIEW DURING typeLetter() OR intro()
    ANIMATION FUNCTIONS:
        typeLetter(ref, addedString, typoString, typoSteps, signal) - TYPES (THEN DELETES & TYPES AGAIN IF APPLICABLE)
            USED FOR 'Full Stack Web Developer' SUBTITLE
            TARGETS PROVIDED ref AND ADDS LETTERS W/ STAGGER TO APPEAR AS BEING TYPED
            signal ALLOWS abortController TO CANCEL FUNCTION
            CHECKS FOR signal AFTER EACH LETTER ADDED/DELETED
            RUNS intro() ON SUCCESSFUL COMPLETION
            CATCHES signal AND EMITS disablePreview(cancelled: true)
        letterOn(ref, blur, blink, fast) - ANIMATES A LETTER (GROUP) BLINKING ON/OFF LIKE AN LED SIGN
            USED ON PROVIDED LETTER (GROUP) TEMPLATE REF & CORRESPONDING PREVIEW BLUR
            blink - ANIMATES LETTER GROUP BACK OFF AFTER ON
            fast - INCREASES ANIMATION SPEED
            OVERWRITES TEMPLATE REF OPACITY VALUE AS APPLICABLE
        intro(signal) - MANAGES LETTER BLINKING ANIMATIONS
            USED FOR NAME
            signal ALLOWS abortController TO CANCEL FUNCTION
            CHECKS FOR signal AFTER EACH letterOn()
            SETS ALL letterBlurs VALUES TO FALSE ON FUNCTION CANCELLATION OR COMPLETION
            CATCHES signal AND EMITS disablePreview(cancelled: true), WHICH TURNS OFF ALL DECORATIONS
        abortPreview() - TRIGGERS abortController SIGNAL, SEPARATE FUNCTION USED W/ window.add/removeEventListener & container@click
    watchEffect - DISABLES EVENT LISTENER FOR abortPreview
    onMounted
        RUNS typeLetter()
        ATTACHES gradientComposable TO SVG
        ADDS EVENT LISTENER FOR abortPreview ON KEYDOWN
-->

<template>
    <div :class="{ preview: preview, effects: effects, container: true }" @click.stop="preview ? abortPreview() : ''">
        <svg id="name-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 100">
            <defs>
                <filter id="name-blur" x="0" y="0" height="1" width="1">
                    <feGaussianBlur result="blur" :stdDeviation="blurMax * (blurSpread / 100)" />
                    <feBlend in="SourceGraphic" in2="blur" mode="normal" />
                </filter>
                <linearGradient id="name-gradient" x1="0" y1="0" x2="100%" y2="0" gradientUnits="userSpaceOnUse">
                    <stop ref='stop0' offset="0.0" :stop-opacity="colorStrength" stop-color="#E057F2" />
                    <stop ref='stop1' offset="0.2" :stop-opacity="colorStrength" stop-color="#F2490C" />
                    <stop ref='stop2' offset="0.4" :stop-opacity="colorStrength" stop-color="#F28705" />
                    <stop ref='stop3' offset="0.6" :stop-opacity="colorStrength" stop-color="#04d94b" />
                    <stop ref='stop4' offset="0.8" :stop-opacity="colorStrength" stop-color="#04C4D9" />
                    <stop ref='stop5' offset="1.0" :stop-opacity="colorStrength" stop-color="#5D04D9" />
                </linearGradient>
            </defs>
            <text :class="{ 'preview': preview }" x=251 y="78" width="500" stroke-width="1" fill="none"
                font-size="95.1px" text-anchor="middle"
                :stroke="colorActive ? 'url(#name-gradient)' : '#fff'">
                <tspan ref="nameA" :filter="aBlur ? 'url(#name-blur)' : blurActive ? 'url(#name-blur)' : 'none'"
                    :opacity="preview ? 0 : 1">A</tspan>
                <tspan ref="nameLS" :filter="lsBlur ? 'url(#name-blur)' : blurActive ? 'url(#name-blur)' : 'none'"
                    :opacity="preview ? 0 : 1">LEXIS </tspan>
                <tspan ref="nameDC" :filter="dcBlur ? 'url(#name-blur)' : blurActive ? 'url(#name-blur)' : 'none'"
                    :opacity="preview ? 0 : 1">DEC</tspan>
                <tspan ref="nameIO" :filter="ioBlur ? 'url(#name-blur)' : blurActive ? 'url(#name-blur)' : 'none'"
                    :opacity="preview ? 0 : 1">ICCO</tspan>
            </text>
        </svg>
        <div class="subtitle-container">
            <h1 class="light-grey">&#60<span class="tag-declare">h1</span>&#62</h1>
            <h1 ref='subTitle' :class="{ blink: animationActive || preview, typed: true }">{{ preview ? '' :
        'Full Stack Web Developer' }}</h1>
            <h1>&#60/<span class="tag-declare">h1</span>&#62</h1>
        </div>
        <Transition v-if="effects">
            <div class="disclaimer" v-if="preview">
                <h1>click to disable all effects</h1>
            </div>
        </Transition>
    </div>
</template>

<!--
TEMPLATE LAYOUT:
    SVG WRAPPER - preview?, effects?, container, @click preview ? abortPreview(), 500 x 100
        defs
            filter - BLUR, name-blur
              feGaussianBlur - STD-DEV BY blurMax*blurSpread
            linear-gradient - name-gradient, USERSPACEONUSE
        text - preview?, NAME LETTERS CONTAINER, DOMINANT-BASELINE-MIDDLE, TEXT-ANCHOR-MIDDLE, STROKE: colorActive ? nameGradient : WHITE
            tspan - nameA, FILTER: aBlur/blurActive ? nameBlur : none, OPACITY: preview ? 0 : 1
            tspan - nameLS (LEXIS), FILTER: lsBlur/blurActive ? nameBlur : none, OPACITY: preview ? 0 : 1
            tspan - nameDC (DEC), FILTER: lsBlur/blurActive ? nameBlur : none, OPACITY: preview ? 0 : 1
            tspan - nameIO (ICCO), FILTER: ioBlur/blurActive ? nameBlur : none, OPACITY: preview ? 0 : 1
    div - subtitle-container
        h1 - light-grey, BRACKETS FOR OPENING TAG
            span - tag-declare, 'h1'
        h1 - blink?, typed, IF preview OR animationActive, HAS BLINKING RIGHT BORDER 'CURSOR', preview ?  NO TEXT : SUBTITLE STRING
        h1 - BRACKETS FOR CLOSING TAG
            span - tag-declare, 'h1'
    Transition - OPACITY TRANSITION FOR DISCLAIMER IF preview NOT CANCELLED
        div - disclaimer, SHOWS WHILE preview IS ACTIVE
            h1
END TEMPLATE
-->

<style scoped>
h1 {
    font-size: calc(3.5vw)
}

.container {
    box-sizing: content-box;
    height: auto;
    margin-bottom: 10vh;
    position: relative;
    top: 0;
    left: 0;
}

.container.effects {
    transition: all 3s ease;
}

.container.preview {
    padding: 15vh 0 60vh 0;
    cursor: pointer;
}

text {
    transform: scaleY(1.1);
}

tspan {
    font-family: "Bebas Neue", sans-serif;
}

.subtitle-container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    white-space: pre-wrap;
}

.typed {
    border-right: 2px solid transparent;
    letter-spacing: 2px;
    color: #fff;
}

.typed.blink {
    animation: blink 1s step-end infinite;
}

/* Blink - White */
@keyframes blink {

    0%,
    100% {
        border-color: transparent
    }

    50% {
        border-color: #fff;
    }
}

.disclaimer {
    position: fixed;
    width: 100vw;
    bottom: 0;
    text-align: center;
}

.disclaimer h1 {
    color: #fff;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>

<!--
STYLE LAYOUT:
    h1 - FONT-SIZE
    .container - RELATIVE, MARGIN-B, light-grey
        .effects - TRANSITION
        .preview - PADDING-T/B, HEIGHT, CURSOR-POINTER
    text - SCALE-Y
    tspan - BEBAS
    .subtitle-container - MARGIN-L/R-AUTO, D-FLEX, JUSTIFY-CENTER, WHITE-SPACE-PRE-WRAP (FOR typeLetter() SMOOTHNESS)
    .typed - BORDER-R, LETTER-SPACING, WHITE
        .blink - ANIMATION-blink-1s-INFINITE
    @keyframes blink - CHANGES BORDER-R FROM TRANSPARENT TO WHITE AND BACK
    .disclaimer - FIXED, W-100VW (TO AVOID SCROLLBAR SHIFT), TEXT-ALIGN-CENTER
        h1 - WHITE
    .v-enter/leave-active - 500ms TRANSITION
    .v-enter/leave-from/to - OPACITY-0
-->../assets/gradientComposable.js