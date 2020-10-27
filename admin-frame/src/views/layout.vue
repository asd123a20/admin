<template>
  <a-layout>
    <!-- 菜单 -->
    <a-layout-sider id="components-layout-demo-top-side-2"  :width="menuWidth" :collapsed="collapsed" :trigger="null" collapsible>
      <!-- logo -->
      <div class="logo">
        <img src="../assets/logo1.svg" class="logoimg" :style="{ width: !collapsed ? '15%' : '50%', 'margin-left':  !collapsed ? '8%' : '25%' }">
        <h1 v-if="!collapsed">信任管理系统</h1>
      </div>
      <!-- 菜单 -->
      <naf-menu :prefix="'/frame'" :collapsed="collapsed" :menuArray="arr"></naf-menu>
    </a-layout-sider>
    <!-- 头部 -->
    <a-layout>
      <a-layout-header class="header">
        <!-- 菜单缩进切换按钮 -->
        <a-button type="primary" @click="() => (collapsed = !collapsed)" class="trigger ">
          <i class="naf-icons" :class="collapsed ? 'naf-icon-unfold' : 'naf-icon-fold'"></i>
        </a-button>
        <naf-user-info class="userinfo"></naf-user-info>
      </a-layout-header>
      <!-- 业务主体 -->
      <a-layout-content>
        <!-- 面包屑 -->
        <naf-brea></naf-brea>
        <router-view />
        <!-- <naf-table :operation="operation" :data="data" :columns="columns"></naf-table> -->
        <!-- <naf-pagination></naf-pagination> -->
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import nafMenu from '@naf/layout/naf-menu'
import nafBrea from '@naf/layout/naf-breadcrumb'
import nafUserInfo from '@naf/layout/naf-user-info'
import { arr } from '@naf/menus'
// import nafTable from '@naf/form/tables/naf-table'
// import nafPagination from '@naf/form/tables/naf-pagination'
const menuWidth = process.env.VUE_APP_MENU_WIDTH
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
  components: {
    nafMenu,
    nafBrea,
    nafUserInfo
    // nafTable
    // nafPagination
  },
  data () {
    return {
      data,
      arr,
      menuWidth,
      collapsed: false,
      columns: [
        {
          title: 'name',
          dataIndex: 'name',
          edit: false,
          slots: { customRender: 'name' },
          dic: 'name'
        },
        {
          title: 'age',
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
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.header {
  padding: 0;
  height: 5vh;
  .trigger {
    float: left;
    cursor: pointer;
    transition: color 0.3s;
    margin-left: 1vw;
    margin-top: 1vh;
    display: block;
  }
  .userinfo {
    float: right;
    line-height: 3em;
  }
}
#components-layout-demo-top-side-2 {
  height: 100vh;
  .logo {
    border-right: 1px solid #fff;
    display: flex;
    .logoimg {
      width: 15%;
      margin-left: 8%;
      display: block;
    }
    h1 {
      color: #fff;
      line-height: 2.5em;
      text-indent: 1em;
    }
  }
}

</style>>
