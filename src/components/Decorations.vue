<script setup>
import { computed, inject, ref } from 'vue'
const preview = inject('preview', { preview: true })
const animationActive = defineModel('animationActive')
const animationSpeed = defineModel('animationSpeed')
const blurActive = defineModel('blurActive')
const blurSpread = defineModel('blurSpread')
const colorActive = defineModel('colorActive')
const colorStrength = defineModel('colorStrength')
const effects = defineModel('effects')

const orientation = inject('orientation', { orientation: 'landscape' })
const decorationsOpen = ref(false)
const containerClasses = computed(() => ({
    'portrait': orientation.value === 'portrait',
    'preview': preview.value,
    'open': decorationsOpen.value,
    'effects': effects.value,
    'decorations-container': true
}))
</script>

<!--
SCRIPT SETUP LAYOUT:
    IMPORTS:
        vue: computed, inject, ref
    DECORATION REFS & VARS:
        INJECT: preview - HIDES DECORATIONS ON NAME ANIMATION
        defineModel - animationActive, animationSpeed, blurActive, blurSpread, colorActive, colorStrength, effects
            effects - CSS TRANSITIONS ON?
    MENU REFS & VARS:
        INJECT: orientation - DEFINE WINDOW ORIENTATION (BOTTOM / LEFT)
        decorationsOpen - MENU VISIBLE
        containerClasses - COMPUTED: portrait? , preview? , open? , effects? , decorations-container
-->

<template>
    <div :class="containerClasses">
        <button class="styles-open" @click.prevent="decorationsOpen = !decorationsOpen">
            <div v-if="!decorationsOpen"></div>
            <div></div>
            <div v-if="!decorationsOpen"></div>
        </button>
        <div class="decorations">
            <h1 class="style-tag">&#60<span class="tag-declare">style</span>&#62</h1>
            <div class="decorations">
                <section>
                    <h1 :class="{disabled: !colorActive, 'style-selector': true}">.animation &#123;</h1>
                    <div class="attribute" v-if="!colorActive">
                        <div class="tab">&#149;&#149;&#149;&#149;</div>
                        <label><span class="import-control">requires</span><span class="css">.color</span></label>
                    </div>
                    <div :class="{disabled: !colorActive, attribute: true}">
                        <div class="tab">&#149;&#149;&#149;&#149;</div>
                        <label for="animationCheck">active:</label>
                        <input id="animationCheck" class="checkbox" type="checkbox" :disabled="!colorActive" v-model="animationActive">
                        <div class="value">{{ animationActive ? 'Yes' : 'No' }}</div>
                    </div>
                    <div :class="{disabled: !colorActive, attribute: true}">
                        <div class="tab">&#149;&#149;&#149;&#149;</div>
                        <label for="animationRange">speed:</label>
                        <div class="value">{{ animationSpeed }}x</div>
                    </div>
                    <div class="attribute">
                        <div class="tab">&#149;&#149;&#149;&#149;</div>
                        <input id="animationRange" type="range" step="0.1" min="-5" max="5" :disabled="!colorActive" v-model="animationSpeed">
                    </div>
                    <h1 :class="{disabled: !colorActive, 'style-selector': true, close: true}">&#125;</h1>
                    <div class="attribute"></div>
                </section>
                <section>
                    <h1 class="style-selector">.blur &#123;</h1>
                    <div class="attribute">
                        <div class="tab">&#149;&#149;&#149;&#149;</div>
                        <label for="blurCheck">active: </label>
                        <input id="blurCheck" class="checkbox" type="checkbox" v-model="blurActive">
                        <div class="value">{{ blurActive ? 'Yes' : 'No' }}</div>
                    </div>
                    <div class="attribute">
                        <div class="tab">&#149;&#149;&#149;&#149;</div>
                        <label for="blurRange">spread:</label>
                        <div class="value">{{ blurSpread }}%</div>
                    </div>
                    <div class="attribute">
                        <div class="tab">&#149;&#149;&#149;&#149;</div>
                        <input id="blurRange" type="range" min="0" max="100" v-model="blurSpread">
                    </div>
                    <h1 class="style-selector close">&#125;</h1>
                    <div class="attribute"></div>
                </section>
                <section>
                    <h1 class="style-selector">.color &#123;</h1>
                    <div class="attribute">
                        <div class="tab">&#149;&#149;&#149;&#149;</div>
                        <label for="colorCheck">active: </label>
                        <input id="colorCheck" class="checkbox" type="checkbox" v-model="colorActive">
                        <div class="value">{{ colorActive ? 'Yes' : 'No' }}</div>
                    </div>
                    <div class="attribute">
                        <div class="tab">&#149;&#149;&#149;&#149;</div>
                        <label for="colorRange">vibrancy:</label>
                        <div class="value">{{ Math.ceil(colorStrength * 100) }}%</div>
                    </div>
                    <div class="attribute">
                        <div class="tab">&#149;&#149;&#149;&#149;</div>
                        <input id="colorRange" type="range" step='0.01' min="0" max="1" v-model="colorStrength">
                    </div>
                    <h1 class="style-selector close">&#125;</h1>
                    <div class="attribute"></div>
                </section>
                <section>
                    <h1 class="style-selector">.effects &#123;</h1>
                    <div class="attribute">
                        <div class="tab">&#149;&#149;&#149;&#149;</div>
                        <label for="effectsCheck">active: </label>
                        <input id="effectsCheck" class="checkbox" type="checkbox" v-model="effects">
                        <div class="value">{{ effects ? 'Yes' : 'No' }}</div>
                    </div>
                    <h1 class="style-selector close">&#125;</h1>
                </section>
            </div>
            <h1 class="style-tag">&#60/<span class="tag-declare">style</span>&#62</h1>
        </div>
    </div>
</template>

<!--
TEMPLATE LAYOUT:
    div - containerStyles
        button - FOR PORTRAIT OPEN DROPDOWN
            div - HAMBURGER (IF CLOSED) / MINUS (IF OPEN) ICON
    div - decorations, OUTER CONTAINER
        h1 - styleTag, STYLES
            div - decorations, INNER CONTAINER
                section - FOR ANIMATION THRU COLOR
                h1 - style-selector, STYLE NAME, OPENING {
                    IF: .animation && !colorActive - GREY OUT TEXT FOR .style-selector, label, value
                        div - attribute - FOR .animation, REQUIRE .color STATEMENT, NOT GREYED OUT
                            div - tab
                            label
                                span - import-control
                                span - css
                    END IF
                    div - attribute, FOR EACH LINE
                        div - tab, DOTS
                        label - checkbox, FOR CHECKBOX
                        input - active? , CHECKBOX , V MODEL
                        div - value, YES/NO
                    div - attribute
                        div - tab
                        label - FOR RANGE
                        div - value, PERCENTAGE
                    <div - attribute
                        div - tab
                        input - VALUE , RANGE , V MODEL
                    <h1 - style-selector close, CLOSING }
                    div - attribute, EMPTY LINE
                section - FOR EFFECTS
                    h1 - style-selector, EFFECTS
                    div - attribute
                        div - tab
                        label - checkbox, FOR effectsCheck, effects?
                        input - FOR effectsCheck , CHECKBOX , V MODEL effects
                        div - value
                    h1 - style-selector close
            h1 - style-tag, <style/>
END TEMPLATE
-->

<style scoped>
* {
    z-index: 4;
}

.decorations-container {
    padding: 10px 10px 10px 0;
    box-sizing: border-box;
    width: 400px;
    height: 80vh;
    position: fixed;
    top: 10vh;
    left: 0;
    transform: translate(-100%, 0);
    border-radius: 0 20px 20px 0;
    box-shadow: none;
    background: var(--dark-grey-translucent);
    backdrop-filter: blur(10px);
}

.decorations-container.effects {
    transition: all 1s ease;
}

.decorations-container.portrait {
    width: 100%;
    top: 100%;
    transform: none;
    border-radius: 20px 20px 0 0;
}

.decorations-container.preview {
    opacity: 0;
}

.decorations-container.open {
    transform: translate(0, 0);
    box-shadow: 0 0 10px 5px var(--tag-declare-color);
}

.decorations-container.portrait.open {
    transform: translate(0, -100%)
}

.decorations {
    width: 100%;
    height: 100%;
    overflow: auto;
    scrollbar-color: #fff transparent;
    display: flex;
    flex-direction: column;
}

.styles-open {
    position: absolute;
    top: 50%;
    left: 100%;
    height: 10vh;
    min-height: 40px;
    width: 40px;
    transform: translateY(-50%);
    border: none;
    font-size: 30px;
    background: var(--tag-declare-color);
    border: none;
    border-radius: 0 12px 12px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.styles-open div {
    height: 5px;
    width: 60%;
    background-color: #fff;
    border-radius: 10px;
    margin: 2px 0;
}

.portrait .styles-open {
    justify-content: space-evenly;
    border-radius: 12px 12px 0 0;
    width: 30%;
    height: 40px;
    top: 0;
    left: 50%;
    transform: translate(-50%, -100%);
}

.portrait .styles-open div {
    width: 50%;
}

section {
    flex: 1;
    display: flex;
    flex-direction: column;
}

section>* {
    flex: 1;
    display: flex;
    align-items: center;
}

h1 {
    line-height: 0.8;
    margin: 1vh 0;
}

.style-tag {
    margin: 7px 0;
    display: block;
}

.style-selector {
    color: var(--css-color);
    font-size: 30px;
}

.style-selector.close::before {
    margin-right: 14px;
}

.attribute {
    display: flex;
    align-items: stretch;
}

.attribute>* {
    display: flex;
    align-items: center;
    font-size: 1.8em;
}

.style-selector.disabled,
.attribute.disabled > label,
.attribute.disabled > .value {
    color: var(--light-grey-color);
}

.attribute label {
    margin-right: 5.3px;
}

.attribute .value {
    margin-left: 10px;
    color: var(--tag-declare-color);
}

.style-tag,
.style-selector,
.attribute {
    counter-increment: line-num;
}

.style-tag::before,
.style-selector::before,
.attribute::before {
    display: inline-block;
    width: 36px;
    text-align: right;
    height: 100%;
    content: counter(line-num);
    margin-right: 20px;
    margin-left: 5px;
    font-size: 30px;
    color: var(--light-grey-color);
    box-sizing: border-box;

}

.tab {
    box-sizing: border-box;
    font-size: 1.2em;
    padding: 3.4px 3.5px 0 3.5px;
    border-left: 2px solid var(--light-grey-color);
}

label {
    color: var(--attr-color);
    font-size: 1.5em;
}

.checkbox {
    height: 100%;
}

input[type="checkbox"] {
    box-sizing: border-box;
    height: 30px;
    width: 30px;
    position: relative;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border: 2px solid var(--attr-color);
    background-color: var(--tag-declare-color);
    appearance: none;
    outline: none;
    border-radius: 2px;
}

input[type="checkbox"]:checked {
    background-size: cover;
    background-color: var(--attr-color);
    border: 2px solid var(--tag-declare-color);
    padding: 2px;
}

input[type="checkbox"]:not(:disabled):checked {
    background-image: url('/icons/checkmark.svg');
}

input[type="checkbox"]:disabled {
    background-color: var(--light-grey-color);
    border: 2px solid #fff;
}

input[type="checkbox"]:disabled:checked {
    background-image: url('/icons/checkmark.svg');
}

.effects input[type="checkbox"]:not(:disabled):hover {
    background-color: var(--attr-color);
    border: 2px solid var(--tag-declare-color);
    transform: translateY(-50%) scale(1.1);
}

.effects input[type="checkbox"]:not(:disabled):checked:hover {
    border: 2px solid var(--attr-color);
    background-color: var(--tag-declare-color);
}

input[type="range"] {
    margin-top: 0.1vh;
    width: 150px;
}
</style>

<!--
STYLE LAYOUT:
    * - Z-INDEX-4
    .decorations-container - L, FIXED, BORDER-RADIUS-B-R, TRANSLATE-L-100, DARK-GREY-TRANSLUCENT, FILTER, PADDING, BOX-SHADOW-NONE
        .effects - TRANSLATE TRANSITION
        .portrait - B, TRANSLATE-0, BORDER-RADIUS-T-L/R
        .preview - OPACITY-0
        .open - TRANSLATE-0, BOX-SHADOW
        .portrait.open - TRANSLATE-U-100
    .decorations - OVERFLOW-AUTO, SCROLLBAR-WHITE-0, D-FLEX-COLUMN
    .styles-open - ABSOLUTE, TRANSLATE-UP-50, TAG-DECLARE, BORDER-RADIUS-T/B-R, D-FLEX, ALIGN-CENTER, JUSTIFY-CENTER
        div - WHITE, MARGIN-T/B, BORDER-RADIUS
        .portrait -> - JUSTIFY-EVENLY, BORDER-RADIUS-T-L/R, TRANSLATE-L-50-U-100
    section - F-1, D-FLEX-COLUMN
        * - F-1, D-FLEX, ALIGN-CENTER
    h1 - LINE-HEIGHT, MARGIN-T/B
    .style-tag - MARGIN-T/B, D-BLOCK
    .style-selector - css-color, FONT-SIZE
        .close::before - MARGIN-R
    .attribute - D-FLEX, ALIGN-STRETCH
        * - D-FLEX, ALIGN-CENTER, FONT-SIZE
        label - MARGIN-RIGHT
        .value - MARGIN-LEFT, tag-declare
    .style-tag/selector, attribute - COUNTER-INCREMENT-LINE-NUM
        ::before - D-INLINE-BLOCK, TEXT-ALIGN-RIGHT, CONTENT-COUNTER, MARGIN-L/R, FONT-SIZE, light-grey
    .tab - FONT-SIZE, PADDING, BORDER-LEFT, light-grey
    label - ATTR-COLOR, FONT-SIZE
    .checkbox - HEIGHT-100
    input["checkbox"] - ASPECT-1, MARGIN-TOP, BORDER-attr-color, BACKGROUND-tag-declare, APPEARANCE-NONE, OUTLINE-NONE, BORDER-RADIUS
        :checked - BACKGROUND-SIZE-COVER, BORDER-tag-declare, BACKGROUND-attr-color, PADDING
        :not(:disabled):checked - BACKGROUND-IMG-checkmark.svg
        :disabled - BACKGROUND-light-grey, BORDER-WHITE
        :disabled:checked - BACKGROUND-IMG-checkmark.svg
        :not(:disabled):hover - BACKGROUND-attr-color, BORDER-tag-declare, SCALE-1.1
        :not(:disabled):checked:hover - BORDER-attr-color, BACKGROUND-tag-declare
    input["range"] - MARGIN-TOP
-->