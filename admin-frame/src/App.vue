<template>
  <!-- 国际化 语言包配置 -->
  <a-config-provider :locale="zhcn">
    <!-- 路由 -->
    <router-view />
  </a-config-provider>
</template>
<script>
import zhcn from 'ant-design-vue/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
export default {
  components: {},
  data () {
    return {
      zhcn
    }
  },
  methods: {}
}
</script>
<style lang="less"></style>
