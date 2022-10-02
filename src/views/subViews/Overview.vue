<template>
  <div class="Charts">
    <div class="bords">
      <KeyBord title="使用总人数" data="1000" unit="人"></KeyBord>
      <KeyBord title="在线人数" data="100" unit="人"></KeyBord>
      <KeyBord title="下载人数" data="10" unit="人"></KeyBord>
      <KeyBord title="优秀店铺" data="10" unit="人"></KeyBord>
    </div>
    <div id="users" class="chart"></div>
    <div id="distribution" class="chart"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import { onMounted } from "vue";
import KeyBord from "@/components/Echarts/KeyBord.vue";
export default {
  components: { KeyBord },
  setup() {
    let userChart;
    let attrChart;
    const drawEchart = () => {
      userChart = echarts.init(document.querySelector("#users"));
      attrChart = echarts.init(document.querySelector("#distribution"));
      userChart.setOption({
        title: {
          text: "系统使用情况",
          left: "left",
        },
        legend: {
          data: ["上线人数", "平均上线次数"],
        },
        xAxis: {
          type: "category",
          data: [
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六",
            "星期天",
          ],
          axisLine: {
            show: true,
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: true,
          },
        },
        tooltip: {},
        series: [
          {
            name: "上线人数",
            data: [82, 93, 90, 94, 129, 133, 132],
            type: "bar",
            smooth: true,
            label: {
              // 是否显示当前类目数量
              show: true,
              position: "top",
              rotate: 45,
            },
          },
          {
            name: "平均上线次数",
            data: [8, 9, 9, 11, 12, 10, 5],
            type: "bar",
            smooth: true,
            label: {
              // 是否显示当前类目数量
              show: true,
              position: "top",
              rotate: 45,
            },
          },
        ],
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
      });

      attrChart.setOption({
        title: {
          text: "访问来源",
          left: "center",
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%", //饼图半径为容器高宽较小的一项
            tooltip: {},
            data: [
              { value: 235, name: "视频广告" },
              { value: 100, name: "浏览器广告" },
              { value: 235, name: "邮箱" },
              { value: 100, name: "传单" },
            ],
            normal: {
              shadowBlur: 20,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        ],
      });
    };

    const disChart = () => {
      echarts.dispose(document.querySelector("#users"));
      echarts.dispose(document.querySelector("#distribution"));
    };
    onMounted(() => {
      drawEchart();
      window.addEventListener("resize", () => {
        disChart();
        drawEchart();
      });
    });
  },
};
</script>
<style scoped>
.Charts {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: auto;
}

.chart {
  width: 80%;
  height: 70%;
}

.bords {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0.5rem 0;
}

@media screen and (max-width: 700px) {
  .Charts {
    flex-direction: column;
  }

  .bords {
    flex-direction: column;
  }
}
</style>
