<template>
  <div class="container">
    <div class="min">
      <div class="form">
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              placeholder="用户名"
              prefix-icon="naf-icons naf-icon-user"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              placeholder="密码"
              v-model="loginForm.password"
              prefix-icon="naf-icons naf-icon-password"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm('loginForm')"
              :style="{ width: '100%' }"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "登录"
  },
  data() {
    return {
      codeUrl: "",
      checked: false,
      type: 0,
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }]
      },
      dataUrl: null,
      client: null,
      unit: "master",
      typeList: [{ label: "密码登录", value: 0 }]
    };
  },
  methods: {
    async submitForm(formName) {
      const arr = document.getElementsByTagName("input");
      for (const i of arr) {
        i.blur();
      }
      this.$refs[formName].validate(async valid => {
        if (valid) {
          const res = await this.login({
            username: this.loginForm.username,
            password: this.loginForm.password
          });
          if (this.$checkRes(res, "登录成功")) {
            this.$router.push(this.$route.query.redirect || "/frame");
          }
        } else {
          if (
            this.loginForm.username === "" ||
            this.loginForm.username == null
          ) {
            this.$notify.error({
              title: "错误",
              message: "请输入用户名",
              offset: 100
            });
            return false;
          }
          if (
            this.loginForm.password === "" ||
            this.loginForm.password == null
          ) {
            this.$notify.error({
              title: "错误",
              message: "请输入密码",
              offset: 100
            });
            return false;
          }
        }
        return true;
      });
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.container {
  background: #f0f2f5;
  background-image: url("~@/assets/bg2.jpg");
  height: 100%;
  width: 100%;
  min-height: 800px;
  min-width: 1200px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  padding: 110px 0 144px 0;
  position: relative;
}
.form {
  width: 460px;
  margin-left: 5%;
  margin-top: 2%;
}
.min {
  width: 660px;
  margin: 10% auto;
  display: flex;
}
.checked {
  color: #fff;
  width: 100%;
  text-align: right;
}
.title {
  font-size: 33px;
  font-family: "Myriad Pro", "Helvetica Neue", Arial, Helvetica, sans-serif;
  font-weight: 600;
  position: relative;
  top: 2px;
}
</style>
