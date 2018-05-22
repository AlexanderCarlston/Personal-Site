import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage.vue'
import AboutMe from '@/components/AboutMe.vue'
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
    }
  ]
})
