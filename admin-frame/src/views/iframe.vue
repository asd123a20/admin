<template>
  <iframe :src="routerPath" ref="iframe" scrolling="no" frameborder="0"></iframe>
</template>

<script>
import urljoin from 'url-join'
export default {
  name: 'home',
  data () {
    return {}
  },
  computed: {
    routerPath () {
      const { app = '', path = '/' } = this.$route.params
      return urljoin(process.env.VUE_APP_ROOT_URL, `/${app}/${path}`)
    }
  }
}
</script>

<style lang="less" scoped>
iframe {
  width: 100%;
  height: 97%;
}
</style>
