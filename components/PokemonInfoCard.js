import Image from 'next/image'
export default function PokémonInfoCard({pokemon}) {
  const typeToEmoji = type => {
    switch (type) {
      case 'normal':
        return '';
      case 'fighting':
        return '🥊';
      case 'flying':
        return '';
      case 'poison':
        return '';
      case 'ground':
        return '';
      case 'rock':
        return '';
      case 'bug':
        return '';
      case 'ghost':
        return '';
      case 'steel':
        return '';
      case 'fire':
        return '';
      case 'water':
        return '';
      case 'grass':
        return '';
      case 'electric':
        return '';
      case 'psychic':
        return '';
      case 'ice':
        return '';
      case 'dragon':
        return '';
      case 'dark':
        return '';
      case 'fairy':
        return '';  
    }
  }

  return (
    <div className='flex flex-col items-center justify-center w-full gap-1 p-3 bg-indigo-900 bg-opacity-75 min-w-fit sm:flex-row md:gap-3 sm:justify-evenly md:bg-transparent sm:border sm:border-teal-500'>
      <div className='relative w-24 h-24 sm:w-28 sm:h-28 sm:order-first'>
        <Image
          src={pokemon.images.front_default}
          alt='Picture of the Pokemon'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='gap-1 contents sm:flex sm:flex-col sm:items-center sm:flex-grow'>
        <div className='order-first text-lg capitalize'>{pokemon.name}</div>
        <div className='table w-full border border-collapse border-teal-500 min-w-72 md:border-none'>
          <div className='table-row'>
            <div className='table-cell capitalize border border-teal-500 md:border-none'>Type:</div>
            <div className='table-cell text-right capitalize border border-teal-500 md:border-none'>
              {pokemon.types[1] ? pokemon.types[1].name : ''}
            </div>
            <div className='table-cell text-right capitalize border border-teal-500 md:border-none'>
              {pokemon.types[0] ? pokemon.types[0].name : ''}
            </div>
          </div>
          <div className='table-row'>
            <div className='table-cell capitalize border border-teal-500 md:border-none'>Abilities:</div>
            <div className='table-cell text-right capitalize border border-teal-500 md:border-none'>
              {pokemon.abilities[0] ? pokemon.abilities[0].name : ''}
            </div>
            <div className='table-cell text-right capitalize border border-teal-500 md:border-none'>
              {pokemon.abilities[1] ? pokemon.abilities[1].name : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}