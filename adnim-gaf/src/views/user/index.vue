<template>
  <div class="wrapper">
    <naf-table :operation="operation" :data="data" :columns="columns"></naf-table>
    <naf-pagination :total="100"></naf-pagination>
  </div>
</template>

<script>
import nafTable from '@naf/form/tables/naf-table'
import nafPagination from '@naf/form/tables/naf-pagination'
const data = []
for (let i = 0; i < 10; i++) {
  data.push({
    name: 1,
    age: 32,
    address: `London Park no. ${i}`,
    key: i
  })
}
export default {
  name: 'user',
  components: {
    nafTable,
    nafPagination
  },
  data () {
    return {
      data,
      columns: [
        {
          title: '名称',
          dataIndex: 'name',
          edit: false,
          slots: { customRender: 'name' },
          dic: 'name'
        },
        {
          title: '年龄',
          dataIndex: 'age',
          slots: { customRender: 'age' }
        },
        {
          title: 'address',
          dataIndex: 'address',
          slots: { customRender: 'address' }
        },
        {
          title: '操作',
          width: '10%',
          dataIndex: 'operation',
          slots: { customRender: 'operation' }
        }
      ],
      operation: [
        { title: '修改1', name: 'elit' },
        { title: '删除1', name: 'elit2' }
      ]
    }
  }
}
</script>

<style lang="less" scoped></style>
