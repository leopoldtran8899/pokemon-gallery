import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Pokémon Gallery</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className=''>
        Pokémon gallery
      </div>
      <div className=''></div>
    </div>
  )
}
