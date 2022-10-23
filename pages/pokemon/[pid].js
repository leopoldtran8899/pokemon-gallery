import { getPokemonById, getPokemonIds } from '../../lib/pokemon';
import { typeToColor } from '../../components/PokemonInfoCard';
import Image from 'next/image';
const PokemonPage = ({ pokemon }) => {
  return (
    <div className='flex flex-col items-center h-full p-3 sm:p-6 xl:p-9'>
      <div className='mb-3 text-xl text-center text-transparent uppercase sm:text-3xl bg-gradient-to-r from-red-500 to-teal-500 bg-clip-text font-display sm:mb-6'>
        {pokemon.name}
      </div>
      <div className='relative w-24 h-24 sm:w-28 sm:h-28'>
        <Image
          src={
            pokemon.images.front_default
              ? pokemon.images.front_default
              : 'http://fakeimg.pl/400?font=museo'
          }
          alt='Picture of the Pokemon'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='w-full p-3 bg-black-700 sm:p-6 md:px-10vw'>
        {/** Info container  */}
        <div className='mb-5 contents md:flex md:flex-row md:gap-x-6'>
          <div className='flex flex-col capitalize sm:flex-row sm:justify-between md:basis-1/2'>
            {/** Type */}
            <div className='text-yellow-500 font-display'>
              Types
            </div>
            <div className='flex flex-row justify-end flex-grow md:justify-start gap-x-3 sm:px-5'>
              <div
                className={typeToColor(
                  pokemon.types[1] ? pokemon.types[1].name : ''
                )}
              >
                {pokemon.types[1] ? pokemon.types[1].name : ''}
              </div>
              <div
                className={typeToColor(
                  pokemon.types[0] ? pokemon.types[0].name : ''
                )}
              >
                {pokemon.types[0] ? pokemon.types[0].name : ''}
              </div>
            </div>
          </div>
          <div className='flex flex-col capitalize sm:flex-row sm:justify-between md:basis-1/2'>
            {/** Abilities */}
            <div className='text-yellow-500 font-display'>
              Abilities
            </div>
            <div className='flex flex-row justify-end flex-grow md:justify-start gap-x-3 sm:px-5'>
              <div>{pokemon.abilities[0] ? pokemon.abilities[0].name : ''}</div>
              <div>{pokemon.abilities[1] ? pokemon.abilities[1].name : ''}</div>
            </div>
          </div>
        </div>
        <div className='flex flex-col mb-5 capitalize sm:flex-row'>
          {/** stats */}
          <div className='text-yellow-500 font-display basis-1/12 sm:basis-1/6'>Stats</div>
          <div className='flex-grow sm:flex sm:flex-row sm:flex-wrap basis-10/12'>
            {pokemon.stats.map((stat, i) => (
              <div className='flex flex-row justify-between capitalize sm:px-5 sm:basis-1/2 lg:basis-1/3' key={i}>
                <div className='basis-1/2'>{stat.name.replace('-', ' ')}</div>
                <div className='text-right basis-1/4'></div>
                <div className='text-right basis-1/4'>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col mb-5 capitalize sm:flex-row'>
          {/** Moves*/}
          <div className='text-yellow-500 font-display basis-1/12 sm:basis-1/6'>Moves</div>
          <div className='flex-grow sm:flex sm:flex-row sm:flex-wrap basis-10/12'>
            <div className='flex flex-row mb-3 text-yellow-600 capitalize border-b ext-red-500 sm:px-5 sm:basis-1/2 lg:basis-1/3 border-b-yellow-600'>
              <div className='basis-1/2'>Name</div>
              <div className='text-right basis-1/4'>Power</div>
              <div className='text-right basis-1/4'>PP</div>
            </div>
            <div className='flex-row hidden mb-3 text-yellow-600 capitalize border-b sm:flex sm:px-5 sm:basis-1/2 lg:basis-1/3 border-b-yellow-600'>
              <div className='basis-1/2'>Name</div>
              <div className='text-right basis-1/4'>Power</div>
              <div className='text-right basis-1/4'>PP</div>
            </div>
            <div className='flex-row hidden mb-3 text-yellow-600 capitalize border-b lg:flex sm:px-5 sm:basis-1/2 lg:basis-1/3 border-b-yellow-600'>
              <div className='basis-1/2'>Name</div>
              <div className='text-right basis-1/4'>Power</div>
              <div className='text-right basis-1/4'>PP</div>
            </div>
            {pokemon.moves.map((move, i) => (
              <div
                className='flex flex-row capitalize sm:px-5 sm:basis-1/2 lg:basis-1/3'
                key={i}
              >
                <div className='basis-1/2'>{move.name.replace('-', ' ')}</div>
                <div className='text-right basis-1/4'>{move.power}</div>
                <div className='text-right basis-1/4'>{move.pp}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export async function getStaticPaths() {
  const res = await getPokemonIds();

  const paths = res.map(pokemon => ({
    params: { pid: pokemon.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
export async function getStaticProps(context) {
  const { params } = context;
  const { pid } = params;
  const pokemon = await getPokemonById(pid);
  if (pokemon) {
    return {
      props: { pokemon },
    };
  } else {
    return {
      props: {},
    };
  }
}

export default PokemonPage;
