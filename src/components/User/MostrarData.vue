<template>
  <div class="float-start">
    <div class="input-group input-group-sm mb-3">
      <label class="input-group-text">Mostrar:</label>
      <select class="form-select" v-model="currentEntries" @change="paginateEntries">
        <option
          v-for="showEntrie in showEntries"
          :key="showEntrie"
          :value="showEntrie"
          >{{ showEntrie }}</option
        >
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "MostrarData",
  props: {
    currentEntries: Number,
    showEntries: Array,
    paginateEntries: Function
  },
};
</script>

<style lang="scss" scoped></style>
