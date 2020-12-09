<template>
  <div class="treeContainer">
    <el-input
      size="mini"
      class="filter"
      v-if="treeFilter"
      placeholder="输入关键字进行搜索"
      v-model="filterText"
    >
    </el-input>
    <el-tree
      :data="datas"
      default-expand-all
      :filter-node-method="filterNode"
      :props="defaultProps"
      @node-click="treeClick"
      ref="deeptree"
    >
    </el-tree>
  </div>
</template>

<script>
export default {
  props: {
    // 形成树的扁平化数据  关联方式parentId
    data: { type: Array },
    // 是否启用搜索
    treeFilter: { type: Boolean, default: true }
  },
  data() {
    return {
      filterText: "",
      defaultProps: {
        children: "children",
        label: "title"
      }
    };
  },
  computed: {
    datas() {
      const data = this.$deepTree(this.data);
      return data;
    }
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.title.indexOf(value) !== -1;
    },
    treeClick(data) {
      this.$emit("treeclick", data);
    }
  },
  mounted() {},
  watch: {
    filterText(val) {
      this.$refs.deeptree.filter(val);
    }
  }
};
</script>

<style lang="less" scoped>
.treeContainer {
  width: 15%;
  height: 100%;
  border-right: 1px solid #dadada;
  .filter {
    width: 90%;
    margin: 20px auto;
    display: block;
  }
}
</style>
