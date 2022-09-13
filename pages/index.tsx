import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Modal from '../components/Modal'

const Home: NextPage = () => {
  return (
    <div className="overflow-y-scroll scrollbar-hide bg-gray-50 h-screen ">
      <Head>
        <title>Vedantstagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Header*/}
      <Header/>

      {/*Feed*/}
      <Feed/>

      {/*Modal*/}
      <Modal />

    </div>
  )
}

export default Home
