<template>
  <div class="margin_top">
    <h2>基本事件轴</h2>
    <div class="hr"></div>
    <a-timeline>
      <a-timeline-item
        v-for="timeline in timelines"
        :key="timeline.id"
        :color="timeline.color ? timeline.color : 'green'"
      >
        {{ timeline.title }}
      </a-timeline-item>
    </a-timeline>

    <h2>封装事件轴</h2>
    <div class="hr"></div>
    <TimeLine :timeline="timelines"></TimeLine>
  </div>
</template>
<script>
import { ref } from "vue";
import TimeLine from "@/components/TimeLine/index.vue";
export default {
  name: "Timeline",
  components: { TimeLine },
  setup() {
    const timelines = ref([
      {
        id: "1",
        title: "开始项目规划",
        time: "2022-10-01",
        color: "#52c41a",
      },
      {
        id: "2",
        title: "熟悉Antd组件库的使用",
        time: "2022-10-01",
        color: "#52c41a",
      },
      {
        id: "3",
        title: "构建布局",
        time: "2022-10-01",
        color: "#ff5254",
      },
      {
        id: "4",
        title: "维护",
        time: "未知",
        color: "#1890ff",
      },
    ]);

    return {
      timelines,
    };
  },
};
</script>
<style scoped>
.margin_top {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  background-color: #fff;
  padding: 1rem;
}
</style>
