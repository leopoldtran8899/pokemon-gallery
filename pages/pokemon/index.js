import SelectInput from '../../components/SearchBox';
import Button from '../../components/Button';
import PokemonInfoCard from '../../components/PokemonInfoCard';
import { useState } from 'react';
import { getPokemons } from '../../lib/pokemon';
import { useRouter } from 'next/router';
import Head from 'next/head';

const ItemPerPage = 10;
const Pokemons = ({ pokemons, count }) => {
  const [page, setPage] = useState(0);
  const maxPage = Math.ceil(count / ItemPerPage);
  const router = useRouter()
  const changePage = e => {
    setPage(e.target.value);
  };
  const viewPokemon = e => {
    router.push('pokemon/' + e)
  };
  return (
    <div className='flex flex-col items-center pt-3 md:pt-6'>
      <Head>
        <title>Pokémon Gallery</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div className='mb-3 text-2xl text-transparent uppercase md:text-3xl font-display bg-gradient-to-r from-red-500 to-teal-500 bg-clip-text'>
        Pokémons
      </div>
      {/* Tool bar */}
      <div className='sticky top-0 z-40 flex flex-col items-start w-full px-3 pt-6 my-2 bg-indigo-800'>
        <div className='flex flex-row justify-center w-full gap-3 mb-6'>
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
        <div className='flex flex-row justify-center w-full mb-3 gap-x-3'>
          <span>Current page </span>
          <select className='' onChange={changePage}>
            {[...Array(maxPage).keys()].map(page => (
              <option key={page} value={page}>
                {page + 1}
              </option>
            ))}
          </select>
          <span>Total page: {maxPage}</span>
        </div>
      </div>
      <div className='flex flex-row flex-wrap items-center content-between justify-center w-full gap-3 p-'>
        {pokemons && pokemons.length > 0 ? (
          pokemons
            .slice(page * ItemPerPage, page * ItemPerPage + ItemPerPage)
            .map((pokemon, i) => (
              <div
                key={pokemon.id}
                className='w-11/12 max-w-sm shrink sm:w-2/3 md:w-1/2'
              >
                <PokemonInfoCard pokemon={pokemon} handleClick={viewPokemon} />
              </div>
            ))
        ) : (
          <div className=''>No pokemon found</div>
        )}
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
