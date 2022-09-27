import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/views/QuestionnairePage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/1',
  },
  {
    path: '/:page',
    name: 'main',
    component: MainPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
