<template>
  <div>
    <p class="fw-normal float-start">
      Mostrando {{ from }} a {{ to }} de {{ total }} registros
    </p>
  </div>
</template>

<script>
export default {
  name: "Mostrando",
  props: {
    from: Number,
    to: Number,
    total: Number,
  },
};
</script>

<style lang="scss" scoped></style>
