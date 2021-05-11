<template>
  <div id="app" class="container-fluid">
    <p class="h1 text-center">Tabla de Usuarios</p>
    <hr />
    <div class="table-responsive">
      <div class="container-fluid clearfix mb-3">
        <MostrarData />
        <BuscarData />
      </div>
      <TableData :users="users" />
      <div class="container-fluid clearfix">
        <Mostrando :from="from" :to="to" :total="total" />
        <PaginacionData />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "./config/Api";
import TableData from "./components/User/TableData";
import Mostrando from "./components/User/Mostrando";
import MostrarData from "./components/User/MostrarData";
import BuscarData from "./components/User/BuscarData";
import PaginacionData from "./components/User/PaginacionData";
export default {
  name: "App",
  components: {
    TableData,
    Mostrando,
    MostrarData,
    BuscarData,
    PaginacionData,
  },
  data() {
    return {
      users: [],
      current_page: "",
      from: "",
      last_page: "",
      per_page: "",
      to: "",
      total: "",
    };
  },
  mounted() {
    this.loadUsers();
  },
  methods: {
    loadUsers() {
      axios
        .get("/users")
        .then((res) => {
          this.users = res.data.data;
          this.current_page = res.data.current_page;
          this.from = res.data.from;
          this.last_page = res.data.last_page;
          this.per_page = res.data.per_page;
          this.to = res.data.to;
          this.total = res.data.total;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
