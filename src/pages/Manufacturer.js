import React from 'react';
import {useParams} from 'react-router-dom';
import ManufacturerSection from './ManufacturerSection'

import Breadcrumbs from '../components/Breadcrumbs'

function Manufacturer() {

  let { param_manufacturer } = useParams();

  return (
    <div>
      <Breadcrumbs />
      <hr className="border border-blue-600"/>
      <ManufacturerSection manufacturer={param_manufacturer}/>
    </div>
  )
}

export default Manufacturer