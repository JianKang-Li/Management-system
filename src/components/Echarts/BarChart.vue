<template>
  <div :id="id" class="chart"></div>
</template>
<script>
import * as echarts from "echarts";
import { onMounted, onBeforeUnmount } from "vue";
export default {
  props: ["id", "title", "series", "xAxis", "yAxis", "legend"],
  setup(props) {
    let barChart;
    const drawEchart = () => {
      barChart = echarts.init(document.querySelector(`#${props.id}`));
      barChart.setOption({
        title: {
          text: props.title,
          left: "left",
        },
        tooltip: {
          trigger: "axis",
        },
        toolbox: {
          feature: {
            saveAsImage: {},
            dataZoom: {},
            restore: {},
            magicType: {
              type: ["bar", "line"],
            },
          },
        },
        xAxis: props.xAxis,
        yAxis: props.yAxis,
        legend: props.legend,
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
  },
};
</script>
<style scoped></style>
