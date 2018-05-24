import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage.vue'
import AboutMe from '@/components/AboutMe.vue'
import CurrentTech from '@/components/CurrentTech.vue'
import MyWork from '@/components/MyWork.vue'
import ContactMe from '@/components/ContactMe.vue'
import Loading from '@/components/Loading.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/AboutMe',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/CurrentTech',
      name: 'CurrentTech',
      component: CurrentTech
  },
    {
      path: '/MyWork',
      name: 'MyWork',
      component: MyWork
  },
    {
    path: '/ContactMe',
    name: 'ContactMe',
    component: ContactMe
  },
  {
    path: '/Loading',
    name: 'Loading',
    component: Loading
  }
]
})
