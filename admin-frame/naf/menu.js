export const menus = [
  {
    title: '系统管理',
    id: '0',
    icons: 'el-icon-s-tools',
    parentId: '',
    path: '',
    module: '@gaf'
  },
  {
    title: '用户管理',
    id: '1',
    icons: 'el-icon-user-solid',
    parentId: '',
    path: '/wokes/user',
    module: '@wokes'
  },
  {
    title: '系统用户',
    id: '0-1',
    icons: 'el-icon-s-custom',
    parentId: '0',
    path: '/gaf/user',
    module: '@gaf'
  },
  {
    title: '系统角色',
    id: '0-2',
    icons: 'el-icon-s-custom',
    parentId: '0',
    path: '/gaf/role',
    module: '@gaf'
  },
  {
    title: '菜单管理',
    id: '0-3',
    icons: 'el-icon-menu',
    parentId: '0',
    path: '/gaf/menu',
    module: '@gaf'
  }
]
