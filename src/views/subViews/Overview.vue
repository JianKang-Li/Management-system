<template>
  <div class="Charts">
    <div>
      <KeyBord title="活动倒计时"
        ><template v-slot:content>
          <Countdown />
        </template>
      </KeyBord>
    </div>
    <div class="bords">
      <KeyBord title="店铺总浏览人数" data="1000" unit="人"></KeyBord>
      <KeyBord title="日均浏览人数" data="100" unit="人"></KeyBord>
      <KeyBord title="购物人数" data="10" unit="人"></KeyBord>
      <KeyBord title="优秀店铺" data="10" unit="家"></KeyBord>
    </div>
    <PieChart :series="pie.series" :id="pie.id" :title="pie.title" />
    <BarChart v-bind="barChart" />
  </div>
</template>
<script>
import KeyBord from "@/components/Echarts/KeyBord.vue";
import PieChart from "@/components/Echarts/PieChart.vue";
import BarChart from "@/components/Echarts/BarChart.vue";
import Countdown from "@/components/Echarts/Countdown.vue";
export default {
  name: "Overview",
  components: { KeyBord, PieChart, BarChart, Countdown },
  setup() {
    const barChart = {
      title: "每日人流量情况",
      id: "users",
      legend: {
        data: ["浏览人数", "平均购买人数"],
        right: 0,
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
      series: [
        {
          name: "浏览人数",
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
          name: "平均购买人数",
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
    };

    const pie = {
      title: "访问来源",
      id: "attribution",
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
    };

    return {
      pie,
      barChart,
    };
  },
};
</script>
<style scoped>
.Charts {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.chart {
  width: 80%;
  height: 50vh;
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
