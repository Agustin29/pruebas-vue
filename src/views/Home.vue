<template>
  <div class="container-fluid">
    <h1>Tabla de usuarios</h1>
    <hr />
    <TableUsers />
  </div>
</template>

<script>
import TableUsers from "../components/TableUsers";
export default {
  name: "Home",
  components: {
    TableUsers,
  },
};
</script>

<style lang="scss" scoped></style>
