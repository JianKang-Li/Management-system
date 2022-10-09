<template>
  <div class="markdown">
    <v-md-editor
      v-model="text"
      id="editer"
      left-toolbar="undo redo clear |h bold italic strikethrough quote |ul ol table hr|link image code |customToolbar1"
      :toolbar="toolbar"
      height="100%"
    ></v-md-editor>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Log",
  setup() {
    let text = ref("");
    const toolbar = {
      customToolbar1: {
        title: "上传",
        icon: "v-md-icon-save",
        action(editor) {
          console.log("此处为日志上传逻辑", editor.text);
        },
      },
    };
    return {
      text,
      toolbar,
    };
  },
};
</script>
<style scoped>
.markdown {
  width: 100%;
  height: 100%;
}
</style>
