/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const mapComponentsRouter = {
  path: '/mapComponents',
  component: Layout,
  redirect: '/nested/menu1/menu1-1', // 默认定向
  name: '地图组件',
  meta: {
    title: '地图组件',
    icon: 'nested'
  },
  children: [{
    path: 'menu1',
    component: () =>
      import ('@/views/nested/menu1/index'), // Parent router-view
    name: 'Menu1',
    meta: { title: 'menu1' },
    redirect: '/nested/menu1/menu1-1',
    children: [{
      path: 'menu1-1',
      component: () =>
        import ('@/views/nested/menu1/menu1-1'),
      name: 'Menu1-1',
      meta: { title: 'menu1-1' }
    },
    {
      path: 'menu1-2',
      component: () =>
        import ('@/views/nested/menu1/menu1-2'),
      name: 'Menu1-2',
      redirect: '/nested/menu1/menu1-2/menu1-2-1',
      meta: { title: 'menu1-2' },
      children: [{
        path: 'menu1-2-1',
        component: () =>
          import ('@/views/nested/menu1/menu1-2/menu1-2-1'),
        name: 'Menu1-2-1',
        meta: { title: 'menu1-2-1' }
      },
      {
        path: 'menu1-2-2',
        component: () =>
          import ('@/views/nested/menu1/menu1-2/menu1-2-2'),
        name: 'Menu1-2-2',
        meta: { title: 'menu1-2-2' }
      }
      ]
    },
    {
      path: 'menu1-3',
      component: () =>
        import ('@/views/nested/menu1/menu1-3'),
      name: 'Menu1-3',
      meta: { title: 'menu1-3' }
    }
    ]
  },
  {
    path: 'olMap',
    name: 'olMap',
    component: () =>
      import ('@/views/mapComponents/openlayersMap/index'),
    meta: { title: 'olMap组件' }
  }
  ]
}

export default mapComponentsRouter
