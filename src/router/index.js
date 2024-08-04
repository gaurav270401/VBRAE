import { createRouter, createWebHistory } from 'vue-router'
import NavBar from '@/common/components/NavBar.vue'
import FooterPage from '@/common/components/Footer.vue'
import MainPageView from '@/MainPage/views/MainPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
	  components: {
			default: MainPageView,  
			navbar: NavBar,
			footer: FooterPage
		}
    },
    {
      path: '/about',
      name: 'about'
      //   component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
