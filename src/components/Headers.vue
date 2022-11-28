<template>
  <div class="header">
    <div class="logo">极简后台管理系统</div>
    <div style="flex: 1 1 0%"></div>
    <a-space :size="20">
      <a-dropdown :trigger="['click']">
        <a-badge count="1" dot v-if="isLogin">
          <bell-outlined
            class="mousep"
            :style="{
              fontSize: '20px',
              color: '#fff',
              verticalAlign: 'middle',
            }"
          />
        </a-badge>
        <template #overlay>
          <a-menu>
            <a-menu-item v-for="(item, index) in messages" :key="index">
              {{ item.title }}
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>

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
                <router-link to="/home/personal" class="link"
                  >管理中心</router-link
                >
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
import { ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { userStateStore } from "@/stores/state";
import {
  LogoutOutlined,
  UserOutlined,
  BellOutlined,
} from "@ant-design/icons-vue";
export default {
  name: "Headers",
  components: { LogoutOutlined, UserOutlined, BellOutlined },
  setup() {
    const state = userStateStore();
    const { isLogin } = storeToRefs(state);
    const router = useRouter();
    const loginOut = () => {
      state.clear();
      router.push("/Login");
    };

    const activeKey = ref("1");

    const messages = [
      {
        title: "你有一条来自好友的消息",
      },
      {
        title: "你有一条来自好友的消息",
      },
      {
        title: "你有一条来自好友的消息",
      },
      {
        title: "你有一条来自好友的消息",
      },
    ];
    return {
      loginOut,
      isLogin,
      state,
      activeKey,
      messages,
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

.link {
  color: #000;
}

.tabs {
  position: absolute;
  right: 10%;
  height: 50vh;
  top: 70px;
  background-color: #fff;
  padding: 1rem 2rem;
  width: 20rem;
  overflow: auto;
  box-shadow: 3px 3px 10px #011;
  display: flex;
  flex-direction: column;
  /* display: none; */
}
</style>
