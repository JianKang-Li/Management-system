<template>
  <div class="item" @mouseenter="enter" @mouseleave="leave">
    <a-tooltip placement="topLeft" :title="content.toString()">
      <a-checkbox v-model:checked="done" class="text">
        <span>
          {{
            content.length > 20 ? content.slice(0, 20) + "..." : content
          }}</span
        ></a-checkbox
      >
    </a-tooltip>
    <a-button
      type="primary"
      danger
      :style="{ display: mouse ? 'block' : 'none' }"
      @click="deleteItem"
      >删除</a-button
    >
  </div>
</template>
<script>
import { ref } from "vue";
import { useTodoStore } from "@/stores/lists";
import { message } from "ant-design-vue";
export default {
  props: ["data"],
  setup(props) {
    const todoStore = useTodoStore();
    let mouse = ref(false);
    const enter = () => {
      mouse.value = true;
    };
    const leave = () => {
      mouse.value = false;
    };

    const content = ref(props.data.content);
    const done = ref(props.data.done);

    const deleteItem = () => {
      todoStore.$patch((state) => {
        state.lists = state.lists.filter((ele) => {
          return ele.id != props.data.id;
        });
      });
      message.success("删除成功!");
    };
    return {
      content,
      done,
      mouse,
      enter,
      leave,
      deleteItem,
    };
  },
};
</script>
<style scoped>
.item {
  width: 100%;
  max-width: 100%;
  height: 3rem;
  padding: 0.1rem 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  background-color: white;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
