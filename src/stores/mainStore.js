import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    count: 0,
    userName: "",
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    setUserName(name) {
      this.userName = name;
    },
  },
});
