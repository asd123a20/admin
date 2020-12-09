<template>
  <el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px" size="mini">
    <el-form-item v-for="(item, index) in meta" :key="index" :label="item.title" :prop="item.name">
      <slot name="field" v-if="item.slots" v-bind="{ item, form }"></slot>
      <el-input v-if="!item.formatter && !item.slots" v-model="form[item.name]" :placeholder="item.placeholder || `请输入${item.title}`"></el-input>
      <el-select v-if="item.formatter && !item.slots" v-model="form[item.name]" :placeholder="item.placeholder || `请选择${item.title}`">
        <el-option v-for="(i, idx) in $dict(item.formatter)" :key="idx" :label="i.title" :value="i.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  components: {},
  props: {
    rules: Object,
    meta: Array,
    data: Object
  },
  data () {
    return {
      form: {}
    }
  },
  methods: {
    reset () {
      this.form = { ...this.data }
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('save', this.form)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  mounted () {
    this.reset()
  }
}
</script>

<style lang="less" scoped></style>
