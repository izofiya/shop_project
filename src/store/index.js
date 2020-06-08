import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = () =>
  new Vuex.Store({
    state: {
      rate: 5,
      data: [],
      basket: [],
    },
    getters: {
      basket: (state) => {
        return state.basket;
      },
      totalCost: (state) => {
        return state.basket.reduce((acc, { quantity, product }) => {
          return acc + quantity * product.price * state.rate;
        }, 0);
      },
      rate: (state) => {
        return state.rate;
      },
      getGoods: (state) => {
        if (state.data.Value) {
          return [...state.data.Value.Goods];
        }
        return [];
      },
    },
    mutations: {
      updateDollarRate(state, payload) {
        state.rate = payload;
      },
      updateData(state, payload) {
        state.data = payload;
      },
      deleteBasketItem(state, payload) {
        const index = state.basket.findIndex(
          ({ product }) => product.id === payload
        );
        state.basket.splice(index, 1);
      },
      updateQuantity(state, { quantity, id }) {
        const basketItem = state.basket.find(
          ({ product }) => product.id === id
        );
        basketItem.quantity = quantity;
      },
      addToBasket(state, payload) {
        const basketItem = state.basket.find(
          ({ product }) => product.id === payload.id
        );
        if (basketItem) {
          basketItem.quantity++;
        } else {
          state.basket.push({
            quantity: 1,
            product: payload,
          });
        }
      },
    },
    actions: {
      getData({ commit }) {
        axios.get("data.json").then((res) => {
          commit("updateData", res.data);
        });
      },
    },
  });
