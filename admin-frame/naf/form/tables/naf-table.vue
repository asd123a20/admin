<template>
  <a-table :pagination="false" :columns="columns" :data-source="showData" :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }" bordered>
    <!-- 参数有 text, record, index  -->
    <template v-for="col in edits" v-slot:[col]="{ text, record }" :key="col">
      <div>
        <a-input
          v-if="record.editable"
          style="margin: -5px 0"
          :value="text"
          @change="e => handleChange(e.target.value, record.key, col)"
        />
        <template v-else>
          {{ text }}
        </template>
      </div>
    </template>
    <template v-if="operation !== false" v-slot:operation="{ record }">
      <div v-if="operation == null" class="editable-row-operations">
        <span v-if="record.editable">
          <a @click="save(record.key)">保存</a>
          <a @click="cancel(record.key)">取消</a>
        </span>
        <span v-else>
          <a v-bind="editingKey !== '' ? { disabled: 'disabled' } : {}" @click="edit(record.key)">
            修改
          </a>
          <a-popconfirm
            title="确认删除该条数据吗？"
            ok-text="确认" cancel-text="取消"
            @confirm="onDelete(record.key)"
          >
            <a>删除</a>
          </a-popconfirm>
        </span>
      </div>
      <div  v-else class="editable-row-operations">
        <span>
          <a v-for="(item, index) in operation" :key="index" @click="$emit(item.name, record)">{{ item.title }}</a>
        </span>
      </div>
    </template>
  </a-table>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: [
    // 数据
    'data',
    // 修改删除
    'operation',
    // 字段定义
    'columns'
  ],
  computed: {
    ...mapState(['dic']),
    edits () {
      const edit = []
      this.columns.filter(item => {
        if (item.edit !== false) edit.push(item.dataIndex)
      })
      return edit
    },
    showData () {
      this.columns.filter(item => {
        if (item.dic && this.dic) {
          this.data.map(p => {
            const value = this.dic[item.dic].filter(i => {
              if (Object.keys(i)[0] === String(p[item.dataIndex])) {
                return Object.values(i)[0]
              }
            })
            p[item.dataIndex] = Object.values(...value)[0]
          })
        }
      })
      return this.data
    }
  },
  data () {
    this.cacheData = this.data.map(item => ({ ...item }))
    return {
      editingKey: '',
      // 多选字段
      selectedRowKeys: []
    }
  },
  methods: {
    // 输入框改变
    handleChange (value, key, column) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target[column] = value
      }
    },
    // 过滤出当前数据
    filter (key) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      return target
    },
    // 修改
    edit (key) {
      const target = this.filter(key)
      this.editingKey = key
      if (target) {
        target.editable = true
      }
    },
    // 保存
    save (key) {
      const newCacheData = [...this.cacheData]
      const target = this.filter(key)
      const targetCache = newCacheData.filter(item => key === item.key)[0]
      if (target && targetCache) {
        delete target.editable
        this.$emit('save', target)
      }
      this.editingKey = ''
    },
    // 取消
    cancel (key) {
      const target = this.filter(key)
      this.editingKey = ''
      if (target) {
        Object.assign(target, this.cacheData.filter(item => key === item.key)[0])
        delete target.editable
      }
    },
    // 多选操作
    onSelectChange (selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys)
      this.selectedRowKeys = selectedRowKeys
    },
    // 删除
    onDelete (key) {
      const target = this.filter(key)
      console.log(target)
      this.$emit('delete', target)
    }
  }
}
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
