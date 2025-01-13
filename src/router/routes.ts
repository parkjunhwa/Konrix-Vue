const dashboardRoutes = [
  {
    path: '',
    name: 'Dashboard',
    meta: { authRequired: true },
    component: () => import('@/components/pages/index.vue'),
  },
]

const pagesRoutes = [
  {
    path: '/pages',
    name: 'Pages',
    meta: { authRequired: true },
    children: [
      {
        path: 'starter',
        name: 'Starter',
        component: () => import('@/components/pages/index.vue'),
      },
    ],
  },
]


export const authProtectedRoutes = [
  ...dashboardRoutes,
  ...pagesRoutes,
]

export const allRoutes = [...dashboardRoutes, ...pagesRoutes]
