// 系统登录用户操作栏
<template>
  <div>
    <a-dropdown class="userdropdown">
      <a class="ant-dropdown-link" @click="e => e.preventDefault()">
      {{ userinfo.name }}
      <i class="naf-icons naf-icon-arrowdown"></i>
      </a>
      <template v-slot:overlay>
        <a-menu>
          <a-menu-item @click="btn('修改密码')">
            <a href="javascript:;">修改密码</a>
          </a-menu-item>
          <a-menu-item @click="btn('系统消息')">
            <a href="javascript:;">系统消息</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">退出登录</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
    <naf-eject :visible="visible" :title="title" @close="visible = false">
      <template v-slot:footer>
        <a-button key="back" @click="$emit('close')">
          取消
        </a-button>
        <a-button key="submit" type="primary" @click="$emit('confirm')">
          确认
        </a-button>
      </template>
      <template v-slot:content>
        <div>
          1234596879846546
        </div>
      </template>
    </naf-eject>
  </div>
</template>
<script>
import nafEject from '../naf-eject'
export default {
  computed: {
    userinfo () {
      return this.$store.getters.userInfo
    }
  },
  components: {
    nafEject
  },
  data () {
    return {
      visible: false,
      title: null
    }
  },
  methods: {
    btn (msg) {
      this.visible = true
      this.title = msg
    }
  }
}
</script>
<style lang="less" scoped>
.userdropdown {
  color: #fff;
  margin: 0 1em;
}
</style>
