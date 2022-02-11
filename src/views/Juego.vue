<template>
<div v-show="!fin">
  <h2>Puntaje: {{ puntaje }}</h2>
  <h2>Intento: {{ counter }}</h2>
  <div v-show="!flag">
    <img src="@/assets/imgOscura.png" alt="" />
    <img src="@/assets/imgOscura.png" alt="" />
    <img src="@/assets/imgOscura.png" alt="" />
  </div>
  <div v-if="flag">
    <img :src="idUno" alt="" id="img1" />
    <img :src="idDos" alt="" />
    <img :src="idTres" alt="" />
  </div>
  <div>
    <p>{{ nombre1 }}</p>
    <p>{{ nombre2 }}</p>
    <p>{{ nombre3 }}</p>
  </div>

  <button @click="cargarImagen">JUGAR</button>
  <button @click="nuevoJuego">Nuevo Juego</button>

  </div>

  <div v-show="fin">
      <img src="@/assets/congratulations.gif" alt="">
  </div>
</template>

<script>
import obtenerPokemonOpciones from "../js/gestionarPokemon";
export default {
  data() {
    return {
      pokemonArray: [],
      idUno: null,
      idDos: null,
      idTres: null,
      pokemon1: null,
      pokemon2: null,
      pokemon3: null,
      counter: 0,
      puntaje: 0,
      nombre1: "xxxxxxxxxxxx",
      nombre2: "xxxxxxxxxxxx",
      nombre3: "xxxxxxxxxxxx",
      flag: false,
      fin: false,
    };
  },

  methods: {
    nuevoJuego() {
        this.cargarPokemonInicio()
        this.cargarImagen()
        this.flag = false
        this.fin = false
    },

    cargarNombre() {
      this.nombre1 = this.pokemon1.nombre;
      this.nombre2 = this.pokemon2.nombre;
      this.nombre3 = this.pokemon3.nombre;
    },
    async cargarPokemonInicio() {
      this.pokemonArray = await obtenerPokemonOpciones();
      const random1 = Math.floor(Math.random() * 5);
      this.pokemon1 = this.pokemonArray[random1];
      const random2 = Math.floor(Math.random() * 5);
      this.pokemon2 = this.pokemonArray[random2];
      const random3 = Math.floor(Math.random() * 5);
      this.pokemon3 = this.pokemonArray[random3];
      console.log(this.pokemon1.id);
      console.log(this.pokemon2.id);
      console.log(this.pokemon3.id);
    },
    cargarImagen() {
      if (this.counter >= 5) {
        if (this.puntaje < 10) {
          this.fin = true;
        }
      } else {
        this.counter++;
        this.cargarUrl();
        this.cargarNombre();
        this.cargarUrl();
        this.flag = true;
      }
    },

    async cargarUrl() {
      const dataA = await fetch(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemon1.id}.svg`
      );
      const dataB = await fetch(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemon2.id}.svg`
      );
      const dataC = await fetch(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemon3.id}.svg`
      );
      this.idUno = dataA;
      this.idDos = dataB;
      this.idTres = dataC;
    },
  },
  mounted() {
    this.cargarPokemonInicio();
  },
};
</script>





<style>
img {
  height: 200px;
  width: 200px;
  margin: 0 10px;
}
</style>