import { createRouter, createWebHistory } from 'vue-router';
import { isAuthenticated } from '../services/authService.js';

const router = createRouter({
  history: createWebHistory('/05-vue-router/05-AuthGuard'),
  routes: [
    {
      path: '/',
      alias: '/meetups',
      component: () => import('../views/PageMeetups.vue'),
    },
    {
      path: '/login',
      meta: {
        requireGuest: true,
      },
      component: () => import('../views/PageLogin.vue'),
    },
    {
      path: '/register',
      meta: {
        requireGuest: true,
      },
      component: () => import('../views/PageRegister.vue'),
    },
    {
      path: '/meetups/create',
      meta: {
        requireAuth: true,
      },
      component: () => import('../views/PageCreateMeetup.vue'),
    },
    {
      path: '/meetups/:meetupId(\\d+)/edit',
      meta: {
        requireAuth: true,
      },
      component: () => import('../views/PageEditMeetup.vue'),
    },
  ],
});

router.beforeEach((to, from) => {
  // если пользователь авторизован
  if (to.meta.requireGuest && isAuthenticated()) {
    // со страниц с мета свойством requireGuest должно редиректить на главную страницу
    return {
      path: '/',
    }
  }
  // если пользователь не авторизован
  if (to.meta.requireAuth && !isAuthenticated()) {
    // со страниц с мета свойством requireAuth должно редиректить на страницу авторизации /login
    return {
      path: '/login',
      // сохраняем локацию с параметром from для возврата обратно
      query: { from: to.fullPath },
    }
  }
})

export { router };
