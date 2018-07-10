import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'

import KefuList from '@/components/kefu/msgmanage'
import kefuCategory from '@/components/kefu/category'
import reportCategory from '@/components/kefu/report'

import StroreManage from '@/components/store/list'

import UserChangePwd from '@/components/user/changepwd'
import UserProfile from '@/components/user/profile'

import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式

// 懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(['@/components/Login'], resolve)

Vue.use(Router)

let router = new Router({
// mode: 'history',
  routes: [
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/dashboard',
      leaf: true, // 只有一个节点
      menuShow: true,
      iconCls: 'iconfont icon-home', // 图标样式class
      children: [
        {path: '/dashboard', component: Dashboard, name: '首页', menuShow: true}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '客户营销与维护',
      menuShow: true,
      // leaf: true, // 只有一个节点
      iconCls: 'iconfont icon-users', // 图标样式class
      children: [
        {path: '/store/storemanage', component: StroreManage, name: '库存管理', menuShow: true}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '客户开发',
      menuShow: true,
      iconCls: 'iconfont icon-books',
      children: [
        {path: '/kefu/list', component: KefuList, name: '信息管理', menuShow: true},
        {path: '/kefu/category', component: kefuCategory, name: '保险客户开发', menuShow: true},
        {path: '/kefu/report', component: reportCategory, name: '业绩报告', menuShow: true},
      ]
    },
    {
      path: '/',
      component: Home,
      name: '设置',
      menuShow: true,
      iconCls: 'iconfont icon-setting1',
      children: [
        {path: '/user/profile', component: UserProfile, name: '个人信息', menuShow: true},
        {path: '/user/changepwd', component: UserChangePwd, name: '修改密码', menuShow: true}
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start();
  // console.log('to:' + to.path)
  if (to.path.startsWith('/login')) {
    window.localStorage.removeItem('access-user')
    next()
  } else {
    let user = JSON.parse(window.localStorage.getItem('access-user'))
    if (!user) {
      next({path: '/login'})
    } else {
      next()
    }
  }
})

router.afterEach((to,from)=>{
  NProgress.done();
})
export default router
