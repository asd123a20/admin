<template>
  <div class="wrapper">
    <div class="titleWrapper">
      <h2 class="title">{{ productName }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
const productName = process.env.VUE_APP_HOME_TITLEE;
const description = process.env.VUE_APP_HOME_DESCRIPTION;
export default {
  name: "Home",
  data() {
    return {
      productName,
      description
    };
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  height: 100%;
  width: 100%;
  position: relative;
  background-position: center;
  background-repeat: o-repeat;
  background-size: cover;
  background-image: url("~@/assets/home.png");
}
.titleWrapper {
  text-align: center;
  top: 40%;
  width: 100%;
  position: absolute;
  color: #1d87b4;
}
.title {
  font-size: 32px;
  // color: #333;
  letter-spacing: 1.94px;
  line-height: 2em;
  text-align: center;
}
</style>
