import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/', redirect:'/bedYardExamine',meta: {title:"页面title" }},
    {path: '/bedYardExamine',component: () => import(/* webpackChunkName: "about" */ '@views/bedYardExamine/list.vue'),meta: {title:"床位审核" }},
  ]
})

// 全局路由守卫
router.beforeEach((to,path,next)=>{
  document.title = to.meta.title?to.meta.title:"页面title"
  sessionStorage.title = to.meta.title;
  next();
})

export default router;
