import { createRouter, createWebHistory } from 'vue-router'
import ShoeShop from '../views/ShoeShop.vue'
import Success from '../views/ShopSite.vue'
const routes = [
  {
    path: '/',
    name: 'ShoeShop',
    component: ShoeShop
  },
  {
    path: '/shop',
    name: 'ShopSite',
    component: Success,
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router