<template>
  <div>
    <p>this is home</p>
    <helloWorld></helloWorld>
    <el-button @click="next">点击跳转sencond</el-button>
  </div>
</template>

<script>
import helloWorld from "@/components/HelloWorld.vue";
import { ysApi } from "@/api/index.js";
export default {
  name: "home",
  components: { helloWorld },
  data() {
    return {
      home: "0"
    };
  },
  created() {
    this.postFun();
  },
  methods: {
    next() {
      this.$router.push("/lagout/second");
    },
    async postFun() {
      let demoData = {
        DEMO: "111213213"
      };
      let { res } = await ysApi.ysDemoPost(demoData);
      if (res) {
        console.log("28", res);
      }
    }
  }
};
</script>

<style></style>
