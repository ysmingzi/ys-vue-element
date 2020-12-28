<template>
  <div>
    <el-button @click="layout">注销账号</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    layout() {
      localStorage.removeItem("myInfo"), localStorage.removeItem("token");
      this.$router.push("/");
    }
  }
};
</script>

<style></style>
