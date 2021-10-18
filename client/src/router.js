import { createRouter, createWebHistory } from 'vue-router';

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import('./components/Add.vue'),
},
  {
    path: "/register",
    name: "register",
    component: () => import('./views/Register.vue'),
  }, {
  path: "/AddWine",
  name: "add",
  component: () => import('./components/Add.vue'),
},
];


export default createRouter({
  history: createWebHistory(),
  routes,
});