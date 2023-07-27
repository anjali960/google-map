import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as VueGoogleMaps from "vue2-google-maps";
import VueGeoLocation from "vue-browser-geolocation";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyA4KqG0k2_1s8cjnNn4mcLOerfaT_Aahx8",
    libraries: "places",
  },
});
Vue.use(VueGeoLocation);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
