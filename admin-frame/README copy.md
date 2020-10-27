# admin-frame
tables：
    是否启用修改删除 
        operation： null (默认使用表格上修改删除), 
        operation: false （不使用修改删除），
        operation： [ （如果等于数组operation是自定义按钮， name:返回事件名， title：按钮显示名 ）
            { title: '修改', name: 'elit' },
            { title: '删除', name: 'delete' },
        ]
    如需使用修改删除须在字段定义时数组内添加操作栏
    {
        title: '操作',
        width: '10%',
        dataIndex: 'operation',
        slots: { customRender: 'operation' }
    }

    数据总数： total { type: Number }
    数据格式： [
        {
            name: '姓名',
            key： '1',（key为必须字段）
        }
    ]
    表格显示字段定义 
    [
        {
            
            title: 'name （表格标题）',
            dataIndex: 'name （需要显示的字段）',
            edit: false （是否可以修改）,
            slots: { customRender: 'name' }, （该字段可在表格上修改时 必要）
            filter: true,（该字段是否可以搜索）
            dic: 'name'，（使用的字典，字典名称）
        }
    ]
