import React from 'react';

import ManufacturersAndModels from '../json/available-manufacturers-models.json'
import { Link } from 'react-router-dom'

function HomeHero() {

  const manufacturers = ManufacturersAndModels.map((i, idx) => {
    return (
      <div key={idx} className="w-auto p-4 m-4 border border-blue-600 rounded-lg bg-blue-600">
        <Link to={`/${i.manufacturer.toLowerCase()}`} className="text-white hover:text-gray-300 sm:text-4xl text-2xl font-extrabold">
          {i.manufacturer}
        </Link>
      </div>
    )
  })

  return(
    <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-36 xl:py-20 flex flex-wrap">
      <div className="text-center lg:text-left lg:w-2/3 w-full">
        <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          Вартість володіння
          <br className="xl:hidden"/>
          <span className="text-blue-600"> новим авто</span>
        </h1>
        <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Розрахуйте вартість володіння автомобілем
        </p>
        <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Система розраховує додаткові витрати, які ви, можливо, не врахували при розгляді вашої наступної покупки автомобіля. 
        </p>
        <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Ці додаткові витрати включають: податки та збори, страхові внески, витрати на паливо, технічне обслуговування, ремонт та інше. Перегляньте витрати на володіння будь-яким авто.</p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          {/* <div className="rounded-md shadow">
            <a href="#manufacturers" className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-3 md:text-lg md:px-8">
              Перелік авто
            </a>
          </div> */}
          {/* <div className="mt-3 sm:mt-0 sm:ml-3">
            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-blue-100 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              Live demo
            </a>
          </div> */}
        </div>
      </div>
      <div className="lg:w-1/3 w-full ">
        <h3 className="text-center mt-2 text-xl leading-8 tracking-tight text-gray-700 sm:text-2xl sm:leading-10">
          Виберіть автовиробника
        </h3>
        <div className="flex justify-center items-center">
          {manufacturers}
        </div>
      </div>
    </main>
  )
}

export default HomeHero;