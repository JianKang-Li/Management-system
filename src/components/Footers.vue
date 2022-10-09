<template>
  <a-layout-footer
    :style="{
      'text-align': 'center',
      'background-color': bgcolor,
      color: focolor,
    }"
    class="footer"
  >
    <span>极简后台 ©2022 Created by ljk</span>
  </a-layout-footer>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Footers",
  props: ["bcolor", "fcolor"],
  setup(props) {
    const bgcolor = ref(props.bcolor);
    const focolor = ref(props.fcolor);
    return {
      bgcolor,
      focolor,
    };
  },
};
</script>
<style scoped>
.footer {
  margin-bottom: 0;
  text-align: center;
}
</style>
