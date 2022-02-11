<template>
  <h1>Bienvenido al casino Pokemon</h1>
  <div v-if="dato">
    <p>"Recuerda tomar las medidas de bioseguridad, en el mundo a la fecha {{dato.date}} hay: </p>
    <p>Casos positivos</p>
    <p>Pacientes Hospitalizados</p>
    <p>Muertos</p>

  </div>
</template>

<script>

export default {
  data() {
    return {
      dato : null,
    }
  },
  methods: {
    async obtenerData() {
      const data = await fetch("https://api.covidtracking.com/v1/us/current.json").then(res => res.json())
      this.dato = data
    }
  },
  mounted() {
    this.obtenerData()
  }
};


</script>

<style>
</style>
