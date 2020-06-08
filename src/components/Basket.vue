<template>
  <div v-if="basket.length">
    <div class="items">
      <table>
        <thead>
          <tr>
            <th>Наименование товара и описание</th>
            <th>Цена</th>
            <th>Количество</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <basket-item
            :key="product.id"
            v-for="{ product, quantity } in basket"
            :item="product"
            :quantity="quantity"
          />
        </tbody>
      </table>
    </div>
    <div class="total">Общая стоимость: {{ totalCost.toFixed(2) }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BasketItem from "./BasketItem";

export default {
  name: "Basket",
  components: { BasketItem },
  computed: {
    ...mapGetters(["basket", "totalCost"]),
  },
};
</script>

<style scoped>
th {
  padding: 0 10px;
}
.total {
  margin: 20px auto;
  color: #1b0640;
  font-size: large;
}
.items {
  font-size: small;
}
table {
  background-color: #0df7a7;
  margin: auto;
  padding: 10px;
  width: 80%;
}
</style>
