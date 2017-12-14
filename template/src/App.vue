<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{#router}}
    <router-view></router-view>
    {{else}}
    <component></component>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import Component from './components/Component'

{{/unless}}
export default {
  name: 'app'{{#router}}{{else}},
  components: {
    Component
  }{{/router}}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary:  #ffcc00;
$primary-invert: findColorInvert($primary);
$info: #014266;
$info-invert: findColorInvert($info);
$success: #3f653a;
$success-invert: findColorInvert($success);
$danger: #641717;
$danger-invert: findColorInvert($danger);
$warning: #cd5113;
$warning-invert: findColorInvert($warning);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
