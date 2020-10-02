import React from 'react';

import { Link } from 'react-router-dom'

import ManufacturersAndModels from '../json/available-manufacturers-models.json'

function HomeManufacturers() {

  const manufacturers = ManufacturersAndModels.map((i, idx) => {
    return (
      <li key={idx}>
        <Link to={`/${i.manufacturer.toLowerCase()}`} className="text-blue-600 hover:text-blue-800">
          {i.manufacturer}
        </Link>
      </li>
    )
  })

  return (
    <div className="py-12 bg-white" id="manufacturers">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base leading-6 text-blue-600 font-semibold tracking-wide uppercase">АвтоВиробники</p>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Виберіть автовиробника
          </h3>
          <p className="max-w-2xl text-sm md:text-base  leading-7 text-gray-500 lg:mx-auto">
            Ми постійно оновлюемо дані
          </p>
        </div>

        <div className="mt-10 text-left md:text-center">
          <ul className="grid grid-cols-2">
            {manufacturers}
          </ul>
        </div>
      </div>
    </div>

  )
}

export default HomeManufacturers;