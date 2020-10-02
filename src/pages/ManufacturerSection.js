import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from "../pages/NotFound";

import CarCardItem from '../components/CarCardItem'

import ManufacturersAndModels from '../json/available-manufacturers-models.json'

function ManufacturerSection(props) {

  const { manufacturer } = props;

  let modelsArray = ManufacturersAndModels.filter(i => i.manufacturer.toLowerCase() === props.manufacturer.toLowerCase())

  
  let models;

  if (modelsArray.length === 0) {
    return (
      <NotFound></NotFound>
    )
  } else {
    models = Array.from(modelsArray[0].models).map((i, idx) => {    
      return (
        <div key={idx} className="mb-2 sm:mb-0">
          <Link to={`${manufacturer}/${i}`} className="text-blue-600 hover:text-blue-800 capitalize font-bold">
            
            <CarCardItem image={`../images/${manufacturer.toLowerCase()}/${i}_0.jpg`} modelName={i.toUpperCase().replaceAll('_', ' ')} />
          </Link>
        </div>
      )
    })
  
  }
  

  return (
    <div className="py-12 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
        <p className="text-base leading-6 text-blue-600 font-semibold tracking-wide uppercase">АвтоВиробник {manufacturer}</p>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Виберіть модель {manufacturer}
          </h3>
          <p className="max-w-2xl text-sm md:text-base  leading-7 text-gray-500 lg:mx-auto">
            Ми постійно оновлюемо дані моделей {manufacturer}
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 sm:text-base text-sm gap-4 grid-2">
            {models}
          </div>
        </div>
      </div>
    </div>

  )
}

export default ManufacturerSection;