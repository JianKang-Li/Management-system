<template>
  <a-layout-sider
    :collapsed="collapse"
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
            <appstore-outlined />
          </template>
          <router-link to="/home/overview">情况总览</router-link>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #icon>
            <unordered-list-outlined />
          </template>
          <template #title>常用表单</template>
          <a-menu-item key="1">
            <template #title>分布表单</template>
            <router-link to="/home/step">分步表单</router-link></a-menu-item
          >
          <a-menu-item key="2">
            <template #title>表格页</template>
            <router-link to="/home/table">表格页</router-link></a-menu-item
          >
          <a-menu-item key="3">
            <template #title>Excel</template>
            <router-link to="/home/excel">Excel</router-link></a-menu-item
          >
        </a-sub-menu>

        <a-sub-menu key="sub2">
          <template #icon>
            <user-outlined />
          </template>
          <template #title>个人页</template>
          <a-menu-item key="4">
            <template #title>个人中心</template>
            <router-link to="/home/personal">个人中心</router-link></a-menu-item
          >
          <a-menu-item key="5">
            <template #title>个人设置</template>
            <router-link to="">个人设置</router-link></a-menu-item
          >
        </a-sub-menu>

        <a-sub-menu key="sub3">
          <template #icon>
            <info-circle-outlined />
          </template>
          <template #title>错误页</template>
          <a-menu-item key="6">
            <template #title>404</template>
            <router-link to="/error/404">404</router-link></a-menu-item
          >
          <a-menu-item key="7">
            <template #title>500</template>
            <router-link to="/error/500">500</router-link></a-menu-item
          >
        </a-sub-menu>

        <a-sub-menu key="sub4">
          <template #icon>
            <appstore-add-outlined />
          </template>
          <template #title>常用组件</template>
          <a-menu-item key="8">
            <template #title>剪切板</template>
            <router-link to="/home/components/clip"
              >剪切板</router-link
            ></a-menu-item
          >
          <a-menu-item key="9">
            <template #title>图片放大镜</template>
            <router-link to="/home/components/magnifier"
              >图片放大镜</router-link
            ></a-menu-item
          >
          <a-menu-item key="10">
            <template #title>二维码</template>
            <router-link to="/home/components/qrcode"
              >二维码</router-link
            ></a-menu-item
          >
          <a-menu-item key="11">
            <template #title>时间轴</template>
            <router-link to="/home/components/timeline"
              >时间轴</router-link
            ></a-menu-item
          >
          <a-menu-item key="12">
            <template #title>视频播放器</template>
            <router-link to="/home/components/player"
              >视频播放器</router-link
            ></a-menu-item
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
      </a-menu>
    </div>

    <div class="sideLink">
      <a-button type="link" @click="toggle">
        <MenuUnfoldOutlined v-if="collapse" />
        <MenuFoldOutlined v-else />
      </a-button>
    </div>
  </a-layout-sider>
</template>
<script>
import { reactive, toRefs, ref } from "vue";
import {
  GithubOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  CarryOutOutlined,
  ContainerOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  InfoCircleOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons-vue";
export default {
  components: {
    GithubOutlined,
    AppstoreOutlined,
    UnorderedListOutlined,
    CarryOutOutlined,
    ContainerOutlined,
    UserOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    InfoCircleOutlined,
    AppstoreAddOutlined,
  },
  setup(_, { emit }) {
    const state = reactive({
      rootSubmenuKeys: ["sub1"],
      selectedKeys: [],
    });
    const collapse = ref(true);

    const toggle = () => {
      collapse.value = !collapse.value;
      emit("coll");
    };
    return {
      ...toRefs(state),
      collapse,
      toggle,
    };
  },
};
</script>
<style>
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
</style>
