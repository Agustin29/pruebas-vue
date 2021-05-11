import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
/* BOOTSTRAP */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/* vue-table-2 */
import { ServerTable, ClientTable, Event } from "vue-tables-2";
Vue.use(ClientTable);

Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
