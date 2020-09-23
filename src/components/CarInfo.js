import React from 'react';
import CarImage from '../images/AUDI_A4_0.png'
import formatNumber from '../utils/formatNumber'

import SelectDropdown from './SelectDropdown'

function CarInfo(props) {

  let currentPriceStr = formatNumber(props.price)
  let currentCostOfOwn = formatNumber(props.costOfOwn)
  let currentResidualPrice = formatNumber(props.residualPrice)
  let perKm = formatNumber(props.perKm)

  return (
    <div className="xl:container mx-auto">
    <div className="px-4 my-4">
      <h1 className="font-semibold text-lg sm:text-3xl text-gray-700">Стоимость владения <u>{props.designation} <span className="text-gray-500">({props.configuration}) {props.horsepower} л.с.</span></u></h1>
      <span className="text-gray-600 hover:underline hover:text-blue-500">Подробнее об {props.designation}</span><span className="text-blue-500"></span>
    </div>
    
    <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 sm:px-10 px-4">
          <img src={CarImage} alt=""/>
          {/* <span className="text-blue-500 hover:text-blue-700 hover:underline">Photos</span> */}
        </div>
        <div className="w-full sm:w-1/2 px-4">
          <div className="text-lg sm:text-xl text-gray-700 font-semibold">Общая Стоимость владения за <strong>5</strong> лет</div>

          <div className="my-6">
            <label className="block text-gray-600 text-xs mb-2" htmlFor="model">
              Выбрать модель
            </label>
            <div className="relative">
              <SelectDropdown cars={props.cars} handleChange={props.handleChange} />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="my-6 grid grid-cols-2 gap-2">
            <div className="pb-2 bg-gray-100 p-2 rounded">
              <p className="text-lg text-gray-600 leading-none font-light">
                Стоимость владения <sup>*</sup>
              </p>
              <div className="text-gray-800 text-xl sm:text-3xl font-bold">
                {currentCostOfOwn} <span className="text-gray-500 text-lg">грн</span>
              </div>
              <div className="text-xs leading-none text-gray-800"><sup>*</sup> Все затраты на содержание</div>
            </div>
            <div className="pb-2 bg-blue-800 p-2 rounded">
              <p className="text-lg text-white leading-none font-light">
                Цена нового автомобиля <sup>**</sup>
              </p>
              <div className="text-blue-100 text-xl sm:text-3xl font-bold">
                {currentPriceStr} <span className="text-gray-100 text-lg">грн</span>
              </div>
              <div className="text-xs leading-none text-gray-100"><sup>**</sup> Цена авто в автосалоне</div>
            </div>
            <div className="pb-2 bg-gray-100 p-2 border border-blue-200 rounded opacity-25 hidden">
              <p className="text-lg text-gray-800 leading-none font-light">
                Стоимость после 5-и лет <sup>***</sup>
              </p>
              <div className="text-gray-800 text-xl sm:text-3xl font-bold">
                {currentResidualPrice} <span className="text-gray-500 text-lg">грн</span>
              </div>
              <div className="text-xs leading-none text-gray-800"><sup>***</sup> Выгода при продаже</div>
            </div>
            <div className="pb-2 bg-gray-100 p-2 border border-blue-200 rounded opacity-25 hidden">
              <p className="text-lg text-blue-900 leading-none font-light">
                Стоимость 1 км
              </p>
              <div className="text-blue-800 text-xl sm:text-3xl font-bold">
                {perKm} <span className="text-gray-500 text-lg">грн</span>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  </div>
  )
}

export default CarInfo