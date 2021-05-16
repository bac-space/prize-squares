<template>
  <div class="container">
    <the-header></the-header>
    <play-field></play-field>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import PlayField from "./components/layout/PlayField.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    PlayField,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@400;700&display=swap");

* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

:root {
  --main-text-color: #e8e8e8;
  --main-text-color-alt: #000000;
  --bkg-light-color: #6a3941;
  --bkg-dark-color: #3e282a;
  --btn-light-color: #db7032;
  --btn-dark-color: #a85729;
  --prizepanel-bkg-color: #d8ae61;
  --piece-bkg-color: #ffdb99;
  --piece-bkg-active-color: #b3b67c;
  --piece-bkg-passed-color: #aaaaaa;
  --header-text-color: #fff099;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--main-text-color);
  background-image: linear-gradient(
    to right bottom,
    var(--bkg-light-color),
    var(--bkg-dark-color)
  );
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
