import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {useParams} from 'react-router-dom';
import ManufacturerSection from './ManufacturerSection'

import Breadcrumbs from '../components/Breadcrumbs'

function Manufacturer() {

  let { param_manufacturer } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ ] );

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>{`Вартість володіння автомобілем ${param_manufacturer}`}</title>
          <meta name="description" content={`Вартість володіння автомобілем ${param_manufacturer}, обери свою модель та отримати повний перелік витрат`} />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        <Breadcrumbs />
        <hr className="border border-blue-600"/>
        <ManufacturerSection manufacturer={param_manufacturer}/>
      </HelmetProvider>
    </div>
  )
}

export default Manufacturer