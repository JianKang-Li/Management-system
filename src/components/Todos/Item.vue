<template>
  <div class="item" @mouseenter="enter" @mouseleave="leave">
    <a-tooltip placement="topLeft" :title="content.toString()">
      <a-checkbox v-model:checked="done" class="text">
        <span :class="done ? 'done' : ''">
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
import { ref, watch } from "vue";
import { useTodoStore } from "@/stores/lists";
import { message } from "ant-design-vue";
export default {
  name: "Item",
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
      todoStore.deleteItem(props.data.id);
      message.success("删除成功!");
    };

    watch(done, (newValue) => {
      todoStore.updateItem(props.data.id, newValue);
    });
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
  height: 3rem;
  padding: 0.1rem 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  background-color: white;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.done {
  text-decoration-line: line-through;
  font-style: italic;
}
</style>
