<template>
  <div class="step">
    <a-steps :current="current" class="stepGuide">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">
      <a-form
        class="stepForm"
        :model="formState"
        v-if="current === 0"
        :labelCol="{ span: 7 }"
      >
        <a-form-item
          name="name"
          label="姓名"
          validateTrigger="blur"
          :rules="[{ required: true, message: '请输入姓名' }]"
        >
          <a-input v-model:value.trim="formState.name" allow-clear />
        </a-form-item>

        <a-form-item
          name="phone"
          label="联系电话"
          validateTrigger="blur"
          :rules="[{ required: true, message: '请输入联系电话' }]"
        >
          <a-input v-model:value.trim="formState.phone" allow-clear />
        </a-form-item>
        <a-form-item
          name="types"
          label="申请类型"
          validateTrigger="blur"
          :rules="[{ required: true, message: '请选择至少一种申请类型' }]"
        >
          <a-select
            v-model:value="formState.types"
            mode="multiple"
            placeholder="请选择申请类型"
            :options="types"
            allow-clear
          ></a-select>
        </a-form-item>
        <a-form-item
          name="introduction"
          label="申请描述"
          validateTrigger="blur"
          :rules="[{ required: true, message: '请输入申请描述' }]"
        >
          <a-textarea
            :rows="5"
            show-count
            :maxlength="500"
            v-model:value="formState.introduction"
            allow-clear
          />
        </a-form-item>
      </a-form>

      <div class="preview" v-else-if="current === 1">
        <a-alert
          message="请检查申请信息是否正确!"
          type="info"
          show-icon
          closable
        />
        <a-descriptions title="申请信息确认" bordered size="small" :column="2">
          <a-descriptions-item label="申请人:">{{
            formState.name
          }}</a-descriptions-item>
          <a-descriptions-item label="联系电话:">{{
            formState.phone
          }}</a-descriptions-item>
          <a-descriptions-item label="申请类型:" :span="2"
            ><a-tag color="blue" v-for="item in formState.types" :key="item">{{
              item
            }}</a-tag></a-descriptions-item
          >
          <a-descriptions-item label="申请描述:" :span="2">{{
            formState.introduction
          }}</a-descriptions-item>
          <a-descriptions-item label="申请时间:" :span="2">{{
            getTime()
          }}</a-descriptions-item>
        </a-descriptions>
      </div>

      <a-result
        v-else
        status="success"
        title="提交申请成功!"
        sub-title="您的申请已经提交成功，请等待处理结果!"
      >
        <template #extra>
          <a-button type="primary" @click="goHome">回到首页</a-button>
          <a-button @click="again">再次申请</a-button>
        </template>
      </a-result>
    </div>
    <div class="steps-action">
      <a-button
        v-if="current === 0"
        type="primary"
        @click="next"
        :disabled="abled"
        >下一步</a-button
      >
      <a-button v-if="current == 1" type="primary" @click="next">
        提交
      </a-button>

      <a-button v-if="current === 1" style="margin-left: 8px" @click="prev"
        >上一步</a-button
      >
    </div>
  </div>
</template>
<script>
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";
export default {
  setup() {
    const current = ref(0);
    const formState = reactive({
      name: "",
      phone: "",
      types: [],
      introduction: "",
    });
    const types = [
      { value: "个人申请" },
      { value: "团队申请" },
      { value: "活动申请" },
      { value: "会议申请" },
      { value: "职位调动" },
      { value: "其他" },
    ];

    const next = () => {
      current.value++;
    };

    const prev = () => {
      current.value--;
    };

    const abled = computed(() => {
      return !(formState.name && formState.phone && formState.introduction);
    });

    const again = () => {
      current.value = 0;
    };

    const getTime = () => {
      let date = new Date();
      let day =
        date.getFullYear().toString().padStart(4, 0) +
        "-" +
        (date.getMonth() + 1).toString().padStart(2, 0) +
        "-" +
        date.getDate().toString().padStart(2, 0) +
        " " +
        date.toTimeString().slice(0, 8).toString();
      return day;
    };

    const router = useRouter();
    const goHome = () => {
      router.push("/home");
    };

    return {
      message,
      current,
      steps: [
        {
          title: "填写申请信息",
        },
        {
          title: "提交信息",
        },
        {
          title: "完成",
        },
      ],
      next,
      prev,
      formState,
      abled,
      types,
      getTime,
      again,
      goHome,
    };
  },
};
</script>
<style scoped>
.step {
  width: 90%;
  height: 100%;
  max-width: 800px;
}

.stepGuide {
  margin-top: 1rem;
}

.steps-content {
  margin-top: 1rem;
  border: 1px dashed #e9e9e9;
  border-radius: 0.2rem;
  background-color: #ffff;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
}

.steps-action {
  margin-top: 2rem;
  text-align: center;
  margin-bottom: 1rem;
}
[data-theme="dark"] .steps-content {
  background-color: #2f2f2f;
  border: 1px dashed #404040;
}

.stepForm {
  width: 80%;
}
</style>
