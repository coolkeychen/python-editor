import Vue from 'vue'
import Router from 'vue-router'
const seoTitle = 'Python online 编辑器'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/python-editor",
      name: "PythonEditor",
      meta: { 
          name: "最新动态",
          title: seoTitle,
          permission: 1, // 1表示 不需要鉴权
      },
      component: () =>
          import(
              /* webpackChunkName: "news" */ "@/views/news/LatestNews.vue"
          )
    },
  ]
})

export default router