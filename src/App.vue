<template>
  <div id="app" class="container-fluid">
    <p class="h1 text-center">Tabla de Usuarios</p>
    <hr />
    <!-- <v-client-table :data="users" :columns="columns" :options="options" /> -->
    <hr />
    <div class="table-responsive">
      <div class="container-fluid clearfix mb-3">
        <div class="col-sm-1 float-start">
          <select class="form-select form-select-sm" id="specificSizeSelect">
            <option value="1">5</option>
            <option value="2">15</option>
            <option value="3">25</option>
            <option value="3">50</option>
            <option value="3">100</option>
          </select>
        </div>
        <div class="form-text float-end">
          <input type="text" class="form-control form-control-sm" />
        </div>
      </div>
      <table class="table table-bordered table-hover table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
      <div class="container-fluid clearfix">
        <p class="fw-normal float-start">
          Mostrando {{ from }} a {{ to }} de {{ total }} registros
        </p>
        <nav class="float-end">
          <ul class="pagination">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
                >Anterior</a
              >
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item" aria-current="page">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Siguiente</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "./config/Api";
export default {
  name: "App",
  data() {
    return {
      // columns: ["id", "name", "email"],
      // options: {},
      users: [],
      current_page: "",
      from: "",
      last_page: "",
      per_page: "",
      to: "",
      total: "",
    };
  },
  created() {
    // this.loadUsers();
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
