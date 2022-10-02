<template>
  <a-layout-sider :collapsed="collapsed" :trigger="null" collapsible>
    <div class="bar">
      <a-button
        type="text"
        style="color: white; text-align: left; margin-left: 1rem"
        @click="toggleCollapsed"
      >
        <MenuUnfoldOutlined v-if="collapsed" />
        <MenuFoldOutlined v-else />
      </a-button>
      <a-menu mode="inline" theme="dark" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="overview">
          <template #icon>
            <radar-chart-outlined />
          </template>
          <router-link to="/home/overview">情况总览</router-link>
        </a-menu-item>
        <a-menu-item key="github">
          <template #icon>
            <github-outlined />
          </template>
          <a
            href="https://github.com/JianKang-Li/Management-system"
            target="_blank"
          >
            GitHub首页
          </a>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #icon>
            <unordered-list-outlined />
          </template>
          <template #title>常用组件</template>
          <a-menu-item key="1"
            ><router-link to="/home/step">分步表单</router-link></a-menu-item
          >
          <a-menu-item key="2">表格页</a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="sub2">
          <template #icon>
            <user-outlined />
          </template>
          <template #title>个人页</template>
          <a-menu-item key="5"
            ><router-link to="">个人中心</router-link></a-menu-item
          >
          <a-menu-item key="6"
            ><router-link to="">个人设置</router-link></a-menu-item
          >
        </a-sub-menu>
        <a-menu-item key="todo"
          ><template #icon>
            <carry-out-outlined />
          </template>
          <router-link to="/home/todo">待办事项</router-link>
        </a-menu-item>
        <a-menu-item key="log"
          ><template #icon>
            <container-outlined />
          </template>
          <router-link to="/home/log">日志填写</router-link>
        </a-menu-item>
      </a-menu>
    </div>
  </a-layout-sider>
</template>
<script>
import { reactive, toRefs } from "vue";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  GithubOutlined,
  RadarChartOutlined,
  UnorderedListOutlined,
  CarryOutOutlined,
  ContainerOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";
export default {
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    GithubOutlined,
    RadarChartOutlined,
    UnorderedListOutlined,
    CarryOutOutlined,
    ContainerOutlined,
    UserOutlined,
  },
  setup() {
    const state = reactive({
      rootSubmenuKeys: ["sub1"],
      selectedKeys: [],
      collapsed: true,
    });

    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };

    return { ...toRefs(state), toggleCollapsed };
  },
};
</script>
<style scoped>
.bar {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

:deep(.ant-anchor-link-title:hover) {
  color: white;
  display: inline;
}

.ant-layout-sider {
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
}
</style>
