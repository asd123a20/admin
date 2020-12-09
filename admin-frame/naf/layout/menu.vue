<template>
  <el-menu
    :default-active="active"
    v-bind="config"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
  >
    <naf-menu-item
      @naf-menu-item="menuItem"
      v-for="(item, index) in menuItems"
      :key="index"
      :item="item"
      :index="item.path"
    >
    </naf-menu-item>
  </el-menu>
</template>

<script>
import nafMenuItem from "./menu-item";
const config = {
  backgroundColor: process.env.VUE_APP_MENU_BACKGROUNDCOLOR,
  textColor: process.env.VUE_APP_MENU_TEXTCOLOR,
  activeTextColor: process.env.VUE_APP_MENU_ACTIVETEXTCOLOR
};
export default {
  props: {
    // 菜单折叠
    isCollapse: { type: Boolean, default: false },
    // 树形结构菜单数据
    menuItems: Array
  },
  components: {
    nafMenuItem
  },
  computed: {
    // 按钮选中状态计算树形
    active() {
      // 如果是首页返回空
      if (this.$route.path === "/frame") return "";
      // 定义当前选中的菜单
      let active = "";
      // 自定义函数  参数是当前路由与需要过滤的数组
      const item = (path, items) => {
        // 数组过滤
        items.filter(p => {
          // 如果数组地址等于传入地址 给当前项赋值
          if (p.path === path) active = p.path;
          // 如果存在子级数组 递归调用
          if (p.children) item(path, p.children);
        });
      };
      // 当前路由
      const path = `/${this.$route.params.app}/${this.$route.params.path}`;
      // 调用自定义函数
      item(path, this.menuItems);
      return active;
    }
  },
  data() {
    return {
      config
    };
  },
  methods: {
    // 菜单点击跳转地址
    menuItem(e) {
      const url = `/frame/${e.module}${e.path}`;
      if (url === this.$route.path) return;
      this.$router.push(url);
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo {
  height: 100%;
}
</style>
