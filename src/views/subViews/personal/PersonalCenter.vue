<template>
  <a-card :loading="loading" title="个人信息" class="Personal">
    <template #extra>
      <a-tooltip>
        <template #title
          >数据来源于<a
            class="tip"
            href="https://preview.pro.ant.design/dashboard/analysis"
            >ant-design</a
          ></template
        >
        <question-circle-outlined />
      </a-tooltip>
    </template>

    <PersonalCard :data="user"></PersonalCard>
  </a-card>
</template>
<script>
import { ref, reactive } from "vue";
import { getCurrentUser } from "@/apis/index.js";
import PersonalCard from "@/components/Personal/PersonalCard.vue";
import { QuestionCircleOutlined } from "@ant-design/icons-vue";
export default {
  name: "PersonalCenter",
  components: { PersonalCard, QuestionCircleOutlined },
  setup() {
    const user = reactive({
      name: "",
      avatar: "",
      title: "",
      geographic: {
        city: {
          label: "",
        },
        province: {
          label: "",
        },
      },
      group: "",
      address: "",
      phone: "",
      email: "",
      signature: "",
      notice: [],
    });

    const loading = ref(true);
    getCurrentUser().then(
      (res) => {
        // console.log(res.data);
        Object.assign(user, res.data);
        loading.value = false;
      },
      (err) => {
        console.log(err);
      }
    );

    return {
      loading,
      user,
    };
  },
};
</script>
<style scoped>
.tip {
  color: #ffffff;
}

.Personal {
  width: 100%;
  height: 100%;
}
</style>
