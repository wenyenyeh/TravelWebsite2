//createRouter: 創建router 實例對象
//createWebHistory:創建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Category from '@/views/Category/index.vue'
import Home from '@/views/Home/index.vue'
import About from '@/views/Layout/about.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //path 和 component 對應位子 
  // path"/"一集路由
  //path '' 內部切換二級路由
  routes: [
    {//首頁
      path:'/',
      component:Layout,
    },{//登錄頁
      path:'/login',
      component:Login
    },{//關於頁
      path:'/about',
      component:About
    },{//產品列表
      path:'/home',
      component: Home,
    },{//單一產品頁面
      path:'/category',
          component: Category
    },

  ]
})

export default router
