<script setup>
import resumeData from '@/assets/resumeData';
const { skills, projects, experience, education } = resumeData;

//FINISH resumeData, add links
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
        <h3 class="contact"><a href="github.com/AlexisDeCoy">GitHub</a> | <a
                href="linkedin.com/in/alexis-decicco">LinkedIn</a> | <a href="">PDF</a></h3>
        <h3 class="contact">(970) 567-9241 | alexiscdecicco@gmail.com</h3>
        <h3 class="contact">Fort Collins, CO</h3>
    </section>
    <section class="skills">
        <h2>Technical Skills</h2>
        <div class="part">
            <h3>Languages:</h3>
            <h4>
                <template v-for="(lang, i) in skills.languages">
                    <span>{{ lang }}{{ i < skills.languages.length - 1 ? ', ' : '' }}</span>
                </template>
            </h4>
        </div>
        <div class="part">
            <h3>Frameworks/Libraries:</h3>
            <h4>
                <template v-for="(frame, i) in skills.frameworks">
                    <span>{{ frame }}{{ i < skills.frameworks.length - 1 ? ', ' : '' }}</span>
                </template>
            </h4>
        </div>
        <div class="part">
            <h3>Databases:</h3>
            <h4>
                <template v-for="(dB, i) in skills.databases">
                    <span>{{ dB }}{{ i < skills.databases.length - 1 ? ', ' : '' }}</span>
                </template>
            </h4>
        </div>
        <div class="part">
            <h3>Tools:</h3>
            <h4>
                <template v-for="(tool, i) in skills.tools">
                    <span>{{ tool }}{{ i < skills.tools.length - 1 ? ', ' : '' }}</span>
                </template>
            </h4>
        </div>
    </section>
    <section class="projects">
        <h2>Technical Projects</h2>
        <div class="part" v-for="project in projects">
            <div class="content-info-container">
                <h3 class="content">{{ project.title }}</h3>
                <h3 class="info">{{ project.role }}</h3>
            </div>
            <h4 class="details">{{ project.description }}</h4>
            <div class="bullet" v-for="bullet in project.bullets">
                <h5>-</h5>
                <h5>{{ bullet }}</h5>
            </div>
            <h4 class="contact"><a :href="project.gitHub">GitHub</a> | <a :href="project.link">URL</a></h4>
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
                <h5>-</h5>
                <h5>{{ bullet }}</h5>
            </div>
        </div>
    </section>
    <section>
        <h2>Education</h2>
        <div class="part" v-for="school in education">
            <div class="content-info-container">
                <h3 class="content">{{ school.degree }}</h3>
                <h3 class="info">{{ school.yearStarted }}{{ school.yearEnded !== 0 ? '-' + school.yearEnded : '' }}</h3>
            </div>
            <h4 class="details">{{ school.school }} | {{ school.city }}{{ school.state !== '' ? ', ' + school.state :
                    '' }}
            </h4>
            <h5 class="details">{{ school.coursework }}</h5>
        </div>
    </section>
    <section class="foot">
        <h3 class="contact"><a href="">PDF</a></h3>
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
    margin: 3% 5%;
}

.part {
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
}

h3 {
    font-size: calc(2.1vw + 5px);
    color: #fff;
    margin-left: 2%;
}

h3.contact {
    text-align: center;
    margin: 0 5%;
}

h3.content,
h3.info {
    margin: 0;
}

h3.info {
    font-family: "Bebas Neue", sans-serif;
    text-align: right;
}

h3>span {
    color: #fff;
}

h4 {
    margin-left: 2%;
    font-size: calc(1.2vw + 10px);
}

h4>span {
    color: var(--light-grey-color);
    font-size: calc(1.2vw + 10px);
}

h5 {
    color: #fff;
    font-size: calc(1.2vw + 7px);
}

.bullet {
    margin-left: 4%;
    display: grid;
    grid-template-columns: 2% auto;
    margin-bottom: 1vh;
}

.details {
    margin-left: 4%;
}

.projects .contact {
    text-align: center;
    margin-top: 1vh;
    color: #fff;
}

.experience .part {
    margin-bottom: 3vh;
}

.content-info-container {
    display: flex;
    justify-content: space-between;
    margin-left: 2%;
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