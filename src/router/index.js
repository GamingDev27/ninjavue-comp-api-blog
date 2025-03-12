import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostDetailsView from '../views/PostDetailsView.vue'
import CreateView from '../views/CreateView.vue'
import TagView from '../views/TagView.vue'
import RealTimeView from '../views/RealTimeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/post/:id',
      name: 'post-details',
      component: PostDetailsView,
      props: true,
    },
    {
      path: '/post/create',
      name: 'post-create',
      component: CreateView,
    },
    {
      path: '/tags/:tag',
      name: 'tag-filter',
      component: TagView,
      props: true,
    },
    {
      path: '/realtime',
      name: 'realtime',
      component: RealTimeView
    }
  ],
})

export default router
