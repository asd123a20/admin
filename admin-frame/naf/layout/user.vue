<template>
  <div class="container">
    <el-avatar
      class="avatar"
      :size="40"
      :src="circleUrl"
      :icon="circleUrl == null ? 'el-icon-user-solid' : ''"
    >
    </el-avatar>
    <el-dropdown>
      <span class="el-dropdown-link">
        系统管理员
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item>系统任务</el-dropdown-item>
          <el-dropdown-item>系统消息</el-dropdown-item>
          <el-dropdown-item>退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl: null
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  .avatar {
    margin-top: 8%;
    margin-right: 5%;
  }
  .el-dropdown-link {
    color: #fff;
    line-height: 4em;
  }
}
</style>
