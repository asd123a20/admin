<template>
  <div class="gafBox">
    <deep-tree ref="deeptree" class="tree" :data="menus"></deep-tree>
    <el-card class="box-card">
      <template #header>
        <div class="clearfix">
          <span>系统用户</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >添加用户</el-button
          >
        </div>
      </template>
      <naf-grid
        ref="datagrid"
        class="grid"
        :data="data"
        :meta="meta"
        :total="total"
      ></naf-grid>
    </el-card>
  </div>
</template>

<script>
import nafGrid from "@naf/data/tables/naf-grid";
import deepTree from "@naf/data/deep-tree";
import { menus } from "@naf/menu";
export default {
  components: {
    nafGrid,
    deepTree
  },
  data() {
    return {
      menus,
      total: 100,
      meta: [
        { name: "name", title: "名字", filter: true },
        { name: "age", title: "年龄", filter: true, width: "100" },
        { name: "sdate", title: "状态", filter: true, formatter: "sdate" },
        {
          name: "xb",
          title: "性别",
          formatter: "xb",
          filter: true,
          width: "100"
        },
        { name: "sfzh", title: "身份证号" },
        { name: "bzkh", title: "保障卡号", filter: true },
        { name: "jgzh", title: "军官证件号" },
        { name: "yx", title: "邮箱" }
      ],
      data: [
        {
          name: "张三",
          age: "24",
          sdate: "1",
          xb: "0",
          sfzh: "220222356877563256",
          bzkh: "",
          jgzh: "",
          yx: "13526545484984@qq.com"
        },
        {
          name: "张三2",
          age: "23",
          sdate: "0",
          xb: "0",
          sfzh: "220222356877563256",
          bzkh: "",
          jgzh: "",
          yx: "13526545484984@qq.com"
        },
        {
          name: "张三",
          age: "24",
          sdate: "1",
          xb: "0",
          sfzh: "220222356877563256",
          bzkh: "",
          jgzh: "",
          yx: "13526545484984@qq.com"
        },
        {
          name: "张三2",
          age: "23",
          sdate: "0",
          xb: "0",
          sfzh: "220222356877563256",
          bzkh: "",
          jgzh: "",
          yx: "13526545484984@qq.com"
        },
        {
          name: "张三",
          age: "24",
          sdate: "1",
          xb: "0",
          sfzh: "220222356877563256",
          bzkh: "",
          jgzh: "",
          yx: "13526545484984@qq.com"
        },
        {
          name: "张三2",
          age: "23",
          sdate: "0",
          xb: "0",
          sfzh: "220222356877563256",
          bzkh: "",
          jgzh: "",
          yx: "13526545484984@qq.com"
        },
        {
          name: "张三",
          age: "24",
          sdate: "1",
          xb: "0",
          sfzh: "220222356877563256",
          bzkh: "",
          jgzh: "",
          yx: "13526545484984@qq.com"
        },
        {
          name: "张三2",
          age: "23",
          sdate: "0",
          xb: "0",
          sfzh: "220222356877563256",
          bzkh: "",
          jgzh: "",
          yx: "13526545484984@qq.com"
        }
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.gafBox {
  width: 100%;
  height: 100%;
  display: flex;
  .box-card {
    width: 100%;
  }
  .tree {
    width: 15%;
  }
}
</style>
