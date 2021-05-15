import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
/* BOOTSTRAP */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
/* jquery */
import JQuery from "jquery";
window.$ = JQuery;
/* Datatables.net */
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net/js/jquery.dataTables.min.js";

Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
