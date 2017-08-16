import Vue from "vue";
import Router from "vue-router";
import Hello from "@/components/Hello";
import Trips from "@/components/Trips";
import Trip from "@/components/Trip";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Hello",
      component: Hello
    },
    {
      path: "/trips",
      name: "Trips",
      component: Trips
    },
    {
      path: "/trips/:tripsID",
      name: "Trip",
      component: Trip
    }
  ]
});
