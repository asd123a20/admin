<template>
  <el-container
    class="layout"
    :style="{ height: confing.height, width: confing.width }"
  >
    <!-- 页头 -->
    <el-header :style="{ backgroundColor: confing.backgroundColor }">
      <!-- logo -->
      <div
        class="logo"
        :style="{ width: !isCollapse ? confing.menuWidth : '64px' }"
      >
        <img src="../../assets/logo1.svg" class="logoImg" />
        <h3 v-if="!isCollapse">{{ confing.title }}</h3>
      </div>
      <!-- 菜单样式切换按钮 -->
      <el-button
        @click="isCollapse = !isCollapse"
        class="btn"
        size="medium"
        type="primary"
        :icon="!isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      ></el-button>
      <!-- 用户头像 -->
      <naf-user class="userBox"></naf-user>
    </el-header>
    <el-container>
      <!-- 菜单 -->
      <el-aside :width="!isCollapse ? confing.menuWidth : ''">
        <naf-menu :menuItems="menuItems" :isCollapse="isCollapse"></naf-menu>
      </el-aside>
      <el-main>
        <!-- 面包屑 -->
        <naf-breadcrumb :menuItems="menus"></naf-breadcrumb>
        <div class="content">
          <!-- 页面主体 -->
          <router-view />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { menus } from "@naf/menu";
import nafMenu from "@naf/layout/menu";
import nafUser from "@naf/layout/user";
import nafBreadcrumb from "@naf/layout/breadcrumb";
const confing = {
  width: process.env.VUE_APP_WIDTH,
  height: process.env.VUE_APP_HEIGHT,
  menuWidth: process.env.VUE_APP_MENU_WIDTH,
  backgroundColor: process.env.VUE_APP_MENU_BACKGROUNDCOLOR,
  title: process.env.VUE_APP_MENU_TITLE,
  tabs: eval(process.env.VUE_APP_TABS)
};
export default {
  components: {
    nafMenu,
    nafUser,
    nafBreadcrumb
  },
  data() {
    return {
      menus,
      confing,
      isCollapse: false
    };
  },
  methods: {},
  mounted() {},
  computed: {
    // 菜单计算属性
    menuItems() {
      // 返回树形结构
      return this.$deepTree(this.menus);
    }
  }
};
</script>

<style lang="less" scoped>
.layout {
  overflow: hidden;
  .el-header {
    padding: 0;
    display: flex;
    position: relative;
    .logo {
      border-right: 1px solid #fff;
      height: 100%;
      color: #fff;
      display: flex;
      h3 {
        margin-left: 5%;
      }
      .logoImg {
        height: 70%;
        margin-top: 3%;
        margin-left: 3%;
      }
    }
    .btn {
      height: 60%;
      margin-top: 1em;
      margin-left: 1em;
    }
    .userBox {
      position: absolute;
      width: 7%;
      right: 1%;
    }
  }
  /deep/ .el-main {
    padding: 0;
  }
  .content {
    display: flex;
    height: 96.5%;
    .grid {
      width: 85%;
    }
  }
}
</style>
