import client from './_apollo-client'
import { PokemonByIdQuery, PokemonsQuery } from "./pokemon-query";

export const getPokemonById = async pid => {
  const { data } = await client.query({
    query: PokemonByIdQuery,
    variables: {
      id: pid,
    },
  });
  const { pokemon_v2_pokemon_by_pk } = data
  if(pokemon_v2_pokemon_by_pk === null) {
    return { id: null }
  }
  const { id , name, pokemon_v2_pokemonsprites } = pokemon_v2_pokemon_by_pk
  const sprites = pokemon_v2_pokemonsprites[0].sprites

  const images = parseImageObject(sprites)
  return {
    id, name, images
  }
}
export const getPokemons = async (limit, offset) => {
  const { data } = await client.query({
    query: PokemonsQuery,
    variables: {
      offset: offset,
      limit: limit
    }
  })
  const { pokemon_v2_pokemon } = data
  return pokemon_v2_pokemon
}

// Utils
const parseImageObject = sprites => {
  const plainText = sprites
  const imagesString = plainText.replace('\\')
  const imagesObject = JSON.parse(imagesString)
  return imagesObject
}