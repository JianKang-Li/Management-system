// todo列表
import { defineStore } from "pinia";

export const useTodoStore = defineStore("lists", {
  state: () => {
    return {
      lists: [{ id: "1", content: "添加图表", done: false }, { id: '2', content: "新组件", done: false }, { id: '4', content: "图片放大镜", done: false }, { id: '6', content: "视频播放器", done: false }]
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
