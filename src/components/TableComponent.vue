<template>
  <div class="container mt-3">
    <vuetable
      class="table table-hover"
      ref="vuetable"
      api-url="https://vuetable.ratiw.net/api/users"
      :fields="fields"
      data-path="data"
      pagination-path="data"
    ></vuetable>
    <vuetable-pagination ref="pagination"></vuetable-pagination>
  </div>
</template>

<script>
import axios from "../config";
import Vuetable from "vuetable-2";
import VuetablePagination from "vuetable-2/src/components/VuetablePagination";
export default {
  components: {
    Vuetable,
    VuetablePagination,
  },
  data() {
    return {
      users: [],
      fields: ["name", "nickname", "email"],
    };
  },
  mounted() {
    this.LoadPost();
  },
  methods: {
    LoadPost() {
      axios
        .get("https://vuetable.ratiw.net/api/users")
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
