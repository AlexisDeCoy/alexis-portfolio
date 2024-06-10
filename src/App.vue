<script setup>
import { computed, onMounted, provide, ref, watchEffect } from 'vue';
import Decorations from './components/Decorations.vue';
import Navigation from './components/Navigation.vue'
import Name from './components/Name.vue';
import Technologies from './components/Technologies.vue';
import Foot from './components/Foot.vue';
import SectionBreak from './assets/SectionBreak.vue';
import ProjectPreview from './components/ProjectPreview.vue';
import projectData from './assets/data/projectData';
import RenoPreview from './components/RenoPreview.vue';
import renoData from './assets/data/renoData';
import Resume from './components/Resume.vue';
import PartBreak from './assets/PartBreak.vue'

//MOBILE FIXES 06.10.24
//repair image routes !
// adjust spacing for contact info in resume !
//increase portrait nav font-size !
//disable click-hover for slider active !

//fix Name svg gradient placement and potential top padding clip
//resize slider/modal container to fit svg background
//fix blur for: Technologies, Name, Previews -
// adjust blend mode so primary shape displays first, maybe decrease stddev
//option to increase legibility for resume --light-grey

//ADD CSS VAR FOR DARK-GREY-TRANSLUCENT (#181818ca)

//COMMENTS COMPLETE FOR:
//assets.ProjectBreak
//assets.SectionBreak
//Decorations
//Foot
//gradientComposable


//Name
//Navigation
//ProjectPreview

//Resume
//Technologies


const orientation = ref(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape')
const componentKey = ref(1)

window.addEventListener('resize', () => {
  if (orientation.value === 'portrait' && window.innerHeight <= window.innerWidth) {
    orientation.value = 'landscape'
    componentKey.value = componentKey.value + 1
  }
  else if (orientation.value === 'landscape' && window.innerHeight > window.innerWidth) {
    orientation.value = 'portrait'
    componentKey.value = componentKey.value + 1
  }
})

const projectPosition = ref(500)
const renoPosition = ref(1000)
const resumePosition = ref(1500)

const animationActive = ref(false)
const animationSpeed = ref(1)
const blurActive = ref(false)
const blurSpread = ref(100)
const colorActive = ref(true)
const colorStrength = ref(1)
const effects = ref(true)
const decorations = {
  animationActive: animationActive,
  animationSpeed: animationSpeed,
  blurActive: blurActive,
  blurSpread: blurSpread,
  colorActive: colorActive,
  colorStrength: colorStrength,
  effects: effects
};

const sectTitleClass = computed(() => ({ section: true, title: true, component: true, portrait: orientation.value === 'portrait' }));
const preview = ref(true);

function disablePreview(cancelled) {
  preview.value = false
  document.body.classList.remove('prevent-scroll')
  if (cancelled) {
    animationActive.value = false
    blurActive.value = false
    colorActive.value = false
    effects.value = false
    componentKey.value = componentKey.value + 1
  } else setTimeout(() => componentKey.value = componentKey.value + 1, 3000)
}

function setPosition(position, top) {
  if (position === 'project') projectPosition.value = top
  if (position === 'reno') renoPosition.value = top
  if (position === 'resume') resumePosition.value = top
}

provide('orientation', orientation);
provide('decorations', decorations);
provide('preview', preview);

watchEffect(() => {
  if (effects.value === true) document.documentElement.style.scrollBehavior = "smooth"
  else document.documentElement.style.scrollBehavior = "auto"
})

onMounted(() => {
  document.body.classList.add('prevent-scroll')
  document.body.wid
  setTimeout(() => { window.scrollTo(0, 0) }, 100)
})
</script>

<template>
  <Navigation :key="componentKey" :projectPosition="projectPosition" :renoPosition="renoPosition"
    :resumePosition="resumePosition" />
  <Decorations v-model:animationActive='animationActive' v-model:animationSpeed='animationSpeed'
    v-model:blurActive='blurActive' v-model:blurSpread='blurSpread' v-model:colorActive='colorActive'
    v-model:colorStrength='colorStrength' v-model:effects='effects' />
  <div class="spacer"></div>
  <Name @disablePreview="disablePreview" />
  <Technologies :key="componentKey" />
  <SectionBreak :key="componentKey" id="project" @setPosition="(top) => setPosition('project', top)" />
  <h1 :class="sectTitleClass">Projects:</h1>
  <template v-for="(project, index) in projectData">
    <PartBreak :id="`project${index}`" />
    <ProjectPreview :project="project" :id="`project${index}`" />
  </template>
  <SectionBreak :key="componentKey" id="reno" @setPosition="(top) => setPosition('reno', top)" />
  <h1 :class="sectTitleClass">Renovations:</h1>
  <template v-for="(reno, index) in renoData">
    <PartBreak :id="`reno${index}`" />
    <RenoPreview :reno="reno" :id="`reno${index}`" />
  </template>
  <SectionBreak :key="componentKey" id="resume" @setPosition="(top) => setPosition('resume', top)" />
  <Resume />
  <SectionBreak id="foot" />
  <Foot />
  <div class="spacer"></div>
</template>

<style>
.section.title {
  width: 90%;
  text-align: center;
  margin: 5vh auto 0;
  font-size: calc(8.5vw + 10px);
  line-height: 1;
}

.section.title.portrait {
  text-align: left;
  font-size: calc(13.5vw + 10px);
}

.spacer {
  width: 100%;
  height: 15vh;
  min-height: 50px;
}
</style>