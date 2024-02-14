import React from 'react'
import Hero from '../Components/Hero'
import MostPopular from '../Components/MostPopular'
import Banner from '../Components/Banner'
import TrendingNow from '../Components/TrendingNow'
import ReverseBanner from '../Components/ReverseBanner'

function Home() {
  return (
    <>
    <Hero />
    <MostPopular />
    <Banner />
    <TrendingNow />
    <ReverseBanner />
    </>
   
  )
}

export default Home