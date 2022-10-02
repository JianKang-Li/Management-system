<template>
  <div class="header">
    <div class="logo">极简后台管理系统</div>
    <a-dropdown v-if="isLogin">
      <a-badge count="1">
        <a-avatar :size="30" style="cursor: pointer">
          <template #icon>
            {{ state.username.slice(0, 3) }}
          </template>
        </a-avatar>
      </a-badge>
      <template #overlay>
        <a-menu>
          <a-menu-item>
            <a-space>
              <user-outlined />
              <span>个人中心</span>
            </a-space>
          </a-menu-item>
          <a-divider style="height: 2px; margin: 2px" />
          <a-menu-item>
            <a-space>
              <logout-outlined />
              <span @click="loginOut">退出登录</span>
            </a-space>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { userStateStore } from "@/stores/state";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons-vue";
export default {
  components: { LogoutOutlined, UserOutlined },
  setup() {
    const state = userStateStore();
    const { isLogin } = storeToRefs(state);
    const router = useRouter();
    const loginOut = () => {
      state.clear();
      router.push("/Login");
    };
    return {
      loginOut,
      isLogin,
      state,
    };
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  color: white;
  font-size: 1.5rem;
}
</style>
