import { defineStore } from "pinia";

export const storeAuth = defineStore("auth", {
  state: () => {
    return {
      name: "John Doe",
      email: "fake@email.com",
      username: "jd123",
    };
  },
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

// export const useLoggedInUserStore = defineStore({
//   // id is required so that Pinia can connect the store to the devtools
//   id: 'loggedInUser',
//   state: () =>({}),
//   getters: {},
//   actions:{}
// })
