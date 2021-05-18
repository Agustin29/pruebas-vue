import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
/* Bootstrap & CSS */
import "bootstrap/dist/css/bootstrap.min.css";
// import "datatables.net-dt/css/jquery.dataTables.min.css";
import "./assets/theme/css/dataTables.bootstrap5.min.css";
/* jquery */
import JQuery from "jquery";
window.$ = JQuery;
/* Datatables.net & JS */
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "datatables.net/js/jquery.dataTables.min.js";
import "./assets/theme/js/dataTables.bootstrap5.min.js";

Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
