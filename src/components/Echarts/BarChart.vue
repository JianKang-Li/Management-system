<template>
  <div :id="id" class="chart" v-resize="Resize"></div>
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
          top: 0,
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
          top: 15,
          right: 10,
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
    });

    onBeforeUnmount(() => {
      disChart();
    });

    const Resize = () => {
      barChart.resize();
    };
    return {
      Resize,
    };
  },
};
</script>
<style scoped></style>
