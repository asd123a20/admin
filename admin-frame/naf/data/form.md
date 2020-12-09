### rules: 规则，对应字段需要的规则
rules: {
    name: [
        { required: true, message: '请输入活动名称', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ]
}
、、、
### meta：设置标签的名称及字段
meta: [
    字段名         标题          字典（下拉选）     使用插槽
    { name: 'xb', title: '性别', formatter: 'xb', slots: true }
]
、、、
### data需要显示的数据（如对应字段存在值时传入，修改时使用）
data: {
    name: 'xxx'
}
、、、