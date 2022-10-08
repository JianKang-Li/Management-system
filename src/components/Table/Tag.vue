<template>
  <a-tag :color="color">{{ text }}</a-tag>
</template>
<script>
export default {
  props: ["status"],
  setup(props) {
    const texts = ["高级会员", "中级会员", "初级会员", "普通用户"];
    const text = texts[props.status];
    const colors = ["#c21f30", "#fcc307", "#f0d695", "blue"];
    const color = colors[props.status];
    return {
      text,
      color,
    };
  },
};
</script>
<style></style>
