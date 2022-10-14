import { gql } from "@apollo/client"
export const PokemonByIdQuery = gql`
  query PokemonById($id: Int!) {
    pokemon_v2_pokemon_by_pk(id: $id) {
      id
      name
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;

export const PokemonsQuery = gql`
  query Pokemons($limit: Int, $offset: Int) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset) {
      id
      name
      # pokemon_v2_pokemonsprites {
      #   sprites
      # }
    }
  }
`;