import React from 'react'
import Wheels from './Wheels'
import Parking from './Parking'
import CarWash from './CarWash'
import Alarms from './Alarms'

function CarDataGrid(props) {
  return (
    <div className="xl:container mx-auto">
    <section className="px-4 mt-6">
      <h3 className="font-semibold text-md sm:text-xl text-gray-700 mb-2">Основные расходы</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        <div className="bg-gray-100  rounded p-2">
          <p className="font-semibold text-lg">
            Страховка 
          </p>
          <p className="text-xs">
            {props.hasFullInsurance &&  ` KASKO and OSAGO `}
            {!props.hasFullInsurance &&  ` OSAGO `}
          </p>
          <div className="flex flex-row items-center justify-start px-1">
            <label className="bg-blue-100 px-1 rounded mt-1" htmlFor="kasko">КАСКО
            <input 
              id="kasko" 
              type="checkbox" 
              className="border border-gray-500 px-2 py-1 ml-2 align-middle"
              onChange={props.handleCheckClick}  
              checked={(props.hasFullInsurance)}
            />
            </label>
          </div>
          <div className="flex flex-row items-center justify-start px-1">
            <label className="bg-blue-100 px-1 rounded mt-1" htmlFor="osago">ОСАГО
            <input disabled defaultChecked id="kasko" type="checkbox" className="border border-gray-500 px-2 py-1 ml-2 align-middle"/>
            </label>
          </div>
        </div>
    
      </div>
    </section>
    <section className="px-4 mt-6">
      <h3 className="font-semibold text-md sm:text-xl text-gray-700 mb-2">Прочие расходы</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">

        <Parking 
          calculateParking={props.calculateParking} 
          parking={props.parking}
          parkingExpensesArray={props.parkingExpensesArray}
        />

        <CarWash 
          carwash={props.carwash}
          setNumberOfCarWash={props.setNumberOfCarWash}/>
        <Alarms />
        <Wheels />

      </div>
    </section>
    </div>
  )
}

export default CarDataGrid