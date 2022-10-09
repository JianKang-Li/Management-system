<template>
  <div class="avatar-item">
    <a-avatar :size="80" :src="avatar"> </a-avatar>
    <h3>{{ name }}</h3>
    <span>{{ signature }}</span>
  </div>

  <div class="description">
    <p>
      <a-space><Career />{{ title }}</a-space>
    </p>
    <p>
      <a-space><team-outlined />{{ group }}</a-space>
    </p>
    <p>
      <a-space
        ><home-outlined />{{
          geographic.province.label +
          " " +
          geographic.city.label +
          " " +
          address
        }}</a-space
      >
    </p>
    <p>
      <a-space><phone-outlined />{{ phone }}</a-space>
    </p>
    <p>
      <a-space><Email />{{ email }}</a-space>
    </p>
  </div>
  <a-divider />
  <div class="groups">
    <span>管辖团队</span>
    <a-row>
      <a-col v-for="item in notice" :key="item.id">
        <div class="card">
          <a-avatar :size="50" :src="item.logo"></a-avatar>
          <a-divider />
          <p>{{ item.member }}</p>
          <span>{{ item.description }}</span>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { toRefs } from "vue";
import {
  HomeOutlined,
  TeamOutlined,
  PhoneOutlined,
} from "@ant-design/icons-vue";
import Career from "@/components/Icons/Career.vue";
import Email from "@/components/Icons/Email.vue";
export default {
  name: "PersonalCard",
  props: ["data"],
  components: { HomeOutlined, TeamOutlined, Career, PhoneOutlined, Email },
  setup(props) {
    // console.log(props.data);
    console.dir(props.data);
    return {
      ...toRefs(props.data),
    };
  },
};
</script>
<style scoped>
.avatar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.card {
  padding: 1rem 1rem;
  width: 15rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 1rem 1rem;
  transition: all 0.5s ease;
  transform: perspective(1px);
  cursor: pointer;
}
</style>
