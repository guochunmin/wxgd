import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      component: (resolve)=>{
      	require(['views/index'],resolve);
      }
    }
  ]
})
export default router;