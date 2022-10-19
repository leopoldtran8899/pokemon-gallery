import Head from 'next/head';
import Image from 'next/image';
import Button from '../components/Button';
import Magikarp from '../public/magikarp.png';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-start h-screen px-2 py-4 bg-center bg-no-repeat bg-cover bg-pokebal sm:justify-center md:bg-contain md:bg-right md:block'>
      <Head>
        <title>Pokémon Gallery</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='flex flex-col justify-start w-5/6 max-w-sm gap-y-3 md:relative md:inset-y-1/4 md:h-1/2 lg:left-10vw xl:left-1/4 md:justify-evenly md:gap-y-0'>
        <div className='p-2 text-2xl text-center text-transparent uppercase bg-center bg-no-repeat bg-cover md:text-3xl font-display bg-gradient-to-r from-red-500 to-teal-500 bg-clip-text shadow-burn'>
          Pokémon gallery
        </div>
        <div className='relative h-48'>
          <Image
            src={Magikarp}
            alt='Picture of the Pokemon'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='h-11'>
          <Button linkTo={'/pokemon'} name='Browse Pokémons' />
        </div>
        <div className='h-11'>
          <Button linkTo={'/pokemon'} name='Something else' />
        </div>
      </div>
    </div>
  );
}
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const pokemon1 = await getPokemonById(1)
//   const pokemon2 = await getPokemonById(4)
//   const pokemon3 = await getPokemonById(7)
//   const pokemon4 = await getPokemonById(16)

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       pokemon1,
//       pokemons: [pokemon1, pokemon2, pokemon3, pokemon4]
//     },
//   }
// }
