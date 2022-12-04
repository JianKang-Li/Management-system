<template>
  <a-statistic-countdown
    title=""
    :value="deadline"
    format="D 天 H 时 m 分 s 秒"
    @finish="finished"
  />
</template>
<script>
export default {
  setup() {
    const finished = () => {
      console.log("finished");
    };

    return {
      deadline: Date.now() + 1000 * 60 * 60 * 24 + 1000 * 30,
      finished,
    };
  },
};
</script>
<style></style>
