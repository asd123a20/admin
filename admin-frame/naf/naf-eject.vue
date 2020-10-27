// 弹窗抽屉切换组件
<template>
  <div>
    <a-drawer
      v-if="type == 'drawer'"
      :title="title"
      :placement="placement"
      :closable="closable"
      :visible="visible"
      :maskClosable="maskClosable"
      :width="drawerWidth"
      :height="(placement == 'top' || placement == 'bottom') ? drawerHeight : null"
      @close="$emit('close')"
    >
      <slot name="content"></slot>
    </a-drawer>
    <a-modal
      v-if="type == 'modal'"
      :visible="visible"
      :title="title"
      :maskClosable="maskClosable"
      :width="modalWidth"
      @cancel="$emit('close')"
      :footer="null"
    >
    {{ modalWidth }}
      <slot name="content"></slot>
      <!-- 如果需要按钮使用插槽添加可自定义 按钮| 事件 -->
      <slot name="footer"></slot>
    </a-modal>
  </div>
</template>
<script>
const modalWidth = process.env.VUE_APP_MODAL_WIDTH
const drawerWidth = process.env.UE_APP_DRAWER_WIDTH
const drawerHeight = process.env.VUE_APP_DRAWER_HEIGHT
export default {
  data () {
    return {
      // 弹窗宽度
      modalWidth,
      // 抽屉宽度
      drawerWidth,
      // 抽屉高度
      drawerHeight
    }
  },
  props: {
    // 显示类型 显示抽屉drawer  显示弹窗modal
    type: { type: String, default: 'modal' },
    // Drawer | modal 是否可见
    visible: { type: Boolean, default: false },
    // 标题
    title: { type: String },
    // 抽屉的方向 'top' | 'right' | 'bottom' | 'left'
    placement: { type: String, defaule: 'right' },
    // 抽屉是否显示右上角的关闭按钮
    closable: { type: Boolean, default: false },
    // 抽屉 | 弹窗  点击蒙层是否允许关闭
    maskClosable: { type: Boolean, default: true }
  },
  methods: {}
}
</script>
