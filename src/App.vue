<template>
  <div id="app">
    <TestContacts />
    <TestMap />
    <TestForm />
  </div>
</template>




<script>
import TestContacts from './components/TestContacts.vue';
import TestMap from './components/TestMap.vue';
import TestForm from './components/TestForm.vue';

export default {
  name: 'app',
  components: {
    TestContacts,
    TestMap,
    TestForm
  }
}
</script>




<style lang="scss">

// include fonts
@font-face {
    font-family: 'Suisse-light';
    src: url('./assets/fonts/SuisseIntlLight.eot');
    src: url('./assets/fonts/SuisseIntlLight.eot') format('embedded-opentype'),
         url('./assets/fonts/SuisseIntlLight.woff2') format('woff2'),
         url('./assets/fonts/SuisseIntlLight.woff') format('woff'),
         url('./assets/fonts/SuisseIntlLight.ttf') format('truetype');
}

@font-face {
    font-family: 'Suisse-Bold';
    src: url('./assets/fonts/SuisseIntlSemiBold.eot');
    src: url('./assets/fonts/SuisseIntlSemiBold.eot') format('embedded-opentype'),
         url('./assets/fonts/SuisseIntlSemiBold.woff2') format('woff2'),
         url('./assets/fonts/SuisseIntlSemiBold.woff') format('woff'),
         url('./assets/fonts/SuisseIntlSemiBold.ttf') format('truetype');
}


// Basic settings
* {
  box-sizing: border-box;
}
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  font-size: 10px;
}

body {
  font-family: "Suisse-Reg", Arial, sans-serif;
}

html, body, div, span,
h1, h2, h3, h4, h5, h6, p,
a, abbr, acronym, address, big, cite,
em, i, img, q,
strong, b,
ul, li,
form, label,
article, aside,
footer, header, 
menu, nav, section, summary,
audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

article, aside,
footer, header, menu, nav, section {
  display: block;
}

body {
  line-height: 1.5;
}

ol, ul {
  list-style: none;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
  outline: 0;
}

button,
input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}

a {
  text-decoration: none;
  cursor: pointer;
}

a:active,
a:hover,
a:focus {
  outline: 0;
  text-decoration: none;
}

img {
  border: 0;
}

b,
strong {
  font-weight: bold;
}

q {
  quotes: none;
}

q:before, q:after {
  content: '';
  content: none;
}

</style>
