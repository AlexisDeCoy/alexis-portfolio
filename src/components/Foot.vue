<script setup>
import { inject } from 'vue';
const orientation = inject('orientation', { orientation: 'landscape' })
</script>

<!--
SCRIPT SETUP LAYOUT:
  FOOTER REFS & VARS:
    INJECT: orientation - DEFINE WINDOW ORIENTATION (FLEX-COLUMN / FLEX)
-->

<template>
    <div :class="{ portrait: orientation === 'portrait', container: true }">
        <div>
            <h1>Have a cool project idea?</h1>
            <h2>Contact me and let's make it a reality together!</h2>
        </div>
        <div>
            <div class="contact">
                <img src="/icons/github.svg" alt="GitHub Icon">
                <a href="https://github.com/AlexisDeCoy" target='_blank' rel='noopener noreferrer'>@alexisdecoy</a>
            </div>
            <div class="contact">
                <div class="logo"></div>
                <a href="https://linkedin.com/in/alexis-decicco" target='_blank' rel='noopener noreferrer'>Alexis DeCicco</a>
            </div>
            <div class="contact">
                <img src="/icons/email.svg" alt="Email Icon">
                <a href="mailto:alexiscdecicco@gmail.com">alexiscdecicco@gmail.com</a>
            </div>
        </div>

    </div>
</template>

<!--
TEMPLATE LAYOUT:
    div - container
        div - LEFT SECTION
            h1
            h2
        div
            div - contact, FOR GitHub THRU email
                img - LOGO (PNG FOR LinkedIn)
                a - LINK
                    h2 - @ / ADDRESS
                a - LINK
                    img - LINK ARROW
END TEMPLATE
-->

<style scoped>
.container {
    display: flex;
    margin-bottom: 50px;
}

.container.portrait {
    margin: 0;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.container>div {
    flex: 1;
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.container.portrait>div {
    padding-bottom: 0;
}

h1 {
    font-family: "Bebas Neue", sans-serif;
    color: #fff;
    font-size: calc(2vw + 10px);
}

h2 {
    font-size: calc(2vw + 5px);
    color: #fff;
    line-height: 1.2;
}

.contact {
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: start;
}

.portrait .contact {
    justify-content: center;
}

a {
    font-size: calc(2vw + 5px);
    color: #fff;
    margin: 3px 10px 0 10px;
    color: var(--tag-declare-color);
    text-decoration: none;
}

.img-link {
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
}

img {
    height: 60%;
}

.logo {
    width: 30px;
    height: 30px;
    background: #fff;
    mask-image: url('/icons/linkedin.png');
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
}
</style>

<!--
STYLE LAYOUT:
    .container - D-FLEX, MARGIN-B
        .portrait - FLEX-COLUMN, ALIGN-CENTER, TEXT-ALIGN-CENTER
        >div - PADDING, D-FLEX-COLUMN, JUSTIFY-BETWEEN
        .portrait>div - PADDING-BOTTOM-0
    h1 - BEBAS, FONT-SIZE, WHITE
    h2 - FONT-SIZE, WHITE
    .contact - D-FLEX, ALIGN-CENTER, JUSTIFY-START
        .portrait -> - JUSTIFY-CENTER
    a - MARGIN-T-R/L, FONT SIZE, tag-declare-color, DECORATION-NONE
    img - HEIGHT-60
    .logo - MASK: linkedin.png, MASK-SIZE-CONTAIN, MASK-REPEAT-NONE, MASK-POSITION-CENTER, WHITE
-->