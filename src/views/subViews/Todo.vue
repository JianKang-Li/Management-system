<template>
  <div class="todo">
    <h2>待办事项</h2>
    <a-input
      class="input"
      v-model:value="thing"
      placeholder="输入结束后按下Enter添加事项"
      @keyup="handleKeyUp"
    />
    <div class="lists">
      <Item v-for="item in lists" :key="item.id" :data="item" />
    </div>
    <div class="footer">
      <span
        >剩余{{
          lists.filter((item) => item.done === false).length
        }}件待办事项</span
      >
    </div>
  </div>
</template>
<script>
import { storeToRefs } from "pinia";
import { nanoid } from "nanoid";
import { useTodoStore } from "@/stores/lists";
import { ref } from "vue";
import { message } from "ant-design-vue";
import Item from "@/components/Todos/Item.vue";
export default {
  components: { Item },
  setup() {
    const TodoStore = useTodoStore();
    const { lists } = storeToRefs(TodoStore);
    let thing = ref("");
    const handleKeyUp = (e) => {
      if (e.keyCode === 13) {
        const content = thing.value.trim();
        if (content === "") {
          message.error("输入内容为空!");
        } else {
          let item = {
            content,
            done: false,
            id: nanoid(),
          };
          TodoStore.addItem(item);
          message.success("添加成功!");
        }
      }
    };
    return {
      lists,
      thing,
      handleKeyUp,
    };
  },
};
</script>
<style scoped>
.todo {
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: fit-content;
}

.input {
  width: 60%;
  height: 2.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  background-color: white;
}

.lists {
  width: 60%;
}
</style>
