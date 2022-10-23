import PropTypes from "prop-types"
import Image from 'next/image'
export default function PokémonInfoCard({pokemon, handleClick}) {
  const handleOnClick = () => {
    handleClick(pokemon.id)
  }
  return (
    <div className='flex flex-col items-center justify-center w-full gap-1 p-3 bg-indigo-900 border border-teal-500 min-w-fit sm:flex-row md:gap-3 sm:justify-evenly group hover:bg-indigo-800' onClick={handleOnClick}>
      <div className='relative w-24 h-24 sm:w-28 sm:h-28 sm:order-first group-hover:scale-125 group-hover:cursor-pointer'>
        <Image
          src={pokemon.images.front_default ? pokemon.images.front_default : 'http://fakeimg.pl/400?font=museo'}
          alt='Picture of the Pokemon'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='gap-1 contents sm:flex sm:flex-col sm:items-center sm:flex-grow'>
        <div className='flex flex-row justify-between order-first text-lg text-yellow-500 capitalize group-hover:text-yellow-300 group-hover:cursor-pointer'>{pokemon.name}</div>
        <div className='table w-full min-w-72'>
          <div className='table-row'>
            <div className='table-cell font-bold capitalize'>Type:</div>
            <div className={'table-cell text-right capitalize ' + typeToColor(pokemon.types[1] ? pokemon.types[1].name : '')}>
              {pokemon.types[1] ? pokemon.types[1].name : ''}
            </div>
            <div className={'table-cell text-right capitalize ' + typeToColor(pokemon.types[0] ? pokemon.types[0].name : '')}>
              {pokemon.types[0] ? pokemon.types[0].name : ''}
            </div>
          </div>
          <div className='table-row'>
            <div className='table-cell font-bold capitalize'>Abilities:</div>
            <div className='table-cell text-right capitalize'>
              {pokemon.abilities[0] ? pokemon.abilities[0].name : ''}
            </div>
            <div className='table-cell text-right capitalize'>
              {pokemon.abilities[1] ? pokemon.abilities[1].name : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
PokémonInfoCard.propTypes = {
  pokemon: PropTypes.shape({
    abilities: PropTypes.any,
    images: PropTypes.shape({
      front_default: PropTypes.string
    }),
    name: PropTypes.any,
    types: PropTypes.any
  })
}

export const typeToColor = type => {
  switch (type) {
    case 'normal':
      return 'text-slate-100';
    case 'fighting':
      return 'text-orange-600';
    case 'flying':
      return 'text-sky-300';
    case 'poison':
      return 'text-purple-700';
    case 'ground':
      return 'text-amber-900';
    case 'rock':
      return 'text-stone-700';
    case 'bug':
      return 'text-lime-700';
    case 'ghost':
      return 'text-liolet-600';
    case 'steel':
      return 'text-neutral-500';
    case 'fire':
      return 'text-red-600';
    case 'water':
      return 'text-blue-500';
    case 'grass':
      return 'text-green-500';
    case 'electric':
      return 'text-yellow-500';
    case 'psychic':
      return 'text-rose-400';
    case 'ice':
      return 'text-cyan-500';
    case 'dragon':
      return 'text-indigo-700';
    case 'dark':
      return 'text-zinc-600';
    case 'fairy':
      return 'text-pink-300';  
  }
}