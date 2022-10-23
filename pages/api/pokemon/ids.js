import { getPokemonIds } from "../../../lib/pokemon"

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(400).json({ error: 'Some error' });
  } else {
    getPokemonIds().then(pokemon => {
      res.status(200).json({ pokemons: pokemon });
    });
  }
}