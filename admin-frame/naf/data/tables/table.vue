<template>
  <el-table
    size="mini"
    :data="datas"
    class="table"
    @selection-change="handleSelectionChange"
    @row-dblclick="$emit('oper', { event: 'dblclick', data: $event })"
    border
  >
    <el-table-column v-if="selection" type="selection" width="55">
    </el-table-column>
    <el-table-column
      v-for="(item, index) in meta"
      :key="index"
      :prop="item.name"
      :label="item.title"
      :width="item.width || ''"
      show-overflow-tooltip
    >
    </el-table-column>
    <el-table-column label="操作" v-if="readonly">
      <template #default="scope">
        <el-button
          size="mini"
          type="text"
          v-for="(item, index) in operation"
          :key="index"
          @click="$emit('oper', { event: item.name, data: scope.row })"
        >
          <i v-if="item.icons" :class="item.icons"></i>
          {{ item.title }}
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  components: {},
  props: {
    data: { type: Array, defalut: [] },
    meta: Array,
    operation: Array,
    selection: Boolean,
    readonly: Boolean
  },
  computed: {
    datas() {
      const formatter = this.meta.filter(p => p.formatter);
      const data = [...this.data];
      formatter.filter(i => {
        data.map(p => {
          const dict = this.$dict(i.name);
          p[i.name] =
            dict.filter(z => p[i.name] === z.value)[0].title || p[i.name];
        });
      });
      return data;
    }
  },
  data() {
    return {};
  },
  methods: {
    handleSelectionChange(val) {
      this.$emit("selection", val);
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.table {
  width: 98%;
  margin: 0 auto;
  max-height: 60vh;
  overflow-y: auto;
}
</style>
