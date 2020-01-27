import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/components/pages/Home.vue")
  },
  {
    path: "/scheduledetail",
    name: "home",
    component: () => import("@/components/pages/ScheduleDetail.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  // if (!this.$liff.isLoggedIn()) {
  //   this.$liff.login();
  // }
  console.log("router");
  next();
});

export default router;
