<template>
  <div :id="pid" class="chart"></div>
</template>
<script>
import * as echarts from "echarts";
import { onMounted, onBeforeUnmount, ref } from "vue";
export default {
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
      window.addEventListener("resize", () => {
        disChart();
        drawEchart();
      });
    });

    onBeforeUnmount(() => {
      removeEventListener("resize", window);
      disChart();
    });

    let pid = ref(props.id);

    return {
      pid,
    };
  },
};
</script>
<style scoped></style>
