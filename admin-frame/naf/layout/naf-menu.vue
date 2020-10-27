// 菜单循环第一层次 含有版本号 如版本号配置不存在则会隐藏
<template>
  <div :style="{ width: menuWidth, height: menuHeight }">
    <a-menu mode="inline" theme="dark" style="height: 100%">
      <template v-for="item in menus" :style="height = (vesion !== null && !collapsed) ? '95%' : '100%'">
        <!-- 如果不存在子菜单显示 -->
        <a-menu-item @click="navBtn(item)" v-if="!item.children" :key="item.id">
          <span class="anticon">
            <i :class="`naf-icons naf-icon-${item.icon}`" v-if="item.icon"></i>
          </span>
          <span>{{ item.title }}</span>
        </a-menu-item>
         <!-- 如果存在子菜单显示 -->
        <naf-menu-item :prefix="prefix" v-else :key="item.id" :menu-info="item"></naf-menu-item>
      </template>
      <div class="vesion" v-if="vesion !== null && !collapsed">版本号：{{ vesion }}</div>
    </a-menu>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import nafMenuItem from './naf-menu-item'
const menuWidth = process.env.VUE_APP_MENU_WIDTH
const menuHeight = process.env.VUE_APP_MENU_HEIGHT
const vesion = process.env.VUE_APP_MENU_VERSION
export default {
  components: {
    nafMenuItem
  },
  props: {
    menuArray: { type: Array },
    collapsed: Boolean,
    prefix: { type: String, default: '' }
  },
  data () {
    return {
      menuWidth,
      menuHeight,
      vesion
    }
  },
  computed: {
    // 菜单自定义计算属性
    menus () {
      const menu = this.$deeptree(this.menuArray)
      return menu
    }
  },
  mounted () {
    this.menuItems(this.menus)
  },
  methods: {
    ...mapMutations(['menuItems']),
    navBtn (e) {
      const to = `${this.prefix}/${e.model}${e.path}`
      console.log(to)
      this.$router.push(to)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../lib/style/style.less';
.ant-menu-dark {
  overflow-y: auto;
}
.vesion {
  position: absolute;
  line-height: 2em;
  bottom: 0;
  left: 0;
  font-size: 1.2em;
  color: #999;
  text-align: center;
  width: 95%;
  font-weight: 600;
  height: 5%;
  background: @menu-colour;
}
</style>
