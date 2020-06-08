<template>
  <tbody v-if="products.length">
    <tr>
      <th colspan="2">{{ groupName }}</th>
    </tr>
    <product v-for="product in products" :key="product.id" :product="product" />
  </tbody>
</template>

<script>
import { mapGetters } from "vuex";
import Product from "./Product";

export default {
  name: "Products",
  components: { Product },
  props: {
    group: {
      type: [],
    },
  },
  computed: {
    groupName() {
      return this.items.G;
    },
    items() {
      return this.group[1];
    },
    products() {
      return this.createProduct(this.goods, this.groupItems);
    },
    id() {
      return parseInt(this.group[0], 10);
    },
    groupItems() {
      return this.items.B;
    },
    goods() {
      return this.getGoods.filter((item) => item.G === this.id);
    },
    ...mapGetters(["getGoods"]),
  },
  methods: {
    createProduct(goods, items) {
      return goods.map((item) => {
        const matchedProduct = items[item.T];
        const product = {
          id: null,
          name: "",
          price: null,
          quantity: null,
        };
        if (matchedProduct) {
          product.name = matchedProduct.N;
        }
        product.quantity = item.P;
        product.id = item.T;
        product.price = item.C;
        return product;
      });
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
