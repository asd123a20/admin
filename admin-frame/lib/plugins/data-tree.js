// 组织树状数据结构
export default {
  install: (app, options) => {
    app.config.globalProperties.$deeptree = (menuArray) => {
      // 制作数据id 与 数据pid
      const items = (menuArray || []).map(p => ({ ...p, id: p._id, pid: p.parentid }))
      // 获取一级菜单
      const root = items.filter(a => !items.some(b => b.id === a.pid))
      // 制作自定义函数 传入参数是当前的1级菜单
      const fetchChildren = item => {
        // console.log(item)
        // 制作子菜单集合  过滤所有菜单 判断过滤菜单id是否与一级菜单pid是否相等  如果相等就把当前的的子菜单放进去在判断一回 查询是否有三级菜单  以此类推
        const children = items.filter(p => p.pid === item.id).map(p => fetchChildren({ ...p, parent: item }))
        // 如果子菜单存在或子菜单长度大于0 返回当前1级菜单加子菜单
        if (children && children.length > 0) return { ...item, children }
        // 没有子菜单返回当前1级菜单
        return { ...item }
      }
      // 调用自定义函数 传入一级菜单本身
      return root.map(p => fetchChildren(p))
    }
  }
}
