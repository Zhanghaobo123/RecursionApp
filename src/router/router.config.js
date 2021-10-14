/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [{
  path: '/',
  component: () => import('@/views/layouts/index'),
  redirect: '/home',
  meta: {
    title: '首页',
    keepAlive: false
  },
  children: [{
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/index'),
      meta: {
        title: '首页',
        keepAlive: false
      }
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component: () => import('@/views/userCenter/index'),
      meta: {
        title: '个人中心',
        keepAlive: false
      }
    }
  ]
}]
