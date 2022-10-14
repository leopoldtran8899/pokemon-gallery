import { getPokemonById } from "../../../lib/pokemon";

export default function handler(req, res) {
  if(req.method !== 'GET') {
    res.status(400).json({ Error: 'Unsupported request' })
  }
  const { pid } = req.query
  try {
    const pokemonId = parseInt(pid);
    if(!Number.isInteger(pokemonId)) {
      res.status(400).json({ Error: 'Incorrect pokemon ID' });
    } else {
      getPokemonById(pokemonId).then(pokemon => {
        if(pokemon.id != null) {
          res.status(200).json({ Pokemon: pokemon });
        } else {
          res.status(400).json({ Error: 'Pokemon not found' });
        }
      });
    }
  } catch (e) {
    res.status(400).json({ Error: 'Incorrect pokemon ID' });
  }

}