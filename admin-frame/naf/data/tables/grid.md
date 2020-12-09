naf-grid  参数定义 （naf-grid为  搜索、 列表、 分页、的集合）
、、、
### search 是否启用搜索 默认启用
:search="true"
、、、
### pagination 是否启用分页  默认启用
:pagination="true"
、、、
### readonly 是否显示操作列 默认启用
:readonly="true"
、、、
### selection 是否显示多选 默认启用
:selection="true"
、、、
### operation 操作栏数组 默认修改删除
operation: [
    { name: 'edit', title: '编辑', icons: 'el-icon-edit' },
    { name: 'delete', title: '删除', icons: 'el-icon-delete' }
]
name: 返回的方法名， title：按钮文字， icons：按钮图标
、、、
### meta 定义表格字段
meta: [
    { name: 'xb', title: '性别', formatter: 'xb', filter: true, width: '100' },
]
name: 字段名， title： 列表标题， formatter： 使用字典得类名， filter：是否使用该字段搜索， width： 该字段列表宽度（默认自适应）
、、、
### data列表展示数据 (类型为数组array)
:data="[]"
、、、
### total分页总条数（类型为数字number）默认为0
:total="100"
、、、


事件定义
### 双击事件 dblclick  默认参数当前双击行数据
dblclick(e) {
    console.log(e)
}
、、、
### 默认修改事件 edit 默认参数当前修改行数据 （事件名可被operation覆盖）
edit(e) {
    console.log(e)
}
、、、
### 默认删除事件 delete 默认参数当前删除行数据 （事件名可被operation覆盖）
delete(e) {
    console.log(e)
}
、、、
### query 查询事件 当页码条数改变时会调用该事件，当查询条件改变时会调用该事件  参数为{ filter, paging }  filter = 查询条件， paging = 页码/条数
query({ filter, paging }) {
    console.log(filter, paging)
}
、、、