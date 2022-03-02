import { defineStore } from "pinia";

interface State {
  counter: number;
}

export const storeCounter = defineStore("counter", {
  state: () =>
    ({
      counter: 0,
    } as State),
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
