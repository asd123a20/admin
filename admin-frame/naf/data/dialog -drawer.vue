<template>
  <div class="ad-aw-box">
    <el-drawer
      v-if="type == 'drawer'"
      :visible.sync="visible"
      :wrapperClosable="modal"
      :close-on-press-escape="escape"
      :show-close="close"
      :before-close="beforeClose"
      :size="wd"
    >
      <template v-slot:title>
        <h1>
          {{ title }}
        </h1>
      </template>
      <slot name="content"></slot>
    </el-drawer>
    <el-dialog
      v-if="type == 'dialog'"
      :title="title"
      :close-on-click-modal="modal"
      :close-on-press-escape="escape"
      :show-close="close"
      :visible.sync="visible"
      :before-close="beforeClose"
      :width="wd"
    >
      <slot name="content"></slot>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    // 标题
    title: String,
    type: { type: String, default: 'dialog' },
    // 是否可以点击遮罩关闭
    modal: { type: Boolean, default: true },
    // 是否可以ESC关闭
    escape: { type: Boolean, default: true },
    // 是否显示退出按钮
    close: { type: Boolean, default: true },
    visible: { type: Boolean, default: true, required: true },
    width: { type: String }
  },
  computed: {
    wd () {
      if (this.width) return this.width
      const width = this.type === 'dialog' ? '40%' : '25%'
      return width
    }
  },
  data () {
    return {}
  },
  methods: {
    beforeClose (done) {
      this.$emit('close')
    }
  },
  mounted () {}
}
</script>

<style lang="less" scoped></style>
