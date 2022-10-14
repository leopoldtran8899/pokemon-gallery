import Image from 'next/image'
export default function PokémonInfoCard({pokemon}) {
  const typeToEmoji = type => {
    switch (type) {
      case 'normal':
        return '';
      case 'fighting':
        return '';
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
    <div className='flex flex-col justify-center items-center gap-1 w-full min-w-fit sm:flex-row sm:gap-3 bg-yellow-400 text-black-700 border-solid border-pink-500 border-2'>
      <div className='w-24 h-24 relative sm:w-28 sm:h-28 md:order-first bg-yellow-600'>
        <Image
          src={pokemon.images.front_default}
          alt='Picture of the Pokemon'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='contents gap-1 sm:flex sm:flex-col sm:items-center'>
        <div className='capitalize text-lg order-first'>{pokemon.name}</div>
        <div className='grid grid-cols-3 gap-2 min-w-72'>
          <div className=''>Type:</div>
          <div className='text-right'>{pokemon.types[1] ? pokemon.types[1].name : ''}</div>
          <div className='text-right'>{pokemon.types[0] ? pokemon.types[0].name : ''}</div>
          <div className=''>Abilities:</div>
          <div className='text-right'>{pokemon.abilities[0] ? pokemon.abilities[0].name : ''}</div>
          <div className='text-right'>{pokemon.abilities[1] ? pokemon.abilities[1].name : ''}</div>
        </div>
        <div className='grid grid-cols-3 gap-2 min-w-72'>
        </div>
      </div>
    </div>
  );
}