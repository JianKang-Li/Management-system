<template>
  <a-table :dataSource="dataSource" :columns="columns" class="table" />
</template>
<script>
import { ref } from "vue";
import { getTableData } from "@/apis/index.js";
export default {
  setup() {
    let dataSource = ref(null);

    getTableData(1, 20).then(
      (res) => {
        console.log(res.data);
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
        sorter: true,
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
    ];

    return {
      columns,
      dataSource,
    };
  },
};
</script>
<style scoped></style>
