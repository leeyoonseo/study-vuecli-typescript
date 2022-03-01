import { defineStore } from "pinia";

export const storeAuth = defineStore("counter", {
  state: () => {
    return {
      counter: 0,
    };
  },
  getters: {
    getDouble: (state) => state.counter * 2,
  },
  actions: {
    counterFunc() {
      console.log("counterFunc");
    },
  },
  debounce: {
    counterFunc: 300,
  },
});
