import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/Login'
import useInstall from '../components/use_install'
import invitePayback from '../components/invite_payback'
import getInvite from '../components/get_invite'
import shopBuy from '../components/shop_buy'
import user from '../components/user'
import management from '../components/management'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '/',
      component: user
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/use_install',
      name: 'useInstall',
      component: useInstall
    },
    {
      path: '/invite_payback',
      name: 'invitePayback',
      component: invitePayback
    },
    {
      path: '/get_invite',
      name: 'getInvite',
      component: getInvite
    },
    {
      path: '/shop_buy',
      name: 'shopBuy',
      component: shopBuy
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/management',
      name: 'management',
      component: management
    }
  ]
})
