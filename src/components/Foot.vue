<script setup>
import { inject } from 'vue';
const orientation = inject('orientation', { orientation: 'landscape' })
</script>

<!--
SCRIPT SETUP LAYOUT:
  FOOTER REFS & VARS:
    INJECT: orientation - DEFINE WINDOW ORIENTATION (FLEX-COLUMN / FLEX)
-->

<!-- ADD LINKS FOR GITHUB, EMAIL, LINKEDIN -->
<!-- CHANGE h2 TO a -->

<template>
    <div :class="{ portrait: orientation === 'portrait', container: true }">
        <div>
            <h1>Need help making your project ideas &#10; come to life?</h1>
            <h2>Send me an email or find me on GitHub and LinkedIn</h2>
        </div>
        <div>
            <div class="contact">
                <img src="../assets/icons/github.svg" alt="GitHub Icon">
                <a href="https://github.com/AlexisDeCoy">@alexisdecoy</a>
                <a class="img-link" href="https://github.com/AlexisDeCoy"><img src="../assets/icons/link-arrow.svg" alt="Link Arrow"></a>
            </div>
            <div class="contact">
                <div class="logo"></div>
                <a href="www.linkedin.com/in/alexis-decicco">Alexis DeCicco</a>
                <a class="img-link" href="www.linkedin.com/in/alexis-decicco"><img src="../assets/icons/link-arrow.svg" alt="Link Arrow"></a>
            </div>
            <div class="contact">
                <img src="../assets/icons/email.svg" alt="Email Icon">
                <a href="mailto:alexiscdecicco@gmail.com">alexiscdecicco@gmail.com</a>
                <a class="img-link" href="mailto:alexiscdecicco@gmail.com"><img src="../assets/icons/link-arrow.svg" alt="Link Arrow"></a>
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
                h2 - @ / ADDRESS
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
    color: #569cd6;
    text-decoration: none;
}

.img-link {
    height: 60%;
    margin: 0;
    padding: 0;
    width: fit-content;
}

img {
    height: 60%;
}

.logo {
    width: 30px;
    height: 30px;
    background: #fff;
    mask-image: url('../assets/icons/linkedin.png');
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
        h2 - MARGIN-T-R/L
    img - HEIGHT-60
    .logo - MASK: linkedin.png, MASK-SIZE-CONTAIN, MASK-REPEAT-NONE, MASK-POSITION-CENTER, WHITE
-->