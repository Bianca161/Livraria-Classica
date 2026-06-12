import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/components/layout/HomeView.vue';
import TeamView from '@/components/layout/TeamView.vue';
import BookDetailView from '@/components/layout/BookDetailView.vue';
import CartPanel from '@/components/cart/CartPanel.vue';
import ProductList from '@/components/products/ProductList.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/equipe',
    name: 'Team',
    component: TeamView,
  },
  {
    path: '/livro/:id',
    name: 'book-detail',
    component: BookDetailView,
  },
  {
    path: '/carrinho',
    name: 'Cart',
    component: ProductList,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
