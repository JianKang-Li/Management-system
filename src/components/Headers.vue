<template>
  <div class="header">
    <div class="logo">极简后台管理系统</div>
    <div style="flex: 1 1 0%"></div>
    <a-space :size="20">
      <a-badge count="1" dot v-if="isLogin">
        <bell-outlined
          class="mousep"
          style="width: 1rem; height: 1rem; color: #ffff"
        />
      </a-badge>

      <a-dropdown v-if="isLogin">
        <a-avatar :size="30" style="cursor: pointer">
          <template #icon>
            {{ state.username.slice(0, 3) }}
          </template>
        </a-avatar>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a-space>
                <user-outlined />
                <router-link to="/home">管理中心</router-link>
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
    </a-space>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { userStateStore } from "@/stores/state";
import {
  LogoutOutlined,
  UserOutlined,
  BellOutlined,
} from "@ant-design/icons-vue";
export default {
  components: { LogoutOutlined, UserOutlined, BellOutlined },
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
  justify-content: center;
  padding: 0 1rem;
}

.logo {
  color: white;
  font-size: 1.5rem;
}
</style>
