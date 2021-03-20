<template>
  <div class="container mt-3">
    <div class="card">
      <h3 class="card-header text-center">Formulario con Vuelidate</h3>
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <div class="row mb-3">
            <div class="col-md-6">
              <label>Nombre:</label>
              <input
                type="text"
                class="form-control"
                v-model.trim="$v.nombre.$model"
                :class="{
                  'is-invalid': $v.nombre.$error,
                  'is-valid': !$v.nombre.$invalid,
                }"
              />
              <div class="invalid-feedback">
                <span v-if="!$v.nombre.required">El nombre es requerido.</span>
              </div>
              <!-- <div class="valid-feedback">
                <span v-if="!$v.nombre.required">El nombre es requerido.</span>
              </div> -->
            </div>
            <div class="col-md-6">
              <label>Apellido:</label>
              <input
                type="text"
                class="form-control"
                v-model.trim="$v.apellido.$model"
                :class="{
                  'is-invalid': $v.apellido.$error,
                  'is-valid': !$v.apellido.$invalid,
                }"
              />
              <div class="invalid-feedback">
                <span v-if="!$v.apellido.required"
                  >El apelido es requerido.</span
                >
              </div>
              <!-- <div class="valid-feedback">
                <span v-if="!$v.apellido.required">El nombre es requerido.</span>
              </div> -->
            </div>
          </div>
          <div class="row">
            <div class="col-md">
              <button class="btn btn-outline-primary" @click="$v.$reset">
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "FormValidate",
  data() {
    return {
      nombre: "",
      apellido: "",
      submitStatus: null,
    };
  },
  validations: {
    nombre: {
      required,
    },
    apellido: {
      required,
    },
  },
  methods: {
    submitForm() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "FAIL";
      } else {
        this.submitStatus = "SUCCESS";
        this.nombre = "";
        this.apellido = "";
        console.log(this.nombre, this.apellido);
      }
    },

    /* submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        this.submitStatus = "OK";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    }, */

    clearForm() {
      this.nombre = "";
      this.apellido = "";
    },
  },
};
</script>

<style></style>
