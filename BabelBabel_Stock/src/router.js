import { createRouter, createWebHistory } from "vue-router";

const routes = [{
  path: '/',
  name: 'App',
  component: () => import('./components/App.vue'),
}, {
  path: "/AddWine",
  name: "add",
  component: () => import('./views/AddWine.vue'),
},
];

export default createRouter({
  history: createWebHistory(),
  routes,
});