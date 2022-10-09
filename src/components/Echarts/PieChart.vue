<template>
  <div :id="pid" class="chart" v-resize="Resize"></div>
</template>
<script>
import * as echarts from "echarts";
import { onMounted, onBeforeUnmount, ref } from "vue";
export default {
  name: "PieChart",
  props: ["id", "title", "series"],
  setup(props) {
    let pieChart;
    const drawEchart = () => {
      pieChart = echarts.init(document.querySelector(`#${props.id}`));
      pieChart.setOption({
        title: {
          text: props.title,
          left: "center",
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        tooltip: {},
        series: props.series,
      });
    };

    const disChart = () => {
      echarts.dispose(document.querySelector(`#${props.id}`));
    };

    onMounted(() => {
      drawEchart();
    });

    onBeforeUnmount(() => {
      disChart();
    });

    let pid = ref(props.id);

    const Resize = () => {
      pieChart.resize();
    };
    return {
      pid,
      Resize,
    };
  },
};
</script>
<style scoped></style>
