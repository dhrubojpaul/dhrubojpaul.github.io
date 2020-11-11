import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/research', name: 'Research', component: () => import('../views/Research.vue')
  },
  {
    path: '/publications', name: 'Publications', component: () => import('../views/Publications.vue')
  },
  {
    path: '/people', name: 'Publications', component: () => import('../views/People.vue')
  },
  {
    path: '/people/:id/', name: 'People', component: () => import('../views/PeopleBase.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/PeopleHome.vue')
      },
      {
        path: 'publications',
        component: () => import('../views/PeoplePublications.vue')
      },
      {
        path: 'projects',
        component: () => import('../views/PeopleProjects.vue')
      },
      {
        path: 'cv',
        component: () => import('../views/PeopleCV.vue')
      }
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
