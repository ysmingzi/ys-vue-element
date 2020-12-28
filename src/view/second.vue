<template>
  <div>
    <p>this is second</p>
    <el-button @click="next">点击跳转sencond</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      second: "1"
    };
  },
  methods: {
    next() {
      this.$router.push("/lagout/home");
    }
  }
};
</script>
