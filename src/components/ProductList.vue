<template>
  <table class="table_dark">
    <products v-for="group in groups" :key="group[0]" :group="group" />
  </table>
</template>

<script>
import Products from "./Products";
import names from "../../public/names.json";

export default {
  name: "ProductList",
  components: { Products },
  data() {
    return {
      timeСounter: {},
      names: names,
    };
  },
  created() {
    this.getData();
    this.updateDollarRate(72);
  },
  mounted() {
    this.timeСounter = setInterval(() => {
      const rate = Math.random() * 50 + 20;
      this.updateDollarRate(rate);
      this.getData();
    }, 15000);
  },
  methods: {
    getData() {
      this.$store.dispatch("getData");
    },
    updateDollarRate(rate) {
      this.$store.commit("updateDollarRate", rate);
    },
  },
  computed: {
    groups() {
      return Object.entries(this.names);
    },
  },
  beforeDestroy() {
    clearInterval(this.timeСounter);
  },
};
</script>

<style scoped>
.table_dark {
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  font-size: 10px;
  width: 65%;
  text-align: left;
  border-collapse: collapse;
  background: #162958;
  margin: 5px auto;
}
</style>
