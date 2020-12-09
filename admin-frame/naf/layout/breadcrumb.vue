<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item :to="{ path: '/frame' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item, index) in list" :key="index">
      {{ item.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  props: {
    menuItems: Array
  },
  data() {
    return {
      routers: []
    };
  },
  computed: {
    list() {
      const path = `/${this.$route.params.app}/${this.$route.params.path}`;
      if (path === "/frame") return false;
      const item = this.items(path);
      return item;
    }
  },
  methods: {
    items(path) {
      const menuList = [];
      const nemus = path => {
        this.menuItems.filter(p => {
          if (p.path === path) {
            if (p.parentId !== null && p.parentId !== "") {
              const item = this.menuItems.filter(i => i.id === p.parentId);
              nemus(item[0].path);
            }
            menuList.push(p);
          }
        });
      };
      nemus(path);
      return menuList;
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.breadcrumb {
  line-height: 2em;
  text-indent: 0.5em;
  border-bottom: 1px solid #e6e6e6;
}
</style>
