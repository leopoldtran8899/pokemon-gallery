import { gql } from '@apollo/client';
export const PokemonByIdQuery = gql`
  query PokemonById($id: Int!) {
    pokemon_v2_pokemon_by_pk(id: $id) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
          id
        }
      }
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemonstats(distinct_on: stat_id) {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
      pokemon_v2_pokemonmoves(distinct_on: move_id) {
        pokemon_v2_move {
          name
          id
          power
          pp
        }
      }
    }
  }
`;

export const PokemonsQuery = gql`
  query Pokemons($limit: Int, $offset: Int) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset) {
      id
      name
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
          id
        }
      }
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
    }
  }
`;

export const PokemonIdsQuery = gql`
  query Pokemons {
    pokemon_v2_pokemon {
      id
    }
  }
`;

export const PokemonsByNameQuery = gql`
  query Pokemons($limit: Int, $offset: Int, $name: String!) {
    pokemon_v2_pokemon_aggregate(
      where: { name: { _iregex: $name } }
      limit: $limit
      offset: $offset
    ) {
      nodes {
        id
        name
      }
    }
  }
`;
