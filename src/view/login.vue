<template>
  <div style="width:500px;margin:0 auto">
    <p>登录页面</p>
    <el-form
      :rules="Loginrules"
      ref="ruleForm"
      label-position="left"
      label-width="80px"
      :model="formLabelAlign"
    >
      <el-form-item label="名字" required prop="name">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="手机号" required prop="phone">
        <el-input v-model="formLabelAlign.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" required prop="password">
        <el-input show-password v-model="formLabelAlign.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >注册</el-button
        >
        <el-button @click="resetForm('ruleForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: "1",
      formLabelAlign: {
        name: "",
        phone: "",
        password: ""
      },
      Loginrules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        phone: [{ required: true, message: "请输入手机号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$toast("注册成功");
          localStorage.setItem("myInfo", JSON.stringify(this.formLabelAlign));
          localStorage.setItem("token", "yangsendemo");
          this.$router.push("/lagout");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style></style>
