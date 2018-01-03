//入口文件
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)


// 引入Header
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)
import 'mint-ui/lib/style.css'
//引入tabbar
// import { Tabbar, TabItem } from 'mint-ui';

// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);
// 导入 MUI 的样式
import './lib/mui/dist/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/dist/css/icons-extra.css'
import router from './router.js'

//引入轮播图
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import App from "./app.vue"
var vm = new Vue({
  el: "#app",
  data: {

  },
  methods: {

  },
  components: {

  },
  render: c => c(App),
  router

})