<template>
  <div>
    <BootstrapTable :columns="columns" :data="users" :options="options" />
  </div>
</template>

<script>
import BootstrapTable from "bootstrap-table/dist/bootstrap-table-vue.esm.js";
import axios from "../config/api";
export default {
  name: "TableUsers",
  components: {
    BootstrapTable,
  },
  data() {
    return {
      users: [],
      columns: [
        {
          title: "ID",
          field: "id",
        },
        {
          title: "Nopmbre",
          field: "name",
        },
        {
          title: "Username",
          field: "username",
        },
        {
          title: "Email",
          field: "email",
        },
        {
          title: "Phone",
          field: "phone",
        },
      ],
      options: {
        search: true,
        showColumns: true,
      },
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
          this.users = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
