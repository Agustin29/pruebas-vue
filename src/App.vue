<template>
  <div class="container-fluid">
    <p class="h1 text-center">Tabla de Usuarios</p>
    <hr />
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
          console.log(res);
          this.tFootSearch();
          this.table();
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
    table() {
      this.$nextTick(() => {
        $("#tableUsers").DataTable({
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

<style></style>
