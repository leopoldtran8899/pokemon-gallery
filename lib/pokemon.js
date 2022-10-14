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
  const { id , name, pokemon_v2_pokemonsprites, pokemon_v2_pokemontypes, pokemon_v2_pokemonabilities } = pokemon_v2_pokemon_by_pk
  const sprites = pokemon_v2_pokemonsprites[0].sprites
  const types = pokemon_v2_pokemontypes.map(t => (
    {
      name: t.pokemon_v2_type.name,
      id: t.pokemon_v2_type.id
    }
  ))
  const abilities = pokemon_v2_pokemonabilities.map(a => ({
    name: a.pokemon_v2_ability.name
  }))
  const images = parseImageObject(sprites)
  return {
    id, name, images, types, abilities
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