<template>
  <div id="app">
    <page-header />
    <dollar-rate :rate="rate" />
    <product-list />
    <basket />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PageHeader from "./components/Header";
import Basket from "./components/Basket";
import ProductList from "./components/ProductList";
import DollarRate from "./components/DollarRate";

export default {
  name: "App",
  components: {
    PageHeader,
    Basket,
    ProductList,
    DollarRate,
  },
  computed: {
    ...mapGetters(["rate"]),
  },
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  background-color: #f5ea89;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  color: #054688;
}
</style>
