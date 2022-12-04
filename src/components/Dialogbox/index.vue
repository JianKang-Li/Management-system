<template>
  <div class="content" :style="{ '--color': Bcolor }">
    <slot name="content"> 内容 </slot>
  </div>
  <div class="foot">
    <slot name="foot"> foot </slot>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  props: ["color"],
  setup(props) {
    const Bcolor = ref(props.color);
    return {
      Bcolor,
    };
  },
};
</script>
<style scoped>
.content {
  padding: 0.5rem 0.8rem;
  background-color: var(--color);
  border-radius: 0.3rem;
  position: relative;
  color: #fff;
}

.foot {
  color: #91aec4;
  font-size: smaller;
}

.content::before {
  content: "";
  width: 0px;
  height: 0px;
  border: 0.5rem solid transparent;
  position: absolute;
  left: -1rem;
  top: 0.5rem;
  border-top: 0.5rem solid var(--color);
  border-right: 0.5rem solid var(--color);
}
</style>
