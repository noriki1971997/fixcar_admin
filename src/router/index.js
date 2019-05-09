import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/public/Home.vue'
import UserList from '@/components/public/UserList.vue'
import DashBoard from '@/components/DashBoard.vue'
import App from '@/App.vue'
import store from '../store/index.js'


import ShowUserList from '@/components/public/User-Components/ShowUserList.vue'
import ShowUserInfo from '@/components/public/User-Components/ShowUserInfo.vue'

Vue.use(Router)

let router = new Router({
mode: 'history',
routes: 
  [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashBoard',
      name: 'DashBoard',
      component: DashBoard,
      meta: { 
        requiresAuth: true
      },
       children:
        [{
          path:'userList',
          component: UserList,
          name: 'DashBoard-UserList',
            children:
            [{
              path:'showUserList',
              component: ShowUserList,
              name: 'DashBoard-UserList-ShowUserList',
            },
            {
              path:':userid',
              component: ShowUserInfo,
              name: 'DashBoard-UserList-ShowUserInfo',
              props: true,
            }]
        },
        {
          path:'',
          name: 'DashBoard-Home',
          component: Home
        },]
    },
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['auth/isLoggedIn']) {
      next()
      return
    }
    next('/') 
  } else {
    next() 
  }

})

export default router
  


