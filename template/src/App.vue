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
