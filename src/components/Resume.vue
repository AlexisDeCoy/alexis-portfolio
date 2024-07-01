<script setup>
import resumeData from '@/assets/data/resumeData';
import PDF from '../assets/data/Resume.pdf';
const { skills, projects, experience, education } = resumeData;

//ADD year for projects?
</script>

<!--
SCRIPT SETUP LAYOUT:
    IMPORTS:
        resumeData - PARSED DATA FROM MY RESUME, OBJECT
            skills - {languages: ['','', ...], frameworks: ['','', ...], databases: ['','', ...], tools: ['','', ...]}
            projects - OBJECT ARRAY
                {title: '', role: '', gitHub: '', link: '', description: '', bullets: ['','', ...]}
            experience - OBJECT ARRAY
                {position: '', company: '', city: '', state: '', yearStarted: 0, yearEnded: 0, bullets: ['','', ...]}
            education - OBJECT ARRAY
                {school: '', degree: '', city: '', state: '', yearStarted: 0, yearEnded: 0, coursework: ''}
    REFS & VARS:
        skills, projects, experience, education - DESTRUCTURED resumeData
-->

<template>
    <section class="head">
        <h1>ALEXIS DECICCO</h1>
        <h3 class="contact"><a href="https://github.com/AlexisDeCoy" target='_blank'
                rel='noopener noreferrer'>GitHub</a> | <a href="https://linkedin.com/in/alexis-decicco" target='_blank'
                rel='noopener noreferrer'>LinkedIn</a> | <a :href="PDF" target='_blank'
                rel='noopener noreferrer'>PDF</a></h3>
        <h3 class="contact">(970) 567-9241 | alexiscdecicco@gmail.com</h3>
        <h3 class="contact">Fort Collins, CO</h3>
    </section>
    <section class="skills">
        <h2>Technical Skills</h2>
        <div class="skill part">
            <h3>Languages:</h3>
            <h4>
                <template v-for="(lang, i) in skills.languages">
                    <span>{{ lang }}{{ i < skills.languages.length - 1 ? ', ' : '' }}</span>
                </template>
            </h4>
        </div>
        <div class="skill part">
            <h3>Frameworks/Libraries:</h3>
            <h4>
                <template v-for="(frame, i) in skills.frameworks">
                    <span>{{ frame }}{{ i < skills.frameworks.length - 1 ? ', ' : '' }}</span>
                </template>
            </h4>
        </div>
        <div class="skill part">
            <h3>Databases:</h3>
            <h4>
                <template v-for="(dB, i) in skills.databases">
                    <span>{{ dB }}{{ i < skills.databases.length - 1 ? ', ' : '' }}</span>
                </template>
            </h4>
        </div>
        <div class="skill part">
            <h3>Tools:</h3>
            <h4>
                <template v-for="(tool, i) in skills.tools">
                    <span>{{ tool }}{{ i < skills.tools.length - 1 ? ', ' : '' }}</span>
                </template>
            </h4>
        </div>
        <div class="part">
            <h3>Other:</h3>
            <h4>
                <template v-for="(otherItem, i) in skills.other">
                    <span>{{ otherItem }}{{ i < skills.other.length - 1 ? ', ' : '' }}</span>
                </template>
            </h4>
        </div>
    </section>
    <section class="education">
        <h2>Education</h2>
        <div class="part" v-for="school in education">
            <div class="content-info-container">
                <h3 class="content">{{ school.degree }}</h3>
                <h3 class="info">{{ school.yearStarted }}{{ school.yearEnded !== 0 ? '-' + school.yearEnded : '' }}</h3>
            </div>
            <h4>{{ school.school }} | {{ school.city }}{{ school.state !== '' ? ', ' + school.state :
                    '' }}
            </h4>
            <h4>{{ school.coursework }}</h4>
        </div>
    </section>
    <section class="projects">
        <h2>Technical Projects</h2>
        <div class="part" v-for="project in projects">
            <div class="content-info-container">
                <h3 class="content">{{ project.title }} | {{ project.role }}</h3>
                <h3 class="project-links"><a :href="project.gitHub" target='_blank' rel='noopener noreferrer'>GitHub</a><span
                        v-if="project.link !== 'n/a'"> | <a :href="project.link" target='_blank'
                            rel='noopener noreferrer'>URL</a></span></h3>
            </div>
            <!-- <h3 class="info">{{ project.role }}</h3> -->
            <h4 class="details">{{ project.description }}</h4>
            <div class="bullet" v-for="bullet in project.bullets">
                <h4>-</h4>
                <h4>{{ bullet }}</h4>
            </div>
        </div>
    </section>
    <section class="experience">
        <h2>Professional Experience</h2>
        <div class="part" v-for="job in experience">
            <div class="content-info-container">
                <h3 class="content">{{ job.position }}</h3>
                <h3 class="info">{{ job.yearStarted }}{{ job.yearEnded !== 0 ? '-' + job.yearEnded : '' }}</h3>
            </div>
            <h4 class="details">{{ job.company }} | {{ job.city }}, {{ job.state }}</h4>
            <div class="bullet" v-for="bullet in job.bullets">
                <h4>-</h4>
                <h4>{{ bullet }}</h4>
            </div>
        </div>
    </section>
    <section class="foot">
        <h3 class="contact"><a :href="PDF" target='_blank' rel='noopener noreferrer'>PDF</a></h3>
    </section>
</template>

<!--
    TEMPLATE LAYOUT:
    section - head
    h1 - NAME
    h3 - contact: GITHUB, LINKEDIN, PDF
    h3 - contact: PHONE, EMAIL
    h3 - contact: LOCATION
    section - skills
    h2 - SECTION TITLE
    div - part
    h3 - PART TITLE
            template - V FOR EACH ITEM IN ARRAY
                span - array item
    section - projects
        h2 - SECTION TITLE
        div - part, V FOR project IN projects
            div - content-info-container
                h3 - content, PROJECT TITLE
                h3 - info, PROJECT ROLE
            h4 - details, SHORT DESCRIPTION
            div - bullet, V FOR BULLET IN project.bullets
                h5 - LIST DECORATION, '-'
                h5 - BULLET CONTENT
    section - experience
        h2 - SECTION TITLE
        div - part, V FOR job IN experience
            div - content-info-container
                h3 - content, JOB POSITION
                h3 - info, JOB YEAR RANGE, (-YEAR ENDED IF APPLICABLE)
            h4 - details, COMPANY, CITY, STATE
            div - bullet, V FOR BULLET IN job.bullets
                h5 - LIST DECORATION, '-'
                h5 - BULLET CONTENT
    section - EDUCATION
        h2 - SECTION TITLE
        div - part, V FOR school IN education
            div - content-info-container
                h3 - content, SCHOOL DEGREE
                h3 - info, SCHOOL YEAR RANGE, (-YEAR ENDED IF APPLICABLE)
            h4 - details, SCHOOL NAME, CITY, STATE
            h5 - details, COURSEWORK
    section - FOOT
        h3 - contact, PDF
END TEMPLATE
-->

<style scoped>
* {
    line-height: 120%;
}

a {
    /* text-decoration: underline; */
    text-decoration-thickness: 2px;
}

section {
    margin: 0 5%;
    padding: 3vh 0;
}

section.foot {
    margin: 0;
    padding: 0;
    padding-bottom: 12vh;
}

.foot h3.contact {
    margin: 0;
}

.part {
    margin-bottom: 5vh;
}

.skill.part {
    margin-bottom: 2vh;
}

h1 {
    font-family: "Bebas Neue", sans-serif;
    font-size: calc(9.5vw + 10px);
    color: #fff;
    text-align: center;
}

h2 {
    font-family: "Bebas Neue", sans-serif;
    font-size: calc(3.5vw + 10px);
    color: #fff;
    margin-bottom: 1vh;
}

h3 {
    font-size: calc(2.1vw + 5px);
    color: #fff;
    margin-left: 2%;
}

h3.contact {
    text-align: center;
    margin: 2vh 5%;
}

h3.content,
h3.info {
    margin: 0;
}

h3>span {
    color: #fff;
}

h4 {
    margin-left: 2%;
    font-size: calc(1.2vw + 8px);
}

h4>span {
    color: var(--light-grey-color);
    font-size: calc(1.2vw + 8px);
}

.bullet h4 {
    margin: 0;
}

h5 {
    font-size: calc(1.2vw + 7px);
}

.bullet {
    margin-left: 4%;
    display: grid;
    grid-template-columns: 2% auto;
    margin: 2vh 0 2vh 4%;
    color: var(--light-grey-color);
    text-align: justify;
}

.details {
    text-align: justify;
    margin-left: 2%;
    color: #fff;
}

.project-links {
    text-align: right;
}

.content-info-container {
    display: flex;
    justify-content: space-between;
    margin: 2vh 0 2vh 2%;
}

.content {
    max-width: 80%;
}
</style>

<!--
STYLE LAYOUT:
    * - LINE HEIGHT INCREASE
    a - UNDERLINE, UNDERLINE-HEIGHT
    section - MARGIN
    .part - MARGIN-BOTTOM
    h1 - BEBAS, FONT-SIZE, ALIGN-CENTER, WHITE
    h2 - BEBAS, FONT-SIZE, WHITE
    h3 - FONT-SIZE, MARGIN-LEFT, WHITE
        .contact - ALIGN-CENTER, MARGIN
        .content, .info - MARGIN-NONE
        .info - BEBAS, ALIGN-RIGHT
        >span - WHITE
    h4 - MARGIN-LEFT, FONT-SIZE
        >span - FONT-SIZE, LIGHT-GREY
    h5 - WHITE, FONT-SIZE
    .bullet - MARGIN-LEFT/BOTTOM, D-GRID, TEMPLATE-COLS
    .details - MARGIN-LEFT
    .projects
        .content - ALIGN-CENTER, MARGIN-TOP, WHITE
    .experience
        .part - MARGIN-BOTTOM
    .content-info-container - D-FLEX, JUSTIFY-BETWEEN, MARGIN-LEFT
    .content - MAX-W
-->