<template>
  <div class="container">
    <div class="clearfix">
      <a-upload
        :file-list="fileList"
        :before-upload="beforeUpload"
        @remove="handleRemove"
        :maxCount="1"
        accept=".xls,.xlsx"
      >
        <a-button>
          <upload-outlined></upload-outlined>
          Select File
        </a-button>
      </a-upload>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { read, utils } from "xlsx";
export default {
  components: { UploadOutlined },
  setup() {
    const fileList = ref([]);
    const uploading = ref(false);
    const handleRemove = (file) => {
      const index = fileList.value.indexOf(file);
      const newFileList = fileList.value.slice();
      newFileList.splice(index, 1);
      fileList.value = newFileList;
    };
    const beforeUpload = (file) => {
      fileList.value = [...fileList.value, file];
      let reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = function (e) {
        let data = e.target.result;
        let workbook = read(data, {
          type: "array",
        });
        let first_worksheet = workbook.Sheets[workbook.SheetNames[0]]; //第一张表
        let jsonArr = utils.sheet_to_json(first_worksheet, { header: 1 }); //把工作表转化为Json
        console.log(jsonArr);
      };
      return false;
    };

    return {
      fileList,
      uploading,
      handleRemove,
      beforeUpload,
    };
  },
};
</script>
<style scoped></style>
