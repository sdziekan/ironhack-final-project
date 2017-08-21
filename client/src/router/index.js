import Vue from "vue";
import Router from "vue-router";
import Hello from "@/components/Hello";
import Trips from "@/components/Trips";
import Trip from "@/components/Trip";
import TripMap from "@/components/TripMap";
import TripList from "@/components/TripList";
import TripCalendar from "@/components/TripCalendar";

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
      path: "/trips/:tripID",
      name: "Trip",
      component: Trip
    },
    {
      path: "/trips/list/:tripID",
      name: "TripList",
      component: TripList
    },
    {
      path: "/trips/map/:tripID",
      name: "TripMap",
      component: TripMap
    },
    {
      path: "/trips/calendar/:tripID",
      name: "TripCalendar",
      component: TripCalendar
    },
  ]
});
