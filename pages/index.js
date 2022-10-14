import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import PokémonInfoCard from '../components/pokemon-info-card'
import { getPokemonById } from '../lib/pokemon'
// import styles from '../styles/Home.module.css'

export default function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getPokemonById(4)
      .then((data) => {
        setData(data)
        setLoading(false)
        console.log(data.images.front_default)
      })
  }, [])
  // if (isLoading) return <p>Loading...</p>
  // if (!data) return <p>No profile data</p>
  return (
    <div className=''>
      <Head>
        <title>Pokémon Gallery</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='text-2xl md:text-3xl text-center font-display uppercase'>
        Pokémon gallery
      </div>
      <div className='max-w-md'>
        {isLoading || !data ? (
          <div className=''>Loading...</div>
        ) : (
          <PokémonInfoCard pokemon={data} />
        )}
      </div>
    </div>
  );
}
