// 登录状态
import { defineStore } from "pinia";

export const userStateStore = defineStore("state", {
  state: () => {
    return {
      isLogin: false,
      username: "",
      auth: "1"
    }
  },
  actions: {
    clear() {
      this.isLogin = false;
      this.username = ''
    },
  },
  persist: {
    //这里存储默认使用的是session
    enabled: true,
    strategies: [
      {
        //key的名称
        key: 'userState',
        //更改默认存储，我更改为localStorage
        storage: localStorage,
        // 可以选择哪些进入local存储，这样就不用全部都进去存储了
        // 默认是全部进去存储
        paths: ['username', 'isLogin']
      }
    ]
  }
});
