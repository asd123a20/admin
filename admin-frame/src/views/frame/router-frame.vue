<template>
  <div class="container">
    <el-tabs
      v-if="showTabs"
      v-model="editableTabsValue"
      type="card"
      closable
      @tab-remove="removeTab"
      @tab-click="tabClick"
    >
      <!-- <el-tab-pane label="首页" name="home">
        <home></home>
      </el-tab-pane> -->
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.id"
        :label="item.title"
        :name="item.id"
      >
        <router-view v-if="!$route.params.module && showTabs" />
        <iframe
          v-if="$route.params.module && showTabs"
          id="iframe"
          ref="iframe"
          :src="routerPath"
          scrolling="no"
          frameborder="0"
          :style="{ height: !showTabs ? '90vh' : '85vh' }"
        >
        </iframe>
      </el-tab-pane>
    </el-tabs>
    <router-view v-if="!showTabs && !$route.params.module" />
    <iframe
      v-if="!showTabs && $route.params.module"
      id="iframe"
      ref="iframe"
      :src="routerPath"
      scrolling="no"
      frameborder="0"
      :style="{ height: !showTabs ? '90vh' : '85vh' }"
    >
    </iframe>
  </div>
</template>

<script>
// import home from "./Home";
import { menus } from "@naf/menu";
const showTabs = eval(process.env.VUE_APP_TABS);
const baseUrl = process.env.VUE_APP_ROOT_URL;
export default {
  props: {},
  components: {
    // home
  },
  computed: {
    // 用于切换标签页
    routePath() {
      const path = this.$route.params.module
        ? `/${this.$route.params.app}/${this.$route.params.path}`
        : this.$route.path;
      return path;
    },
    // 用于嵌套frame
    routerPath() {
      const path = `${baseUrl}${this.$route.params.app}/${this.$route.params.path}`;
      return path;
    }
  },
  data() {
    return {
      baseUrl,
      // 是否显示标签页
      showTabs,
      // 默认标签页
      editableTabsValue: "frame",
      // 所有标签页
      editableTabs: [],
      menuItems: menus
    };
  },
  methods: {
    // tabs 移除标签操作
    removeTab(targetName) {
      const tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      // const path = `/${this.$route.params.app}/${this.$route.params.path}`;
      // 如果移除的标签 = 当前显示的标签
      if (activeName === targetName) {
        // 轮询所有标签
        tabs.forEach((tab, index) => {
          // 如果标签名相等
          if (tab.id === targetName) {
            // 设置下一个标签
            const nextTab = tabs[index + 1] || tabs[index - 1];
            // 如果下一个标签存在
            if (nextTab) {
              // 跳转下一个路由
              this.$router.push(`/frame/${nextTab.module}${nextTab.path}`);
              // 标签页显示下一个
              activeName = nextTab.id;
            } else {
              this.$router.push("/frame");
            }
          }
        });
      }
      this.editableTabsValue = activeName;
      // 过滤出剩下的标签页
      this.editableTabs = tabs.filter(tab => tab.id !== targetName);
    },
    // 点击标签页
    tabClick({ props }) {
      const name = props.name;
      // 过滤出当前标签页
      const item = this.editableTabs.filter(tab => tab.id === name);
      const url = `/frame/${item[0].module}${item[0].path}`;
      // 如果当前路由与过滤出的路由相等就返回
      if (url === this.$route.path) return;
      this.$router.push(url);
    }
  },
  mounted() {
    const path = `/${this.$route.params.app}/${this.$route.params.path}`;
    if (this.showTabs) {
      // 完整菜单过滤出当前路由的菜单
      const item = this.menuItems.filter(p => p.path === path);
      // 放到标签页
      this.editableTabs.push(...item);
      // 显示过滤出的标签页
      this.editableTabsValue = item[0].id;
    }
  },
  watch: {
    // 监听计算属性（当前路由）
    routePath(val) {
      if (val) {
        if (val === "/frame") {
          return false;
        }
        // 过滤出当前路由对应的标签页
        const items = this.editableTabs.filter(p => p.path === val);
        // 如果标签页存在
        if (items.length > 0 || val === "/frame") {
          // 否则跳转到路由匹配出的标签页
          this.editableTabsValue = items[0].id;
          return false;
        }
        // 完整菜单过滤出当前路由的菜单
        const item = this.menuItems.filter(p => p.path === val);
        // 放到标签页
        this.editableTabs.push(...item);
        // 显示过滤出的标签页
        this.editableTabsValue = item[0].id;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  /deep/ .el-tabs {
    height: 100%;
  }
  /deep/ .el-tabs__content {
    height: 93%;
    /deep/ .el-tab-pane {
      height: 100%;
    }
  }
}
iframe {
  width: 100%;
}
</style>
