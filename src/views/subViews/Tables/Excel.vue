<template>
  <div class="container">
    <div class="clearfix">
      <a-upload
        :file-list="fileList"
        :before-upload="beforeUpload"
        @remove="handleRemove"
        accept=".xls,.xlsx,.csv"
      >
        <a-button>
          <upload-outlined></upload-outlined>
          打开本地文件
        </a-button>
      </a-upload>
    </div>
    <div class="container">
      <a-table :columns="columns" :data-source="dataSource" bordered>
        <template #bodyCell="{ column, text, record }">
          <template v-if="column && column.dataIndex !== 'operation'">
            <div style="width: fit-content">
              <a-input
                v-if="editableData[record.key]"
                v-model:value="editableData[record.key][column.dataIndex]"
                class="edit"
              />
              <template v-else>
                {{ text }}
              </template>
            </div>
          </template>
          <template v-else-if="column.dataIndex === 'operation'">
            <div>
              <span v-if="editableData[record.key]">
                <a-space>
                  <a-button
                    @click="save(record.key)"
                    type="primary"
                    size="small"
                    >保存</a-button
                  >
                  <a-button @click="cancel(record.key)" size="small"
                    >取消
                  </a-button>
                </a-space>
              </span>
              <span v-else>
                <a @click="edit(record.key)">编辑</a>
              </span>
            </div>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script>
import { ref, reactive } from "vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { read, utils } from "xlsx";
import arr2json from "@/utils/arr2json";
import cloneDeep from "@/utils/cloneDeep";
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

    let dataSource = ref(null);
    let columns = ref(null);
    const editableData = reactive({});

    const beforeUpload = (file) => {
      message.info("解析文件中");
      fileList.value = [file];
      let reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = function (e) {
        let data = e.target.result;
        let workbook = read(data, {
          type: "array",
        });
        let first_worksheet = workbook.Sheets[workbook.SheetNames[0]]; //第一张表
        let jsonArr = utils.sheet_to_json(first_worksheet, { header: 1 }); //把工作表转化为Json
        let result = arr2json(jsonArr);
        dataSource.value = result.dataSource;
        columns.value = result.columns;
        message.success("解析完成");
      };
      return false;
    };

    const edit = (key) => {
      editableData[key] = cloneDeep(
        dataSource.value.filter((item) => key === item.key)[0]
      );
    };
    const save = (key) => {
      Object.assign(
        dataSource.value.filter((item) => key === item.key)[0],
        editableData[key]
      );
      delete editableData[key];
    };
    const cancel = (key) => {
      delete editableData[key];
    };

    return {
      fileList,
      uploading,
      handleRemove,
      beforeUpload,
      dataSource,
      columns,
      edit,
      save,
      cancel,
      editableData,
    };
  },
};
</script>
<style scoped>
.edit {
  height: 1.375rem;
}
</style>
