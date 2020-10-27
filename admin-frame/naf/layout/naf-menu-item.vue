// 多级菜单循环组件， 传入当前存在子级的数据，轮询子级，如果还有子级就子级调用自己组件，如果没有就显示最后按钮
<template>
  <a-sub-menu :key="$props.menuInfo.id">
    <template v-slot:title>
      <span class="anticon">
        <i :class="`naf-icons naf-icon-${$props.menuInfo.icon}`" v-if="$props.menuInfo.icon"></i>
      </span>
      <span>{{ menuInfo.title }}</span>
    </template>
    <template v-for="item in $props.menuInfo.children">
      <a-menu-item v-if="!item.children" :key="item.id" @click="menuClick(item)">
        <span class="anticon">
          <i :class="`naf-icons naf-icon-${item.icon}`" v-if="item.icon"></i>
        </span>
        <span>{{ item.title }}</span>
      </a-menu-item>
      <naf-menu-item v-else :key="item.id" :menu-info="item" @navbtn="$emit('navbtn', $event)"></naf-menu-item>
    </template>
  </a-sub-menu>
</template>
<script>
// 需要对组件命名name 自调用没有name报错
export default {
  name: 'naf-menu-item',
  props: {
    menuInfo: null,
    prefix: null
  },
  methods: {
    menuClick (e) {
      const to = `${this.prefix}/${e.model}${e.path}`
      this.$router.push(to)
    }
  }
}
</script>
