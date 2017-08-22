webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


const myApi = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
  baseUrl:  true ? '/api' : "http://localhost:3000/api"
});

function getTrip(tripID) {
  return myApi.get("/trips/" + tripID).then(response => {
    return response.data;
  });
};

function getItems(tripID) {
  return myApi.get("/trips/" + tripID + "/items/").then(response => {
    return response.data;
  });
};

function getItem(tripID) {
  return myApi.get("/trips/" + tripID + "/items/" + itemID).then(response => {
    return response.data;
  });
};

function deleteItem(itemID) {
  return myApi.delete("/items/" + itemID).then(response => {
    return response.data;
  }).catch(function (err) {
    return err;
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  getTrip,
  getItem,
  getItems,
  deleteItem
});

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Hello__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Trips__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Trip__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_TripMap__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_TripList__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_TripCalendar__ = __webpack_require__(52);









__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  routes: [{
    path: "/",
    name: "Hello",
    component: __WEBPACK_IMPORTED_MODULE_2__components_Hello__["a" /* default */]
  }, {
    path: "/trips",
    name: "Trips",
    component: __WEBPACK_IMPORTED_MODULE_3__components_Trips__["a" /* default */]
  }, {
    path: "/trips/:tripID",
    name: "Trip",
    component: __WEBPACK_IMPORTED_MODULE_4__components_Trip__["a" /* default */]
  }, {
    path: "/trips/list/:tripID",
    name: "TripList",
    component: __WEBPACK_IMPORTED_MODULE_6__components_TripList__["a" /* default */]
  }, {
    path: "/trips/map/:tripID",
    name: "TripMap",
    component: __WEBPACK_IMPORTED_MODULE_5__components_TripMap__["a" /* default */]
  }, {
    path: "/trips/calendar/:tripID",
    name: "TripCalendar",
    component: __WEBPACK_IMPORTED_MODULE_7__components_TripCalendar__["a" /* default */]
  }]
}));

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_59c95520_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(59);
function injectStyle (ssrContext) {
  __webpack_require__(43)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_59c95520_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app'
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to K Trip Collaborative Trip Planner'
    };
  }
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            message: "TRIP INFORMATION",
            trip: "",
            items: "",
            seen: 'list',
            styles: { height: "150px" }
        };
    },

    created() {

        __WEBPACK_IMPORTED_MODULE_1__api__["a" /* default */].getTrip(this.$route.params.tripID).then(trip => {
            this.trip = trip;
        });

        __WEBPACK_IMPORTED_MODULE_1__api__["a" /* default */].getItems(this.$route.params.tripID).then(items => {
            this.items = items;
        });
    },
    methods: {
        setView(arg) {
            this.seen = arg;
        },

        //fix this 8/22/17
        deleteItemWithIndex(index) {
            let itemID = this.items[index]._id;

            this.items.splice(index, 1); // To update this.items in Vue application

            // To update the information on the backend
            __WEBPACK_IMPORTED_MODULE_1__api__["a" /* default */].deleteItem(itemID).then(response => {
                response.data;
            });
        }
    }
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            message: "TRIP INFORMATION",
            trip: "",
            items: "",
            styles: { height: "150px" }
        };
    },

    created() {

        __WEBPACK_IMPORTED_MODULE_1__api__["a" /* default */].getTrip(this.$route.params.tripID).then(trip => {
            this.trip = trip;
        });

        __WEBPACK_IMPORTED_MODULE_1__api__["a" /* default */].getItems(this.$route.params.tripID).then(items => {
            this.items = items;
        });

        // not sure this is correct
        myApi.get("/trips/" + this.$route.params.tripID + "/items" + this.$route.params.itemID).then(response => {
            this.items = response.data;
        });
    }
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({

    data() {
        return {
            headers: [{ text: 'Name', align: 'left', value: 'name' }, { text: 'Type', value: 'type' }, { text: 'Start Time', value: 'startTime' }, { text: 'End Time', value: 'endTime' }, { text: 'Location', value: 'location' }, { text: 'Cost', value: 'cost' }, { text: 'Website', value: 'url' }, { text: 'Status', value: 'status' }, { text: 'Up Votes', value: 'upVotes' }, { text: 'Down Votes', value: 'downVotes' }],
            items: []
        };
    },
    methods: {
        filter: function (items, groupName) {
            var res = [];
            for (var i = 0; i < items.length; i++) {
                if (items[i].group === groupName) res.push(items[i]);
            }
            return res;
        }
    },
    computed: {
        activityItems: function () {
            return this.items;
        }
    },
    created() {

        __WEBPACK_IMPORTED_MODULE_1__api__["a" /* default */].getTrip(this.$route.params.tripID).then(trip => {
            this.trip = trip;
        });

        __WEBPACK_IMPORTED_MODULE_1__api__["a" /* default */].getItems(this.$route.params.tripID).then(items => {
            this.items = items;
        });
    }
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            message: "TRIP INFORMATION",
            trip: "",
            items: "",
            styles: { height: "150px" }
        };
    },

    created() {

        __WEBPACK_IMPORTED_MODULE_1__api__["a" /* default */].getTrip(this.$route.params.tripID).then(trip => {
            this.trip = trip;
        });

        __WEBPACK_IMPORTED_MODULE_1__api__["a" /* default */].getItems(this.$route.params.tripID).then(items => {
            this.items = items;
        });
    }
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            message: "TRIPS",
            trips: null,
            styles: { height: "150px" }
        };
    },
    created() {
        const myTrips = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
            baseURL: "http://localhost:3000/api/trips"
        });

        function getTrips() {
            return myTrips.get("/").then(response => {
                return response.data;
            });
        }
        getTrips().then(trips => {
            this.trips = trips;
        });
    }
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuetify__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuetify_dist_vuetify_min_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuetify_dist_vuetify_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vuetify_dist_vuetify_min_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_vuetify___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/hiker-on-globe.97edf75.png";

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hello_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_87b09e2c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Hello_vue__ = __webpack_require__(62);
function injectStyle (ssrContext) {
  __webpack_require__(46)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-87b09e2c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hello_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_87b09e2c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Hello_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Trip_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7eca1dbd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Trip_vue__ = __webpack_require__(61);
function injectStyle (ssrContext) {
  __webpack_require__(45)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7eca1dbd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Trip_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7eca1dbd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Trip_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TripCalendar_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_18b1a91b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_TripCalendar_vue__ = __webpack_require__(56);
function injectStyle (ssrContext) {
  __webpack_require__(40)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-18b1a91b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TripCalendar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_18b1a91b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_TripCalendar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TripList_vue__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_270d98fb_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_TripList_vue__ = __webpack_require__(57);
function injectStyle (ssrContext) {
  __webpack_require__(41)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-270d98fb"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TripList_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_270d98fb_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_TripList_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TripMap_vue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_33af2ee2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_TripMap_vue__ = __webpack_require__(58);
function injectStyle (ssrContext) {
  __webpack_require__(42)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-33af2ee2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TripMap_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_33af2ee2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_TripMap_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Trips_vue__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5e253b06_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Trips_vue__ = __webpack_require__(60);
function injectStyle (ssrContext) {
  __webpack_require__(44)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5e253b06"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Trips_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5e253b06_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Trips_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v(_vm._s(_vm.message))]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "tripsList"
  }, [_c('h2', [_vm._v(_vm._s(_vm.trip.name))]), _vm._v(" "), _c('h4', [_vm._v("Description :")]), _vm._v(" "), _c('p', {
    staticClass: "descrip"
  }, [_vm._v(_vm._s(_vm.trip.email))]), _vm._v(" "), _c('p', [_vm._v("\n                " + _vm._s(_vm.trip._id) + "\n            ")]), _vm._v(" "), _c('p', [_vm._v("\n                " + _vm._s(_vm.trip.currency) + "\n            ")]), _vm._v(" "), _c('p', [_vm._v("\n                " + _vm._s(_vm.trip.participants) + "\n            ")])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    attrs: {
      "id": "list-view"
    }
  }, [_c('div', [_c('h3', [_vm._v("Activities")]), _vm._v(" "), _vm._l((_vm.items), function(item, index) {
    return _c('ul', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.group === 'Activities'),
        expression: "item.group === 'Activities' "
      }],
      staticClass: "itemList"
    }, [_c('h2', [_vm._v(_vm._s(item._id))]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.name))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.group))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.type))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.location))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.cost))])]), _vm._v(" "), _c('br'), _vm._v("\n                    Item Name: "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.name),
        expression: "item.name"
      }],
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": (item.name)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          item.name = $event.target.value
        }
      }
    }), _vm._v(" Item Group:\n                    "), _c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.group),
        expression: "item.group"
      }],
      on: {
        "change": function($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
            return o.selected
          }).map(function(o) {
            var val = "_value" in o ? o._value : o.value;
            return val
          });
          item.group = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
        }
      }
    }, [_c('option', [_vm._v("Activity")]), _vm._v(" "), _c('option', [_vm._v("Lodging")]), _vm._v(" "), _c('option', [_vm._v("Transportation")])]), _vm._v("\n                    Type:\n                    "), _c('li', [_c('p', [_vm._v(_vm._s(item.type))])]), _vm._v("\n                    Location: "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.location),
        expression: "item.location"
      }],
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": (item.location)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          item.location = $event.target.value
        }
      }
    }), _vm._v(" Item Cost: "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.cost),
        expression: "item.cost"
      }],
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": (item.cost)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          item.cost = $event.target.value
        }
      }
    }), _vm._v(" "), _c('li', [_c('button', [_vm._v("EDIT")]), _vm._v(" "), _c('button', {
      on: {
        "click": function($event) {
          _vm.items.splice(index, 1)
        }
      }
    }, [_vm._v("DELETE")])])])
  })], 2), _vm._v(" "), _c('div', [_c('h3', [_vm._v("Lodging")]), _vm._v(" "), _vm._l((_vm.items), function(item) {
    return _c('ul', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.group === 'Lodging'),
        expression: "item.group === 'Lodging' "
      }],
      staticClass: "itemList"
    }, [_c('li', [_c('p', [_vm._v(_vm._s(item.name))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.group))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.type))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.location))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.cost))])]), _vm._v(" "), _vm._m(1, true)])
  })], 2), _vm._v(" "), _c('div', [_c('h3', [_vm._v("Transportation")]), _vm._v(" "), _vm._l((_vm.items), function(item) {
    return _c('ul', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.group === 'Transportation'),
        expression: "item.group === 'Transportation' "
      }],
      staticClass: "itemList"
    }, [_c('li', [_c('p', [_vm._v(_vm._s(item.name))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.group))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.type))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.location))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.cost))])]), _vm._v(" "), _vm._m(2, true)])
  })], 2), _vm._v(" "), _c('div', {
    attrs: {
      "id": "map-view"
    }
  }, [_c('h1', [_vm._v("PLACEHOLDER FOR MAPS")]), _vm._v(" "), _c('div', {
    staticClass: "google-map",
    attrs: {
      "id": _vm.mapName
    }
  })]), _vm._v(" "), _vm._m(3)])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "trips-header"
  }, [_c('h2', {
    staticClass: "trip-items-title"
  }, [_vm._v("TRIP ITEMS")]), _vm._v(" "), _c('button', {
    staticClass: "btn-add"
  }, [_vm._v("ADD ITEM")]), _vm._v(" "), _c('button', {
    staticClass: "btn-view btn-list"
  }, [_vm._v("List View")]), _vm._v(" "), _c('button', {
    staticClass: "btn-view"
  }, [_vm._v("Map View")]), _vm._v(" "), _c('button', {
    staticClass: "btn-view"
  }, [_vm._v("Calendar View")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('button', [_vm._v("EDIT")]), _vm._v(" "), _c('button', [_vm._v("DELETE")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('button', [_vm._v("EDIT")]), _vm._v(" "), _c('button', [_vm._v("DELETE")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "calendar-view"
    }
  }, [_c('h1', [_vm._v("PLACEHOLDER FOR CALENDARS")])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h3', [_vm._v("Activities")]), _vm._v(" "), _c('v-data-table', {
    staticClass: "elevation-1",
    attrs: {
      "headers": _vm.headers,
      "items": _vm.filter(_vm.items, 'Activities'),
      "hide-actions": ""
    },
    scopedSlots: _vm._u([{
      key: "items",
      fn: function(props) {
        return [_c('td', [_vm._v(_vm._s(props.item.name))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.type))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.startTime))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.endTime))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.location))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.cost))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.url))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.status))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.upVotes))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.downVotes))])]
      }
    }])
  }), _vm._v(" "), _c('h3', [_vm._v("Lodging")]), _vm._v(" "), _c('v-data-table', {
    staticClass: "elevation-1",
    attrs: {
      "headers": _vm.headers,
      "items": _vm.filter(_vm.items, 'Lodging'),
      "hide-actions": ""
    },
    scopedSlots: _vm._u([{
      key: "items",
      fn: function(props) {
        return [_c('td', [_vm._v(_vm._s(props.item.name))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.type))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.startTime))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.endTime))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.location))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.cost))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.url))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.status))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.upVotes))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.downVotes))])]
      }
    }])
  }), _vm._v(" "), _c('h3', [_vm._v("Transportation")]), _vm._v(" "), _c('v-data-table', {
    staticClass: "elevation-1",
    attrs: {
      "headers": _vm.headers,
      "items": _vm.filter(_vm.items, 'Transportation'),
      "hide-actions": ""
    },
    scopedSlots: _vm._u([{
      key: "items",
      fn: function(props) {
        return [_c('td', [_vm._v(_vm._s(props.item.name))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.type))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.startTime))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.endTime))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.location))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.cost))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.url))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.status))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.upVotes))]), _vm._v(" "), _c('td', {
          staticClass: "text-xs-right"
        }, [_vm._v(_vm._s(props.item.downVotes))])]
      }
    }])
  })], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v(_vm._s(_vm.message))]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "tripsList"
  }, [_c('h2', [_vm._v(_vm._s(_vm.trip.name))]), _vm._v(" "), _c('h4', [_vm._v("Description :")]), _vm._v(" "), _c('p', {
    staticClass: "descrip"
  }, [_vm._v(_vm._s(_vm.trip.email))]), _vm._v(" "), _c('p', [_vm._v("\n                " + _vm._s(_vm.trip._id) + "\n            ")]), _vm._v(" "), _c('p', [_vm._v("\n                " + _vm._s(_vm.trip.currency) + "\n            ")]), _vm._v(" "), _c('p', [_vm._v("\n                " + _vm._s(_vm.trip.participants) + "\n            ")])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    attrs: {
      "id": "list-view"
    }
  }, [_c('div', [_c('h3', [_vm._v("Activities")]), _vm._v(" "), _vm._l((_vm.items), function(item, index) {
    return _c('ul', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.group === 'Activities'),
        expression: "item.group === 'Activities' "
      }],
      staticClass: "itemList"
    }, [_c('h2', [_vm._v(_vm._s(item._id))]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.name))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.group))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.type))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.location))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.cost))])]), _vm._v(" "), _c('br'), _vm._v("\n                    Item Name: "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.name),
        expression: "item.name"
      }],
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": (item.name)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          item.name = $event.target.value
        }
      }
    }), _vm._v(" Item Group:\n                    "), _c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.group),
        expression: "item.group"
      }],
      on: {
        "change": function($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
            return o.selected
          }).map(function(o) {
            var val = "_value" in o ? o._value : o.value;
            return val
          });
          item.group = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
        }
      }
    }, [_c('option', [_vm._v("Activity")]), _vm._v(" "), _c('option', [_vm._v("Lodging")]), _vm._v(" "), _c('option', [_vm._v("Transportation")])]), _vm._v("\n                    Type:\n                    "), _c('li', [_c('p', [_vm._v(_vm._s(item.type))])]), _vm._v("\n                    Location: "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.location),
        expression: "item.location"
      }],
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": (item.location)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          item.location = $event.target.value
        }
      }
    }), _vm._v(" Item Cost: "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.cost),
        expression: "item.cost"
      }],
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": (item.cost)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          item.cost = $event.target.value
        }
      }
    }), _vm._v(" "), _c('li', [_c('button', [_vm._v("EDIT")]), _vm._v(" "), _c('button', {
      on: {
        "click": function($event) {
          _vm.items.splice(index, 1)
        }
      }
    }, [_vm._v("DELETE")])])])
  })], 2), _vm._v(" "), _c('div', [_c('h3', [_vm._v("Lodging")]), _vm._v(" "), _vm._l((_vm.items), function(item) {
    return _c('ul', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.group === 'Lodging'),
        expression: "item.group === 'Lodging' "
      }],
      staticClass: "itemList"
    }, [_c('li', [_c('p', [_vm._v(_vm._s(item.name))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.group))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.type))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.location))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.cost))])]), _vm._v(" "), _vm._m(1, true)])
  })], 2), _vm._v(" "), _c('div', [_c('h3', [_vm._v("Transportation")]), _vm._v(" "), _vm._l((_vm.items), function(item) {
    return _c('ul', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.group === 'Transportation'),
        expression: "item.group === 'Transportation' "
      }],
      staticClass: "itemList"
    }, [_c('li', [_c('p', [_vm._v(_vm._s(item.name))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.group))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.type))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.location))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.cost))])]), _vm._v(" "), _vm._m(2, true)])
  })], 2), _vm._v(" "), _c('div', {
    attrs: {
      "id": "map-view"
    }
  }, [_c('h1', [_vm._v("PLACEHOLDER FOR MAPS")]), _vm._v(" "), _c('div', {
    staticClass: "google-map",
    attrs: {
      "id": _vm.mapName
    }
  })]), _vm._v(" "), _vm._m(3)])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "trips-header"
  }, [_c('h2', {
    staticClass: "trip-items-title"
  }, [_vm._v("TRIP ITEMS")]), _vm._v(" "), _c('button', {
    staticClass: "btn-add"
  }, [_vm._v("ADD ITEM")]), _vm._v(" "), _c('button', {
    staticClass: "btn-view btn-list"
  }, [_vm._v("List View")]), _vm._v(" "), _c('button', {
    staticClass: "btn-view"
  }, [_vm._v("Map View")]), _vm._v(" "), _c('button', {
    staticClass: "btn-view"
  }, [_vm._v("Calendar View")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('button', [_vm._v("EDIT")]), _vm._v(" "), _c('button', [_vm._v("DELETE")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('button', [_vm._v("EDIT")]), _vm._v(" "), _c('button', [_vm._v("DELETE")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "calendar-view"
    }
  }, [_c('h1', [_vm._v("PLACEHOLDER FOR CALENDARS")])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-app', [_c('img', {
    attrs: {
      "src": __webpack_require__(49)
    }
  }), _vm._v(" "), _c('v-container', [_c('router-view')], 1)], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v(_vm._s(_vm.message))]), _vm._v(" "), (_vm.trips) ? _c('section', [_c('div', {}, _vm._l((_vm.trips), function(trip) {
    return _c('ul', {
      staticClass: "tripsList"
    }, [_c('h2', [_vm._v(_vm._s(trip.name))]), _vm._v(" "), _c('h4', [_vm._v("Description :")]), _vm._v(" "), _c('p', {
      staticClass: "descrip"
    }, [_vm._v(_vm._s(trip.email))]), _vm._v(" "), _c('p', [_vm._v("\n                    " + _vm._s(trip._id) + "\n                ")]), _vm._v(" "), _c('p', [_vm._v("\n                    " + _vm._s(trip.currency) + "\n                ")]), _vm._v(" "), _c('p', [_vm._v("\n                    " + _vm._s(trip.participants) + "\n                ")])])
  }))]) : _c('section', [_vm._v("\n        Loading...\n    ")])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v(_vm._s(_vm.message))]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "tripsList"
  }, [_c('h2', [_vm._v(_vm._s(_vm.trip.name))]), _vm._v(" "), _c('h4', [_vm._v("Description :")]), _vm._v(" "), _c('p', {
    staticClass: "descrip"
  }, [_vm._v(_vm._s(_vm.trip.email))]), _vm._v(" "), _c('p', [_vm._v("\n                    " + _vm._s(_vm.trip._id) + "\n                ")]), _vm._v(" "), _c('p', [_vm._v("\n                    " + _vm._s(_vm.trip.currency) + "\n                ")]), _vm._v(" "), _c('p', [_vm._v("\n                    " + _vm._s(_vm.trip.participants) + "\n                ")])]), _vm._v(" "), _c('div', {
    staticClass: "trips-header"
  }, [_c('h2', {
    staticClass: "trip-items-title"
  }, [_vm._v("TRIP ITEMS")]), _vm._v(" "), _c('v-btn', {
    staticClass: "btn-add",
    attrs: {
      "round": "",
      "primary": ""
    },
    on: {
      "click": function($event) {
        _vm.setView('addItemForm')
      }
    }
  }, [_vm._v("ADD ITEM")]), _vm._v(" "), _c('v-btn', {
    staticClass: "btn-view btn-list",
    attrs: {
      "round": "",
      "primary": "",
      "dark": ""
    },
    on: {
      "click": function($event) {
        _vm.setView('list')
      }
    }
  }, [_vm._v("List View")]), _vm._v(" "), _c('v-btn', {
    staticClass: "btn-view",
    attrs: {
      "round": "",
      "primary": ""
    },
    on: {
      "click": function($event) {
        _vm.setView('map')
      }
    }
  }, [_vm._v("Map View")]), _vm._v(" "), _c('v-btn', {
    staticClass: "btn-view",
    attrs: {
      "round": "",
      "primary": ""
    },
    on: {
      "click": function($event) {
        _vm.setView('calendar')
      }
    }
  }, [_vm._v("Calendar View")])], 1), _vm._v(" "), (_vm.seen === 'list') ? _c('div', {
    attrs: {
      "id": "list-view"
    }
  }, [_c('div', [_c('h3', [_vm._v("Activities")]), _vm._v(" "), _vm._l((_vm.items), function(item, index) {
    return _c('ul', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.group === 'Activities'),
        expression: "item.group === 'Activities' "
      }],
      staticClass: "itemList"
    }, [_c('h2', [_vm._v(_vm._s(item._id))]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.name))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.group))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.type))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.location))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.cost))])]), _vm._v(" "), _c('br'), _vm._v("\n                        Item Name: "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.name),
        expression: "item.name"
      }],
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": (item.name)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          item.name = $event.target.value
        }
      }
    }), _vm._v(" Item Group:\n                        "), _c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.group),
        expression: "item.group"
      }],
      on: {
        "change": function($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
            return o.selected
          }).map(function(o) {
            var val = "_value" in o ? o._value : o.value;
            return val
          });
          item.group = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
        }
      }
    }, [_c('option', [_vm._v("Activity")]), _vm._v(" "), _c('option', [_vm._v("Lodging")]), _vm._v(" "), _c('option', [_vm._v("Transportation")])]), _vm._v("\n                        Type:\n                        "), _c('li', [_c('p', [_vm._v(_vm._s(item.type))])]), _vm._v("\n                        Location: "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.location),
        expression: "item.location"
      }],
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": (item.location)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          item.location = $event.target.value
        }
      }
    }), _vm._v(" Item Cost: "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.cost),
        expression: "item.cost"
      }],
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": (item.cost)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          item.cost = $event.target.value
        }
      }
    }), _vm._v(" "), _c('li', [_c('v-btn', [_vm._v("EDIT")]), _vm._v(" "), _c('v-btn', {
      on: {
        "click": function($event) {
          _vm.deleteItemWithIndex(index)
        }
      }
    }, [_vm._v("DELETE")])], 1)])
  })], 2), _vm._v(" "), _c('div', [_c('h3', [_vm._v("Lodging")]), _vm._v(" "), _vm._l((_vm.items), function(item, index) {
    return _c('ul', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.group === 'Lodging'),
        expression: "item.group === 'Lodging' "
      }],
      staticClass: "itemList"
    }, [_c('li', [_c('p', [_vm._v(_vm._s(item.name))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.group))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.type))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.location))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.cost))])]), _vm._v(" "), _c('li', [_c('v-btn', [_vm._v("EDIT")]), _vm._v(" "), _c('v-btn', {
      on: {
        "click": function($event) {
          _vm.deleteItemWithIndex(index)
        }
      }
    }, [_vm._v("DELETE")])], 1)])
  })], 2), _vm._v(" "), _c('div', [_c('h3', [_vm._v("Transportation")]), _vm._v(" "), _vm._l((_vm.items), function(item, index) {
    return _c('ul', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.group === 'Transportation'),
        expression: "item.group === 'Transportation' "
      }],
      staticClass: "itemList"
    }, [_c('li', [_c('p', [_vm._v(_vm._s(item.name))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.group))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.type))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.location))])]), _vm._v(" "), _c('li', [_c('p', [_vm._v(_vm._s(item.cost))])]), _vm._v(" "), _c('li', [_c('v-btn', [_vm._v("EDIT")]), _vm._v(" "), _c('v-btn', {
      on: {
        "click": function($event) {
          _vm.deleteItemWithIndex(index)
        }
      }
    }, [_vm._v("DELETE")])], 1)])
  })], 2)]) : _vm._e(), _vm._v(" "), (_vm.seen === 'map') ? _c('div', {
    attrs: {
      "id": "map-view"
    }
  }, [_c('h1', [_vm._v("PLACEHOLDER FOR MAPS")])]) : _vm._e(), _vm._v(" "), (_vm.seen === 'calendar') ? _c('div', {
    attrs: {
      "id": "calendar-view"
    }
  }, [_c('h1', [_vm._v("PLACEHOLDER FOR CALENDARS")])]) : _vm._e(), _vm._v(" "), (_vm.seen === 'addItemForm') ? _c('div', {
    attrs: {
      "id": "add-item-form"
    }
  }, [_vm._v("\n                c\n            ")]) : _vm._e()]), _vm._v(" "), [_c('v-footer', {
    staticClass: "pa-3",
    attrs: {
      "light": ""
    }
  }, [_c('v-spacer'), _vm._v(" "), _c('div', [_vm._v("© " + _vm._s(new Date().getFullYear()))])], 1)]], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hello"
  }, [_c('h1', [_vm._v(_vm._s(_vm.msg))]), _vm._v(" "), _c('h2', [_vm._v("CREATE A NEW TRIP")]), _vm._v(" "), _c('h3', [_vm._v("It's simple! Just enter a New Trip Name and your Email Address to get started")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "new-trip"
  }, [_c('li', [_vm._v("New Trip Name:\n      "), _c('input', {
    attrs: {
      "type": "text"
    }
  })]), _vm._v(" "), _c('li', [_vm._v("Your Email:\n      "), _c('input', {
    attrs: {
      "type": "text"
    }
  })]), _vm._v(" "), _c('br'), _vm._v(" "), _c('button', {
    staticClass: "btn-trip"
  }, [_vm._v("LET'S PLAN A TRIP")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "lower-bkgrd"
  }, [_c('h2', [_vm._v("The Problems:")]), _vm._v(" "), _c('ul', {
    staticClass: "problems"
  }, [_c('li', [_vm._v("There is no one-stop application for trip planning with friends and family")]), _vm._v(" "), _c('li', [_vm._v("Common trip planning involves communications across emails, shared documents, text messages, custom maps")]), _vm._v(" "), _c('li', [_vm._v("Disorganization, lack of communication, hard to make decisions, hard to coordinate everything")]), _vm._v(" "), _c('li', [_vm._v("You can view your trip plans in a list, a map or a calendar. But not all three at once")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('li', [_c('strong', [_vm._v("Planning can be so stressful. By the time your trips starts, you might not even want to see the people that you are traveling with!")])])]), _vm._v(" "), _c('h2', [_vm._v("Finally there's a Solution:")]), _vm._v(" "), _c('ul', {
    staticClass: "solutions"
  }, [_c('li', [_vm._v("One application to coordinate\n        "), _c('strong', [_vm._v("ALL TRIP PLANNING!")])]), _vm._v(" "), _c('li', [_vm._v("Anyone can add options for\n        "), _c('strong', [_vm._v("activities")]), _vm._v(",\n        "), _c('strong', [_vm._v("lodging")]), _vm._v(" or\n        "), _c('strong', [_vm._v("transportation")])]), _vm._v(" "), _c('li', [_vm._v("Everyone can upvote or downvote each option and write comments about what they think")]), _vm._v(" "), _c('li', [_vm._v("Built in list view, map view and calendar view allow you to see you options in the best way")])])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
],[39]);
//# sourceMappingURL=app.39f89eac6668d55b3dd4.js.map