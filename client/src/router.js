import { createRouter, createWebHistory } from 'vue-router';

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import('./components/Log.vue'),
},
  {
    path: "/login",
    name: "Login",
    component: () => import('./views/Login.vue'),
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import('./views/Register.vue'),
  },
  {
    path: "/Blog",
    name: "Blog",
    component: () => import('./views/Blog.vue'),
  },
  {
    path: "/WineList",
    name: "WineList",
    component: () => import('./views/WineList.vue'),
  },
  {
    path: "/Print/:id",
    name: "Print",
    component: () => import('./components/Unique.vue/'),
  },
  {
    path: "/Admin",
    name: "Admin",
    component: () => import('./views/Admin.vue'),
  },
  {
    path: "/Order",
    name: "OrderSheet",
    component: () => import('./components/Cart.vue'),
  },
  {
  path: "/AddWine",
  name: "add",
  component: () => import('./components/Add.vue'),
},
{
  path: "/update/:id",
  name: "Register",
  component: () => import('./components/Update.vue'),
},
  {
    path: "/404",
    name: "NotFound",
    component: () => import('./components/NotFound.vue'),
  },


];


export default createRouter({
  history: createWebHistory(),
  routes,
});