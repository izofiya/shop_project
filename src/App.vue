<template>
  <div id="app">
    <page-header />
  </div>
</template>

<script>
import PageHeader from "./components/Header";

export default {
  name: "App",
  components: {
    PageHeader,
  },
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  background-image: linear-gradient( to right, rgb(240, 214, 245), rgba(22, 121, 150, 0.5) );
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: left;
  color: #2c3e50;
}
</style>
