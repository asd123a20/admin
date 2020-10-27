// 面包屑 获取所有菜单 根据当前路由 轮询出当前菜单项
<template>
  <div>
    <a-breadcrumb>
      <a-breadcrumb-item>首页</a-breadcrumb-item>
       <a-breadcrumb-item v-for="(item, index) in catalog" :key="index">{{ item && item.title }}</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>
<script>
// 获取当前菜单项
const DeepFind = (menus, path) => {
  for (const k in menus) {
    const item = menus[k]
    // 如果路由匹配直接返回当前数据
    if (path.endsWith(item.path) && menus[k].parent) return menus[k]
    // 如果子菜单存在传入子菜单继续匹配
    if (item.children) {
      const res = DeepFind(item.children, path)
      if (res && res.parent) return res
    }
  }
  return false
}
export default {
  data () {
    return {}
  },
  computed: {
    catalog () {
      const { app = '', path = '/' } = this.$route.params
      const paths = `/${app}/${path}`
      // 调用获取菜单传入所有菜单 （菜单时经过处理的，存在子菜单的）
      const menu = DeepFind(this.menuItems, paths)
      const data = []
      if (menu && menu.parent) {
        data.push(menu.parent, menu)
      }
      return data
    },
    menuItems () {
      return this.$store.getters.menuItems
    }
  }
}
</script>
