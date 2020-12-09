<template>
  <el-form :inline="true" :model="form" class="demo-form-inline" size="mini">
    <el-form-item v-for="(item, index) in simpleFields" :key="index" :label="item.title">
      <el-select class="prepend" v-if="item.formatter" v-model="form[item.name]" :placeholder="item.placeholder || '请选择'">
        <el-option
          v-for="i in $dict(item.formatter)"
          :key="i.value"
          :label="i.title"
          :value="i.value">
        </el-option>
      </el-select>
      <el-input v-else v-model="form[item.name]" :placeholder="item.placeholder || ''"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
      <el-button type="primary" @click="reset">重置</el-button>
      <el-button type="primary" v-if="filterList.length > 4" @click="more = !more">{{ !more ? '更多' : '收起' }}</el-button>
    </el-form-item>
    <slot v-if="more">
      <el-form :inline="true" :model="form" size="mini">
        <el-form-item v-for="(item, index) in moreFields" :key="index" :label="item.title">
          <el-input v-model="form[item.name]" :placeholder="item.placeholder || ''"></el-input>
        </el-form-item>
      </el-form>
    </slot>
  </el-form>
</template>

<script>
export default {
  props: {
    filterList: Array,
    maxFields: { type: Number, default: 4 }
  },
  computed: {
    simpleFields () {
      return this.filterList.slice(0, this.maxFields)
    },
    moreFields () {
      return this.filterList.slice(this.maxFields) || []
    }
  },
  data () {
    return {
      form: {},
      more: false
    }
  },
  methods: {
    onSubmit () {
      this.$emit('handlefilter', this.form)
    },
    reset () {
      this.form = {}
      this.$emit('handlefilter', this.form)
    }
  },
  mounted () {}
}
</script>

<style lang="less" scoped>
.demo-form-inline {
  margin-left: 1%;
  margin-top: 10px;
}
.prepend.el-select {
  width: 100px;
}
</style>
