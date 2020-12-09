const dict = {
  install(app) {
    app.config.globalProperties.$dict = function(item) {
      const dict = this.$store.state.dict;
      return dict[item];
    };
  }
};
export default dict;
