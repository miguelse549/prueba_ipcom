import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "Principal",
    component: () => import('../components/Card.vue')
  },
  {
    path: "/ligas",
    name: "Ligas",
    component: () =>
      import("../views/Competition.vue"),
  },


  {
    path: "/ligas/:id",
    name: "LigasDetalles",
    component: () =>
      import("../components/Card.vue"),
  },

];

const router = new VueRouter({
  routes,
});

export default router;