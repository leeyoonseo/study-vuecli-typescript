import { defineStore } from "pinia";

export const storeCounter = defineStore("counter", {
  state: () => ({
    counter: 0,
  }),
  getters: {},
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
  debounce: {},
});
