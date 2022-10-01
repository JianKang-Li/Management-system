<template>
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
    <div class="bar">
      <a-button
        type="primary"
        style="margin-bottom: 16px"
        @click="toggleCollapsed"
      >
        <MenuUnfoldOutlined v-if="collapsed" />
        <MenuFoldOutlined v-else />
      </a-button>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        theme="dark"
        :open-keys="openKeys"
        @openChange="onOpenChange"
      >
        <a-menu-item>
          <template #icon>
            <github-outlined />
          </template>
          <a-anchor-link
            href="#components-anchor-demo-basic"
            title="GitHub首页"
          >
          </a-anchor-link>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>1</template>
          <a-menu-item key="1">Option 1</a-menu-item>
          <a-menu-item key="2">Option 2</a-menu-item>
          <a-menu-item key="3">Option 3</a-menu-item>
          <a-menu-item key="4">Option 4</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>二</template>
          <a-menu-item key="1">Option 1</a-menu-item>
          <a-menu-item key="2">Option 2</a-menu-item>
          <a-menu-item key="3">Option 3</a-menu-item>
          <a-menu-item key="4">Option 4</a-menu-item>
        </a-sub-menu>
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
} from "@ant-design/icons-vue";
export default {
  components: { MenuFoldOutlined, MenuUnfoldOutlined, GithubOutlined },
  setup() {
    const state = reactive({
      rootSubmenuKeys: ["sub1", "sub2"],
      openKeys: [],
      selectedKeys: [],
      collapsed: true,
    });

    const onOpenChange = (openKeys) => {
      const latestOpenKey = openKeys.find(
        (key) => state.openKeys.indexOf(key) === -1
      );

      if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        state.openKeys = openKeys;
      } else {
        state.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    };
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };

    return { ...toRefs(state), onOpenChange, toggleCollapsed };
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
}

/* 滚动条滑块 */
.bar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(136, 136, 136, 0.8);
}
</style>
