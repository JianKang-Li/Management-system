<template>
  <div class="table">
    <a-card :bordered="false" class="OpBar">
      <a-tooltip placement="right">
        <template #title v-if="!hasValue">选择数据以导出为xlsx表格</template>
        <a-button type="primary" @click="exporeFile" :disabled="!hasValue"
          >导出Excel</a-button
        >
      </a-tooltip>
    </a-card>

    <a-table
      :dataSource="dataSource"
      :columns="columns"
      bordered
      :row-selection="rowSelection"
      :loading="isLoading"
      :scroll="{ y: 550 }"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'updatedAt'">
          <span>
            {{ record.updatedAt.slice(0, 10) }}
          </span>
        </template>
        <template v-if="column.key === 'progress'">
          <span>
            {{ record.progress + "%" }}
          </span>
        </template>
        <template v-if="column.key === 'status'">
          <Tag :status="record.status" />
        </template>
        <template v-if="column.key === 'options'">
          <span
            ><a-button type="primary" @click="showModal(record)"
              >更多</a-button
            ></span
          >
        </template>
      </template>
    </a-table>
    <a-modal v-model:visible="visible" title="详细信息" width="70%">
      <a-descriptions bordered :title="CurrentData.name" size="small">
        <a-descriptions-item label="头像"
          ><a-avatar :size="50" :src="CurrentData.avatar"></a-avatar
        ></a-descriptions-item>
        <a-descriptions-item label="编号">{{
          CurrentData.callNo
        }}</a-descriptions-item>
        <a-descriptions-item label="会员号">{{
          CurrentData.key
        }}</a-descriptions-item>
        <a-descriptions-item label="描述">{{
          CurrentData.desc
        }}</a-descriptions-item>
        <a-descriptions-item label="状态">
          <Tag :status="CurrentData.status" />
        </a-descriptions-item>
        <a-descriptions-item label="升级进度">
          <a-progress
            type="circle"
            :percent="CurrentData.progress"
            :width="45"
          />
        </a-descriptions-item>
        <a-descriptions-item label="会员创建日期">{{
          CurrentData.createdAt.slice(0, 10)
        }}</a-descriptions-item>
        <a-descriptions-item label="更新日期">{{
          CurrentData.updatedAt.slice(0, 10)
        }}</a-descriptions-item>
      </a-descriptions>

      <template #footer>
        <a-button type="primary" @click="visible = false">确定</a-button>
      </template>
    </a-modal>
  </div>
</template>
<script>
import { ref, onMounted, reactive } from "vue";
import { getTableData } from "@/apis/index.js";
import Tag from "@/components/Table/Tag.vue";
import { utils, writeFile } from "xlsx";
export default {
  name: "NormalTable",
  components: { Tag },
  setup() {
    let dataSource = ref(null);
    let isLoading = ref(true);
    const state = reactive({
      selectedRows: [],
    });
    const hasValue = ref(false);

    onMounted(() => {
      getTableData(1, 20).then(
        (res) => {
          dataSource.value = res.data;
          return res.data;
        },
        (err) => {
          console.log(err);
        }
      );
      isLoading.value = false;
    });

    const columns = [
      {
        title: "编号",
        dataIndex: "callNo",
        key: "callNo",
      },
      {
        title: "姓名",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "状态",
        dataIndex: "status",
        key: "status",
      },
      {
        title: "进度",
        dataIndex: "progress",
        key: "progress",
      },
      {
        title: "更新时间",
        dataIndex: "updatedAt",
        key: "updatedAt",
      },
      {
        title: "操作",
        key: "options",
      },
    ];

    const rowSelection = ref({
      onChange: (_, selectedRows) => {
        state.selectedRows = selectedRows;
        state.selectedRows.length === 0
          ? (hasValue.value = false)
          : (hasValue.value = true);
      },
    });

    const CurrentData = ref(null);
    const setData = (data) => {
      CurrentData.value = data;
    };

    const visible = ref(false);

    const showModal = (data) => {
      visible.value = true;
      setData(data);
    };

    const exporeFile = () => {
      let json = [];
      state.selectedRows.forEach((item) => {
        let person = {
          会员号: item.key,
          姓名: item.name,
          自我描述: item.desc,
          编号: item.callNo,
          升级进度: item.progress,
          账号更新日期: item.updatedAt,
          会员创建日期: item.createdAt,
        };
        json.push(person);
      });
      let ws = utils.json_to_sheet(json);
      let wb = utils.book_new();
      utils.book_append_sheet(wb, ws, "会员信息");
      writeFile(wb, "会员信息表.xlsx");
    };

    return {
      columns,
      dataSource,
      rowSelection,
      showModal,
      visible,
      CurrentData,
      isLoading,
      exporeFile,
      state,
      hasValue,
    };
  },
};
</script>
<style scoped>
.table {
  width: 100%;
  position: relative;
}

.OpBar {
  margin-bottom: 1rem;
}
</style>
