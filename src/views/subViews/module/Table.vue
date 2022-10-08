<template>
  <div class="table">
    <a-table
      :dataSource="dataSource"
      :columns="columns"
      bordered
      :row-selection="rowSelection"
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
    <a-modal
      v-model:visible="visible"
      title="详细信息"
      ok-text="确认"
      cancel-text="取消"
      @ok="handleOk"
      width="70%"
    >
      <a-descriptions bordered :title="CurrentData.name" size="small">
        <a-descriptions-item label="头像"
          ><a-avatar :size="50" :src="CurrentData.avatar"></a-avatar
        ></a-descriptions-item>
        <a-descriptions-item label="编号">{{
          CurrentData.callNo
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
import { ref } from "vue";
import { getTableData } from "@/apis/index.js";
import Tag from "@/components/Table/Tag.vue";
export default {
  components: { Tag },
  setup() {
    let dataSource = ref(null);

    getTableData(1, 20).then(
      (res) => {
        // console.log(res.data);
        dataSource.value = res.data;
      },
      (err) => {
        console.log(err);
      }
    );

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
      checkStrictly: false,
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          "selectedRows: ",
          selectedRows
        );
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
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

    return {
      columns,
      dataSource,
      rowSelection,
      showModal,
      visible,
      CurrentData,
    };
  },
};
</script>
<style scoped>
.table {
  width: 100%;
}
</style>
