<template>
  <div class="container">
    <a-upload
      :file-list="fileList"
      :before-upload="beforeUpload"
      @remove="handleRemove"
      accept=".mp4,.webm"
    >
      <a-button>
        <upload-outlined></upload-outlined>
        打开本地文件
      </a-button>
    </a-upload>
    <Player ref="video" :src="url"></Player>
  </div>
</template>
<script>
import { ref } from "vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { rendVideo } from "@/utils/file.js";
import Player from "@/components/Player/index.vue";
export default {
  components: { UploadOutlined, Player },
  setup() {
    const fileList = ref([]);
    const uploading = ref(false);
    const handleRemove = (file) => {
      const index = fileList.value.indexOf(file);
      const newFileList = fileList.value.slice();
      newFileList.splice(index, 1);
      fileList.value = newFileList;
    };

    const video = ref(null);
    let url = ref("");
    const beforeUpload = (file) => {
      message.info("解析文件中");
      rendVideo(file).then((data) => {
        url.value = data;
        // console.log(video.value);
        message.success("解析完成");
      });
    };

    return {
      url,
      video,
      fileList,
      uploading,
      handleRemove,
      beforeUpload,
    };
  },
};
</script>
<style scoped>
.container {
  margin-top: 1rem;
}

video:focus {
  outline: none auto 0px;
}
</style>
