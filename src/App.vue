<template>
  <div class="container-fluid">
    <p class="h1 text-center">Tabla de Usuarios</p>
    <hr />
    <div class="d-flex align-items-center mb-2" v-if="this.loading === false">
      <strong>Cargando datos de la tabla...</strong>
      <div
        class="spinner-border ms-auto"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
    <div class="table-responsive">
      <table class="table table-bordered table-hover table-sm" id="tableUsers">
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
        <tfoot>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "./config/Api";
export default {
  name: "App",
  data() {
    return {
      users: [],
      loading: false,
    };
  },
  mounted() {
    this.loadUsers();
  },
  methods: {
    cargando() {
      this.loading = true;
    },
    async loadUsers() {
      await axios
        .get("/users")
        .then((res) => {
          this.users = res.data;
          this.cargando();
          this.tFootSearch();
          this.tableData();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    tFootSearch() {
      this.$nextTick(() => {
        $("#tableUsers tfoot th").each(function() {
          var title = $(this).text();
          $(this).html('<input type="text" placeholder=" ' + title + '" />');
        });
      });
    },
    tableData() {
      this.$nextTick(() => {
        $("#tableUsers").DataTable({
          data: this.users,
          columns: [{ data: "id" }, { data: "name" }, { data: "email" }],
          initComplete: function() {
            // Apply the search
            this.api()
              .columns()
              .every(function() {
                var that = this;
                $("input", this.footer()).on("keyup change clear", function() {
                  if (that.search() !== this.value) {
                    that.search(this.value).draw();
                  }
                });
              });
          },
        });
      });
    },
  },
};
</script>

<style>
/* @import "assets/theme/css/dataTables.bootstrap5.min.css"; */
</style>
