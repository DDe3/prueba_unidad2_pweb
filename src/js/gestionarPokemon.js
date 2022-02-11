const obtenerPokemonOpciones = async () => {

    const nombres = await getPokemon()
    console.log(nombres)
    return nombres
}

const getPokemon = async () => {
    const arregloPokemon = []
    for (var i = 0; i < 4; i++) {
        arregloPokemon.push(getRandomInt(100))
    }
    const nombres = await obtenerNombres(arregloPokemon)
    return nombres

}

function getRandomInt(max) {
    return Math.floor(Math.random() * (max)) + 1;
}

const obtenerNombres = async ([a, b, c, d] = []) => {
    const dataA = await obtenerNombreApi(a)
    const dataB = await obtenerNombreApi(b)
    const dataC = await obtenerNombreApi(c)
    const dataD = await obtenerNombreApi(d)
    return [{ nombre: dataA.name, id: dataA.id },
    { nombre: dataB.name, id: dataB.id },
    { nombre: dataC.name, id: dataC.id },
    { nombre: dataD.name, id: dataD.id }]
}

const obtenerNombreApi = async (id) => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json())
    return pokemon
}


export default obtenerPokemonOpciones