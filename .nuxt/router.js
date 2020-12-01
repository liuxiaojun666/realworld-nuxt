import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _eff5e05a = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _d00bc070 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _678221a0 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _68a70a20 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _3d7a4a8c = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _7c363616 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _4f714d6d = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _eff5e05a,
    children: [{
      path: "",
      component: _d00bc070,
      name: "home"
    }, {
      path: "login",
      component: _678221a0,
      name: "login"
    }, {
      path: "register",
      component: _678221a0,
      name: "register"
    }, {
      path: "profile/:username",
      component: _68a70a20,
      name: "profile"
    }, {
      path: "settings",
      component: _3d7a4a8c,
      name: "settings"
    }, {
      path: "editor",
      component: _7c363616,
      name: "editor"
    }, {
      path: "article/:slug",
      component: _4f714d6d,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
