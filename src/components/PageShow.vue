<template>
  <a-layout has-sider>
    <SiderBar @coll="toggleCollapsed"></SiderBar>
    <a-layout ref="content" class="main">
      <a-layout-header> </a-layout-header>
      <a-layout-content class="content">
        <router-view></router-view>
        <Footers bcolor="#f0f2f5" fcolor="#000000"></Footers>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { ref, onMounted } from "vue";
import Footers from "@/components/Footers.vue";
import SiderBar from "./SiderBar.vue";

export default {
  name: "PageShow",
  components: {
    Footers,
    SiderBar,
  },

  setup() {
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
    return {
      toggleCollapsed,
      collapsed,
      content,
    };
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
