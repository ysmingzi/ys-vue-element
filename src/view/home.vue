<template>
  <div>
    <p>this is home</p>
    <helloWorld></helloWorld>
    <el-button @click="next">点击跳转sencond</el-button>
  </div>
</template>

<script>
import helloWorld from "@/components/HelloWorld.vue";
export default {
  name: "home",
  components: { helloWorld },
  data() {
    return {
      home: "0"
    };
  },
  methods: {
    next() {
      this.$router.push("/lagout/second");
    }
  }
};
</script>

<style></style>
