import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _230793ff = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _1bad79f4 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages_blog_index" */))
const _dbf30e66 = () => interopDefault(import('..\\pages\\practice\\index.vue' /* webpackChunkName: "pages_practice_index" */))
const _35a3e855 = () => interopDefault(import('..\\pages\\practice\\colorfulballs.vue' /* webpackChunkName: "pages_practice_colorfulballs" */))
const _bf824e46 = () => interopDefault(import('..\\pages\\practice\\repeater.vue' /* webpackChunkName: "pages_practice_repeater" */))
const _67220f1a = () => interopDefault(import('..\\pages\\practice\\tree.vue' /* webpackChunkName: "pages_practice_tree" */))
const _3f1cc8ef = () => interopDefault(import('..\\pages\\practice\\wowToken.vue' /* webpackChunkName: "pages_practice_wowToken" */))
const _27184eee = () => interopDefault(import('..\\pages\\blog\\_id.vue' /* webpackChunkName: "pages_blog__id" */))
const _35825de8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _230793ff,
    name: "about"
  }, {
    path: "/blog",
    component: _1bad79f4,
    name: "blog"
  }, {
    path: "/practice",
    component: _dbf30e66,
    name: "practice"
  }, {
    path: "/practice/colorfulballs",
    component: _35a3e855,
    name: "practice-colorfulballs"
  }, {
    path: "/practice/repeater",
    component: _bf824e46,
    name: "practice-repeater"
  }, {
    path: "/practice/tree",
    component: _67220f1a,
    name: "practice-tree"
  }, {
    path: "/practice/wowToken",
    component: _3f1cc8ef,
    name: "practice-wowToken"
  }, {
    path: "/blog/:id",
    component: _27184eee,
    name: "blog-id"
  }, {
    path: "/",
    component: _35825de8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
