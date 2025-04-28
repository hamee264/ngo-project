// src/router/index.js

import { createRouter, createWebHashHistory } from 'vue-router'

import HeroPage from '../components/HeroPage.vue'
import About from '../components/About.vue'
import Things from '../components/Things.vue'
import Get from '../components/Get.vue'
import Resources from '../components/Resources.vue'
import Donate from '../components/Donate.vue'

const routes = [
  { path: '/', name: 'HeroPage', component: HeroPage },
  { path: '/about', name: 'About', component: About },
  { path: '/what-we-do', name: 'Things', component: Things },
  { path: '/get-involved', name: 'Get', component: Get },
  { path: '/resources', name: 'Resources', component: Resources },
  { path: '/support', name: 'Donate', component: Donate },
]

const router = createRouter({
  history: createWebHashHistory(), // <-- This is HASH mode
  routes,
})

export default router
