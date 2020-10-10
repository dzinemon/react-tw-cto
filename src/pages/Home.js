import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import HomeHero from './HomeHero'

function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{`Вартість нових авто та повний перелік витрат при володінні`}</title>
        <meta name="description" content={`Вартість нових авто та повний перелік витрати на володіння будь-яким авто`} />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <div>
        <hr className="border-top border-blue-600"/>
        <HomeHero/>
      </div>
    </HelmetProvider>
  )
}

export default Home;