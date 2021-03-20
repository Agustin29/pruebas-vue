import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

/* VUELIDATE */
import Vuelidate from "vuelidate";

/* BOOTSTRAP */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/* CONFIGS */
Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
