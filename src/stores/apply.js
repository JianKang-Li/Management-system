import { defineStore } from 'pinia';
export const userApplyStore = defineStore('apply', {
  state: () => {
    return {
      apply: {
        name: "",
        phone: "",
        introduction: ""
      }
    };
  },
  actions: {},
});