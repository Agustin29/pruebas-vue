import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
/* BOOTSTRAP */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/* bootstrap-table */
import "bootstrap-table/dist/bootstrap-table.min.css";
import "./plugins/jquery";
import "@popperjs/core/dist/umd/popper.min.js";
import "bootstrap-table/dist/bootstrap-table.js";

// import './plugins/table.js'

Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
