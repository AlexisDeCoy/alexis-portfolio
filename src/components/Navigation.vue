<script setup>
import { computed, inject, ref } from 'vue';
const { effects } = inject('decorations', { effects: true })
const preview = inject('preview', { preview: true })
const orientation = inject('orientation', { orientation: 'landscape' })

const props = defineProps({ projectPosition: Number, renoPosition: Number, resumePosition: Number })
const active = ref('alexis_decicco');
const navOpen = ref(false)
const highlight = ref([false, false, false, false])
const navItems = computed(() => [
  { title: 'projects', activeTitle: 'Projects', position: props.projectPosition },
  { title: 'renovations', activeTitle: 'Renovations', position: props.renoPosition },
  { title: 'resume', activeTitle: 'Resume', position: props.resumePosition }
])

window.addEventListener('scroll', () => updateActive())

function updateActive() {
  if (window.scrollY < props.projectPosition && active.value !== 'alexis_decicco') active.value = 'alexis_decicco'
  else if (window.scrollY >= props.projectPosition && window.scrollY < props.renoPosition && active.value !== 'projects') active.value = 'projects'
  else if (window.scrollY >= props.renoPosition && window.scrollY < props.resumePosition && active.value !== 'renovations') active.value = 'renovations'
  else if (window.scrollY >= props.resumePosition && active.value !== 'resume') active.value = 'resume'
}

function scroll(yPos) {
  window.scrollTo(0, yPos + 1)
}
</script>

<!--
SCRIPT SETUP LAYOUT:
  IMPORTS:
    VUE: computed, inject, ref
  DECORATION REFS & VARS:
    INJECT: effects - FOR OPACITY CSS TRANSITION ON PREVIEW END
    INJECT: preview - HIDES NAV ON NAME ANIMATION
  NAV REFS & VARS:
    INJECT: orientation - DEFINE WINDOW ORIENTATION (DROPDOWN / SPREAD)
    PROPS: projectPosition, renoPosition, resumePosition - WINDOW Y POSITION FOR SCROLLTO
    active - TITLE OF CURRENT SECTION, DEFINED BY WINDOW Y POSITION
    navOpen - DROPDOWN OPEN (MOBILE)
    highlight - REPLACEMENT FOR HOVER EFFECT USING MOUSEENTER/LEAVE
    navItems - OBJECT FOR LINK TITLES AND POSITIONS
  NAV FUNCTIONS:
    ADD EVENT LISTENER FOR WINDOW SCROLL
    updateActive - RUNS ON SCROLL, CHANGES ACTIVE REF BASED ON WINDOW Y AND POSITION PROPS
    scroll - ONCLICK FOR LINKS, SCROLLS WINDOW ADD 1PX TO ENSURE updateActive CHANGES ACCURATELY
-->

<template>
  <nav :class="{ preview: preview, portrait: orientation === 'portrait', effects: effects }">
    <button v-if="orientation === 'portrait'" class="nav-open" @click.prevent="navOpen = !navOpen">
      <div v-if="!navOpen"></div>
      <div></div>
      <div v-if="!navOpen"></div>
    </button>
    <h1 :class="{ highlight: highlight[0] }" @click="scroll(0); navOpen = false" @mouseenter="highlight[0] = true"
      @mouseleave="highlight[0] = false">&#60<span :class="'alexis_decicco' === active ? 'component' : 'tag-declare'">
        {{ 'alexis_decicco' === active ? 'Alexis_DeCicco' : 'alexis_decicco'
        }}</span>/&#62</h1>
    <template v-for="(item, i) in navItems">
      <h1 v-if="orientation !== 'portrait' || navOpen" :class="{ highlight: highlight[i + 1] }"
        @click="scroll(item.position); navOpen = false" @mouseenter="highlight[i + 1] = true" @mouseleave="highlight[i + 1] = false">
        &#60<span :class="item.title === active ? 'component' : 'tag-declare'">
          {{ item.title === active ? item.activeTitle : item.title
          }}</span>/&#62</h1>
    </template>
  </nav>
</template>

<!--
TEMPLATE LAYOUT:
  nav - DEFINE ORIENTATION (FOR DROPDOWN), EFFECTS (FOR OPACITY TRANSITION)
    button - FOR PORTRAIT OPEN/CLOSE DROPDOWN
      div - HAMBURGER (IF CLOSED) / MINUS (IF OPEN) ICON
    h1 - FOR NAME, SEPARATE TO SHOW EVEN WHEN DROPDOWN IS CLOSED, INCLUDES OPENING AND CLOSING </>, highlight ? mouseenter : mouseleave
      span - LINK NAME, CHANGES STYLE DEPENDING ON IF active/highlight
    template - V FOR EACH LINK IN navItems (IF OPEN ON PORTRAIT)
      h1 - V IF LANDSCAPE OR navOpen
        span
END TEMPLATE
-->

<style scoped>
nav {
  background: var(--dark-grey-translucent);
  backdrop-filter: blur(10px);
  /* box-shadow: 0 0 10px 5px var(--tag-declare-color); */
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  padding: 1vh 5%;
  z-index: 2;
}

nav.effects {
  transition: all 1s ease;
}

nav.portrait {
  flex-direction: column;
}

nav.preview {
  opacity: 0;
}

.nav-open {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 40px;
  border: none;
  font-size: 30px;
  background: var(--tag-declare-color);
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.nav-open div {
  height: 5px;
  width: 60%;
  background-color: #fff;
  border-radius: 10px;
  margin: 2px 0;
}

h1 {
  cursor: pointer;
  font-size: calc(1.5vw + 10px);
}

.portrait h1 {
  font-size: calc(3.5vw + 10px);
}

.effects .highlight span {
  text-decoration: underline;
}
</style>

<!--
STYLE LAYOUT:
  nav - FIXED, D-FLEX, OPACITY / FILTER, PADDING, DARK-GREY-TRANSLUCENT
    .effects - SMOOTH OPACITY CHANGE ON PREVIEW END
    .portrait - FLEX-COLUMN, FOR MOBILE
    .preview - OPACITY 0 DURING INTRO ANIMATION
  .nav-open - STYLE FOR MOBILE DROPDOWN BUTTON: D-FLEX-COLUMN, BUTTON COLOR, ABSOLUTE, TAG-DECLARE
    div - HAMBURGER / MINUS LINES: COLOR, SIZING
  h1 - POINTER, FONT SIZE
    .portrait - LARGER-FONT
  .highlight span - HOVER UNDERLINE
-->