
import VueRouter from 'vue-router'

import homecomponent from "./components/tabbar/homecomponent.vue"
import shopcarcomponent from "./components/tabbar/shopcarcomponent.vue"
import membercomponent from "./components/tabbar/membercomponent.vue"
import searchcomponent from "./components/tabbar/searchcomponent.vue"


var  router = new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:homecomponent},
    {path:'/shopcar',component:shopcarcomponent},
    {path:'/member',component:membercomponent},
    {path:'/search',component:searchcomponent}
  ] ,
  linkActiveClass:'mui-active'
})

export default router 