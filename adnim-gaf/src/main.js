import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ant from '@lib/plugins/ant'
import deeptree from '@lib/plugins/data-tree'
import '@lib/style/index.less'
import '@lib/style/style.less'
console.log(ant)
createApp(App)
  .use(store)
  .use(router)
  .use(ant)
  .use(deeptree)
  .mount('#app')
