<template>
 <el-pagination
    class="pagination"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="page"
    :page-sizes="[10,20,50,100]"
    :page-size="size"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total">
  </el-pagination>
</template>

<script>
export default {
  props: {
    total: { type: Number, default: 0 }
  },
  data () {
    return {
      page: 0,
      size: 10
    }
  },
  methods: {
    handleSizeChange (val) {
      this.size = val
      this.handleChange()
    },
    handleCurrentChange (val) {
      this.page = val
      this.handleChange()
    },
    handleChange () {
      this.$emit('handlechange', { page: this.page, size: this.size })
    }
  },
  mounted () {}
}
</script>

<style lang="less" scoped>
.pagination {
  margin-left: 1%;
  margin-top: 20px;
}
</style>
