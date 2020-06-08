<template>
  <tr>
    <td>{{ item.name }}</td>
    <td class="basket-item">
      <input @change="onChange" type="number" :value="quantity" min="1" />
    </td>
    <td class="price">{{ totalCost }}</td>
    <td>
      <button class="delete" @click="onDelete">Удалить</button>
    </td>
  </tr>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BasketItem",
  props: {
    item: { type: Object },
    quantity: { type: Number, default: () => 1 },
  },
  computed: {
    totalCost() {
      return (this.item.price * this.quantity * this.rate).toFixed(2);
    },
    ...mapGetters(["rate"]),
  },
  methods: {
    onDelete() {
      this.$store.commit("deleteBasketItem", this.item.id);
    },
    onChange(event) {
      const value = parseInt(event.target.value);
      this.$store.commit("updateQuantity", {
        quantity: value,
        id: this.item.id,
      });
    },
  },
};
</script>

<style scoped>
button.delete {
  color: #a21f02;
  font-weight: bold;
  text-shadow: rgba(255, 255, 255, 0.5) 1px 1px,
    rgba(100, 100, 100, 0.3) 3px 7px 3px;
  padding: 0.5em 1em;
  outline: none;
  border-radius: 3px / 100%;
  background-image: linear-gradient(
      45deg,
      rgba(84, 5, 5, 0) 30%,
      rgba(76, 55, 55, 0.8),
      rgba(119, 67, 67, 0) 70%
    ),
    linear-gradient(
      to right,
      rgb(195, 93, 93),
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0) 90%,
      rgba(255, 255, 255, 0.3)
    ),
    linear-gradient(
      to right,
      rgba(125, 125, 125, 1),
      rgba(255, 255, 255, 0.9) 45%,
      rgba(125, 125, 125, 0.5)
    ),
    linear-gradient(
      to right,
      rgb(226, 16, 16),
      rgba(255, 255, 255, 0.9) 45%,
      rgba(228, 19, 19, 0.5)
    ),
    linear-gradient(
      to right,
      rgba(223, 190, 170, 1),
      rgba(255, 255, 255, 0.9) 45%,
      rgba(223, 190, 170, 0.5)
    ),
    linear-gradient(
      to right,
      rgba(223, 190, 170, 1),
      rgba(255, 255, 255, 0.9) 45%,
      rgba(223, 190, 170, 0.5)
    );
  background-repeat: no-repeat;
  background-size: 200% 100%, auto, 100% 2px, 100% 2px, 100% 1px, 100% 1px;
  background-position: 200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);
  box-shadow: rgba(150, 17, 17, 0.5) 3px 10px 10px -10px;
}
button.delete:hover {
  transition: 0.5s linear;
  background-position: -200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);
}
button.delete:active {
  top: 1px;
}
.basket-item input {
  width: 50%;
}
.price {
  width: 50%;
}
</style>
