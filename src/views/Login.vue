<template>
  <div class="LoginFrom">
    <a-form
      :model="formState"
      name="login"
      :label-col="{ style: { width: '5rem' } }"
      autocomplete="off"
      @finish="onFinish"
    >
      <a-form-item
        label="用户名"
        name="username"
        validateTrigger="blur"
        :rules="[{ required: true, message: '请输入用户名!' }]"
      >
        <a-input v-model:value.trim="formState.username" />
      </a-form-item>

      <a-form-item
        label="密码"
        name="password"
        validateTrigger="blur"
        :rules="[{ required: true, message: '请输入密码!' }]"
      >
        <a-input-password v-model:value.trim="formState.password" />
      </a-form-item>
      <a-form-item class="flex-center">
        <a-button type="primary" :disabled="disabled" html-type="submit"
          >登录</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup>
import { userStateStore } from "../stores/state";
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { notification } from "ant-design-vue";
const formState = reactive({
  username: "",
  password: "",
});
const router = useRouter();
const stateStore = userStateStore();
const onFinish = (values) => {
  stateStore.$patch((state) => {
    state.isLogin = true;
    state.username = values.username;
  });
  notification["success"]({
    message: "成功",
    description: "登录成功!",
  });
  router.push("/home");
};

const disabled = computed(() => {
  return !(formState.username && formState.password);
});
</script>
<style scoped>
.LoginFrom {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("../assets/loginBg.png") no-repeat;
  background-size: cover;
}

.ant-form {
  padding: 1.5rem 0rem;
  width: 20rem;
  border-radius: 1rem;
  backdrop-filter: blur(4px);
  background-color: rgba(153, 153, 153, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

:deep(.ant-form-item-control-input) {
  width: 10rem;
}
</style>
