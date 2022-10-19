import SelectInput from '../../components/SearchBox';
import Button from '../../components/Button';
import PokemonInfoCard from '../../components/PokemonInfoCard'
import { useState } from 'react';
import { getPokemons } from '../../lib/pokemon';

const ItemPerPage = 10
const Pokemons = ({ pokemons, count }) => {
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(0)
  const maxPage = Math.ceil(count/ItemPerPage)
  const changePage = e => {
    setPage(e.target.value)
  }
  return (
    <div className='flex flex-col items-center pt-3'>
      <div className='mb-3 text-xl text-transparent uppercase font-display bg-gradient-to-r from-red-500 to-teal-500 bg-clip-text md:text-3xl'>
        Pokémon
      </div>
      {/* Tool bar */}
      <div className='flex flex-col items-start w-full px-3 my-3'>
        <div className='flex flex-row w-full gap-3 mb-6 justify-evenly md:justify-center'>
          <SelectInput
            inputPlaceholder='Search Pokémon'
            options={[
              { name: 'ID', type: 'number' },
              { name: 'Name', type: 'text' },
            ]}
          />
          <div className='flex'>
            <Button name='Search' onClick={() => {}} />
          </div>
        </div>
      </div>
      <div className='flex flex-row mb-3'>
        <span>Current page </span>
        <select className='' onChange={changePage}>
          {
            [...Array(maxPage).keys()].map(page => (
              <option key={page} value={page}>{page+1}</option>
            ))
          }
        </select>
        <span>Total page: {maxPage}</span>
      </div>
      <div className='flex flex-row flex-wrap items-center content-between justify-center w-full gap-3 p-'>
        {
          pokemons && pokemons.length > 0 ? pokemons.slice(page*ItemPerPage, (page*ItemPerPage)+ItemPerPage).map((pokemon, i) => <div key={pokemon.id} className='w-11/12 max-w-sm shrink sm:w-2/3 md:w-1/2'><PokemonInfoCard pokemon={pokemon}/></div>) : <div className=''>No pokemon found</div>
        }
      </div>
    </div>
  );
};
export async function getStaticProps(context) {
  const pokemons = await getPokemons();
  const count = pokemons.length;
  return {
    props: { pokemons, count }, // will be passed to the page component as props
  };
}

export default Pokemons;
