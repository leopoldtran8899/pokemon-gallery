import client from './_apollo-client'
import { PokemonByIdQuery, PokemonIdsQuery, PokemonsQuery } from "./pokemon-query";

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
  const { id , name, pokemon_v2_pokemonsprites, pokemon_v2_pokemontypes, pokemon_v2_pokemonabilities, pokemon_v2_pokemonmoves, pokemon_v2_pokemonstats } = pokemon_v2_pokemon_by_pk
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
  const moves = pokemon_v2_pokemonmoves.map(m => ({
    name: m.pokemon_v2_move.name,
    power: m.pokemon_v2_move.power,
    pp: m.pokemon_v2_move.pp,
  }))
  const stats = pokemon_v2_pokemonstats.map(s => ({
    name: s.pokemon_v2_stat.name,
    value: s.base_stat
  }))
  const images = parseImageObject(sprites)
  return {
    id, name, images, types, abilities, moves, stats
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
  const pokemons = pokemon_v2_pokemon.map(p => ({
    id: p.id,
    name: p.name,
    types: p.pokemon_v2_pokemontypes.map(t => ({
      name: t.pokemon_v2_type.name,
      id: t.pokemon_v2_type.id
    })),
    abilities: p.pokemon_v2_pokemonabilities.map(a => ({
      name: a.pokemon_v2_ability.name
    })),
    images: parseImageObject(p.pokemon_v2_pokemonsprites[0].sprites)
  }))
  return pokemons
}

export const getPokemonIds = async () => {
  const { data } = await client.query({
    query: PokemonIdsQuery,
  })
  const { pokemon_v2_pokemon } = data
  const pokemons = pokemon_v2_pokemon.map(p => ({
    id: p.id,
  }))
  return pokemons
}

// Utils
const parseImageObject = sprites => {
  const plainText = sprites
  const imagesString = plainText.replace('\\')
  const imagesObject = JSON.parse(imagesString)
  return imagesObject
}