<template>
  <div class="keybord">
    <slot>
      <h3 class="title">{{ props.title }}</h3>
      <div class="hr"></div>
      <span class="data">{{ format(props.data) + props.unit }}</span>
    </slot>
  </div>
</template>
<script>
export default {
  name: "KeyBord",
  props: ["title", "data", "unit"],
  setup(props) {
    const format = (data) => {
      return data.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    };
    return {
      props,
      format,
    };
  },
};
</script>
<style scoped>
.keybord {
  width: 15rem;
  height: fit-content;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
}
.keybord .title {
  font-size: 1.3rem;
  color: rgba(120, 120, 120, 0.8);
}

.hr {
  width: 90%;
  height: 0.1rem;
  background-color: #eee;
}
</style>
