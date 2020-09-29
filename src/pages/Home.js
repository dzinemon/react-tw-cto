import React from 'react';

import HomeHero from './HomeHero'
import HomeManufacturers from './HomeManufacturers'

function Home() {
  return (
    <div>
      <hr className="border border-blue-400"/>
      <HomeHero/>
      <HomeManufacturers/>
    </div>
  )
}

export default Home;