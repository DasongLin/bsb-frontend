import { createRouter, createWebHistory } from 'vue-router'
import ServicesView from '../views/ServicesView.vue'
import PricesView   from '../views/PricesView.vue'
import AboutView    from '../views/AboutView.vue'
import ContactView  from '../views/ContactView.vue'

const routes = [
  { path: '/',        name: 'Services', component: ServicesView },
  { path: '/prices',  name: 'Prices',   component: PricesView },
  { path: '/about',   name: 'About',    component: AboutView },
  { path: '/contact', name: 'Contact',  component: ContactView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
