const deepTree = {
  install (vue) {
    vue.config.globalProperties.$deepTree = menus => {
      if (!menus || menus.length <= 0) return
      let root = menus.filter(p => p.parentId === '' || p.parentId === null)
      const childrens = (item) => {
        const children = menus.filter(p => item.id === p.parentId).map(p => childrens(p))
        return { ...item, children }
      }
      root = root.map(p => childrens(p))
      return root
    }
  }
}
export default deepTree
