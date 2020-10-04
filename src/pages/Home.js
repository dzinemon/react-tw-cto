import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import HomeHero from './HomeHero'
// import HomeManufacturers from './HomeManufacturers'

function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{`Вартість нових авто та повний перелік витрат при володінні`}</title>
        <meta name="description" content={`Вартість нових авто та повний перелік витрати на володіння будь-яким авто`} />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <div>
        <hr className="border border-blue-400"/>
        <HomeHero/>
        {/* <HomeManufacturers/> */}
      </div>
    </HelmetProvider>
  )
}

export default Home;