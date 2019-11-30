import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/home',
  name: 'home',
  component: Home
}, {
  path: '/about',
  name: 'about',
  component: About
}, {
  path: '/contact',
  name: 'contact',
  component: Contact
}, {
  path: '*',
  name: 'any',
  component: Home
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
