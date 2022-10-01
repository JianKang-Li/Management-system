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
          <template #title>含子菜单</template>
          <a-menu-item key="1">Option 1</a-menu-item>
          <a-menu-item key="2">Option 2</a-menu-item>
          <a-menu-item key="3">Option 3</a-menu-item>
          <a-menu-item key="4">Option 4</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="todo"
          ><template #icon>
            <carry-out-outlined />
          </template>
          <router-link to="/home/todo">Todos</router-link>
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
} from "@ant-design/icons-vue";
export default {
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    GithubOutlined,
    RadarChartOutlined,
    UnorderedListOutlined,
    CarryOutOutlined,
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

.bar::-webkit-scrollbar {
  width: 0.3rem;
}

/* 滚动槽 */
.bar::-webkit-scrollbar-track {
  border-radius: 1rem;
  background: #eee;
  width: 0.1rem;
}

/* 滚动条滑块 */
.bar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(136, 136, 136, 0.8);
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
