<template>
  <a-layout-sider
    :collapsed="collapsed"
    :trigger="null"
    collapsible
    class="side"
  >
    <div style="flex: 1 1 0%; overflow: hidden auto">
      <a-menu
        mode="inline"
        theme="light"
        v-model:selectedKeys="selectedKeys"
        class="sideMenu"
      >
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
          <a-menu-item key="1">
            <template #title>分布表单</template>
            <router-link to="/home/step">分步表单</router-link></a-menu-item
          >
          <a-menu-item key="2">
            <template #title>表格页</template>
            <router-link to="/home/table">表格页</router-link></a-menu-item
          >
        </a-sub-menu>

        <a-sub-menu key="sub2">
          <template #icon>
            <user-outlined />
          </template>
          <template #title>个人页</template>
          <a-menu-item key="5">
            <template #title>个人中心</template>
            <router-link to="/home/personal">个人中心</router-link></a-menu-item
          >
          <a-menu-item key="6">
            <template #title>个人设置</template>
            <router-link to="">个人设置</router-link></a-menu-item
          >
        </a-sub-menu>

        <a-sub-menu key="sub3">
          <template #icon>
            <info-circle-outlined />
          </template>
          <template #title>错误页</template>
          <a-menu-item key="3">
            <template #title>404</template>
            <router-link to="/error/404">404</router-link></a-menu-item
          >
          <a-menu-item key="4">
            <template #title>500</template>
            <router-link to="/error/500">500</router-link></a-menu-item
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

    <div class="sideLink">
      <a-button type="link" @click="toggleCollapsed">
        <MenuUnfoldOutlined v-if="collapsed" />
        <MenuFoldOutlined v-else />
      </a-button>
    </div>
  </a-layout-sider>
  <a-layout ref="content" class="main">
    <a-layout-header> </a-layout-header>
    <a-layout-content class="content">
      <router-view></router-view>
      <Footers bcolor="#f0f2f5" fcolor="#000000"></Footers>
    </a-layout-content>
  </a-layout>
</template>
<script>
import { reactive, toRefs, ref, onMounted } from "vue";
import Footers from "@/components/Footers.vue";
import {
  GithubOutlined,
  RadarChartOutlined,
  UnorderedListOutlined,
  CarryOutOutlined,
  ContainerOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons-vue";
export default {
  name: "PageShow",
  components: {
    Footers,
    GithubOutlined,
    RadarChartOutlined,
    UnorderedListOutlined,
    CarryOutOutlined,
    ContainerOutlined,
    UserOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    InfoCircleOutlined,
  },
  setup() {
    const state = reactive({
      rootSubmenuKeys: ["sub1"],
      selectedKeys: [],
    });
    const content = ref(null);

    const collapsed = ref(true);

    onMounted(() => {
      content.value.$el.style["margin-left"] = "calc(80px + 1rem)";
    });

    const toggleCollapsed = () => {
      collapsed.value = !collapsed.value;
      if (collapsed.value === false) {
        content.value.$el.style["margin-left"] = "calc(200px + 1rem)";
      } else {
        content.value.$el.style["margin-left"] = "calc(80px + 1rem)";
      }
    };
    return { ...toRefs(state), toggleCollapsed, collapsed, content };
  },
};
</script>
<style scoped>
.side {
  position: fixed;
  left: 0;
  top: 0;
  height: calc(100% - 64px);
  overflow: auto;
  margin-top: 64px;
  background: white;
  transition: all 0.5s ease-in-out;
}

.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem 0 0;
}

:deep(.ant-anchor-link-title:hover) {
  color: white;
  display: inline;
}

:deep(.ant-layout-sider-children) {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.sideLink > button {
  width: 100%;
  color: #000;
  text-align: left;
  padding-left: 2rem;
}

.sideLink > button:hover {
  color: #329cff;
}

.main {
  transition: all 0.5s ease-in-out;
  flex: 1;
}
</style>
