import Vue from 'vue'
import Router from 'vue-router'
import Greet from '@/components/Greet'
import Second from '@/components/Greet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Greet',
      component: Greet   
     }
  ]
})
