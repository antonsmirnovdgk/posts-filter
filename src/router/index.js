import { createRouter, createMemoryHistory } from 'vue-router'
import listOfPosts from '../views/vlistOfPosts'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: listOfPosts
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
