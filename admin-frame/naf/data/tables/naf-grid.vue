<template>
  <div class="container">
    <naf-search @handlefilter="handleFilter" :filterList="filterList" v-if="search"></naf-search>
    <naf-table :meta="meta" :selection="selection" :operation="operation" :data="data" :readonly="readonly" @oper="handleOper"></naf-table>
    <naf-pagination @handlechange="handleChange" :total="total" v-if="pagination"></naf-pagination>
  </div>
</template>

<script>
import nafSearch from '@naf/data/tables/search'
import nafTable from '@naf/data/tables/table'
import nafPagination from '@naf/data/tables/pagination '
export default {
  components: {
    nafSearch,
    nafTable,
    nafPagination
  },
  props: {
    // 是否启用搜索
    search: { type: Boolean, default: true },
    // 是否启用分页
    pagination: { type: Boolean, default: true },
    // 是否显示操作列
    readonly: { type: Boolean, default: true },
    // 是否显示多选
    selection: { type: Boolean, default: true },
    // 操作栏数组
    operation: {
      default: () => [
        { name: 'edit', title: '编辑', icons: 'el-icon-edit' },
        { name: 'delete', title: '删除', icons: 'el-icon-delete' }
      ]
    },
    // 表格字段参数
    meta: { type: Array, required: true },
    // 数据源
    data: Array,
    // 总条数
    total: { type: Number, default: 0 }
  },
  data () {
    return {
      paging: {},
      filter: {}
    }
  },
  computed: {
    filterList () {
      return this.meta.filter(p => (p.filter && p.filter === true))
    }
  },
  methods: {
    handleChange ({ page, size }) {
      this.paging = { page, size }
      this.query()
    },
    handleFilter (filter) {
      console.log(filter)
      this.filter = filter
      this.query()
    },
    query () {
      this.$emit('query', { filter: this.filter, paging: this.paging })
    },
    handleOper ({ event, data }) {
      this.$emit(event, data)
    }
  },
  mounted () {}
}
</script>

<style lang="less" scoped></style>
