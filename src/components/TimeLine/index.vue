<template>
  <a-timeline>
    <a-timeline-item
      v-for="timeline in timelines"
      :key="timeline.id"
      :color="timeline.color"
    >
      <Dialogbox :color="timeline.color">
        <template v-slot:content>
          {{ timeline.title }}
        </template>
        <template v-slot:foot>
          {{ timeline.time }}
        </template>
      </Dialogbox>
    </a-timeline-item>
  </a-timeline>
</template>
<script>
import { ref } from "vue";
import Dialogbox from "@/components/Dialogbox/index.vue";
export default {
  components: { Dialogbox },
  props: {
    timeline: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const timelines = ref(props.timeline);
    return {
      timelines,
    };
  },
};
</script>
<style scoped></style>
