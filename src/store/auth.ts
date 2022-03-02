import { defineStore } from "pinia";

export const storeAuth = defineStore("auth", {
  state: () => ({
    name: "John Doe",
    email: "fake@email.com",
    username: "jd123",
  }),
  getters: {
    getName: (state) => state.name,
  },
  actions: {
    handleClick() {
      console.log("click!!");
    },
    handleClick2() {
      console.log("nameFunc2");
    },
  },
  debounce: {
    handleClick: 300,
    handleClick2: 300,
  },
});
