<template>
  <tr @click="onClick">
    <td>{{ product.name }}{{ `(${product.quantity})` }}</td>
    <td>
      {{ getСonversion }}
    </td>
  </tr>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Product",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getСonversion() {
      return (this.product.price * this.rate).toFixed(2);
    },
    ...mapGetters(["rate"]),
  },
  methods: {
    onClick() {
      this.$store.commit("addToBasket", this.product);
    },
  },
};
</script>

<style scoped>
.table_dark {
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  font-size: 9px;
  width: 50%;
  text-align: left;
  border-collapse: collapse;
  background: #252f48;
  margin: 10px;
}
.table_dark th {
  color: #e6db73;
  border-bottom: 1px solid #37b5a5;
  padding: 3px 17px;
  background-color: #57ada5;
}
.table_dark td {
  color: #cad4d6;
  border-bottom: 1px solid #37b5a5;
  border-right: 1px solid #37b5a5;
  padding: 2px 17px;
}
.table_dark td:last-child {
  border-right: none;
}
.table_dark tr:hover td {
  text-decoration: underline;
}
</style>
