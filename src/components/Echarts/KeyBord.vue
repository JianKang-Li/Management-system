<template>
  <div class="keybord">
    <h3 class="title">{{ title }}</h3>
    <div class="hr"></div>
    <slot name="content">
      <span class="data">{{ data && unit ? format(data) + unit : "" }}</span>
    </slot>
  </div>
</template>
<script>
import { toRefs } from "vue";
export default {
  name: "KeyBord",
  props: ["title", "data", "unit"],
  setup(props) {
    const format = (data) => {
      return data?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    };
    return {
      ...toRefs(props),
      format,
    };
  },
};
</script>
<style scoped>
.keybord {
  margin-top: 1rem;
  min-width: 20rem;
  height: fit-content;
  padding: 1rem 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  font-size: large;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.5s ease;
}
.keybord .title {
  font-size: 1.3rem;
  color: rgba(120, 120, 120, 0.8);
}

.keybord:hover {
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
}
</style>
