<template>
  <div id="components-pagination-demo-mini">
    <a-pagination size="small" :total="total" show-size-changer show-quick-jumper @change="$emit('pagination', $event)" />
  </div>
</template>
<script>
export default {
  props: {
    total: { type: Number, default: 0 }
  }
}
</script>
<style scoped>
#components-pagination-demo-mini {
  margin-top: 24px;
}
</style>
