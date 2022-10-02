// todo列表
import { defineStore } from "pinia";

export const useTodoStore = defineStore("lists", {
  state: () => {
    return {
      lists: [{ id: "1", content: "axios通信", done: false }, { id: "2", content: '增加表单', done: false }, { id: "3", content: '增加表格', done: false }]
    }
  },
  actions: {
    addItem(item) {
      this.lists.push(item)
    },
    deleteItem(id) {
      this.lists = this.lists.filter((ele) => {
        return ele.id !== id;
      });
    },
    updateItem(id, status) {
      this.lists.forEach((ele) => {
        if (ele.id === id) {
          ele.done = status
        }
      })
    }
  },
  persist: {
    //这里存储默认使用的是session
    enabled: true,
    strategies: [
      {
        //key的名称
        key: 'todoStore',
        //更改默认存储，我更改为localStorage
        storage: localStorage,
        // 可以选择哪些进入local存储，这样就不用全部都进去存储了
        // 默认是全部进去存储
        paths: ['lists']
      }
    ]
  }
});
