<template>
  <div class="container">
    <naf-grid
      class="grid"
      @edit="edit"
      :data="datas"
      :meta="meta"
      :total="total"
    ></naf-grid>
    <dialog-drawer
      type="drawer"
      :visible="visible"
      title="这是标题"
      @close="visible = false"
    >
      <template v-slot:content>
        <naf-form @save="save" :meta="meta" :rules="rules">
          <template v-slot:field="{ form, item }">
            <el-input v-model="form[item.name]" />
          </template>
        </naf-form>
      </template>
    </dialog-drawer>
  </div>
</template>

<script>
import nafGrid from "@naf/data/tables/naf-grid";
import dialogDrawer from "@naf/data/dialog -drawer";
import nafForm from "@naf/data/form";
export default {
  components: {
    nafGrid,
    dialogDrawer,
    nafForm
  },
  data() {
    return {
      visible: false,
      total: 100,
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      },
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
        { name: "jgzh", title: "军官证件号", slots: true },
        { name: "yx", title: "邮箱" }
      ],
      datas: [
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
  methods: {
    edit(e) {
      console.log(e);
      this.visible = true;
    },
    save(e) {
      console.log(e);
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped></style>
