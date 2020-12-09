<template>
  <el-submenu :index="index" v-if="item.children && item.children.length > 0">
    <template #title>
      <i :class="item.icons"></i>
      <span @click.prevent="menuClick">{{ item.title }}</span>
    </template>
    <naf-menu-item
      v-for="(item, idx) in item.children"
      :key="idx"
      :index="item.path"
      :item="item"
      @naf-menu-item="$emit('naf-menu-item', $event)"
    >
    </naf-menu-item>
  </el-submenu>
  <el-menu-item :index="index" @click="$emit('naf-menu-item', item)" v-else>
    <i :class="item.icons"></i>
    <template #title>
      <span v-if="item.title.length < 9">{{ item.title }}</span>
      <el-tooltip v-else :content="item.title" placement="top" effect="light">
        <span>{{ title.substr(0, 9) + "..." }}</span>
      </el-tooltip>
    </template>
  </el-menu-item>
</template>

<script>
export default {
  name: "naf-menu-item",
  props: {
    item: Object,
    index: String
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="less" scoped></style>
