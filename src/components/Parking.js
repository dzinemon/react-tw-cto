import React from 'react';
import sumTheArray from '../utils/sumTheArray'

function Parking(props) {

  const { parking } = props;

  return (
    <div className="bg-gray-100  rounded p-2">
      <p className="font-semibold text-lg">
        АвтоСтоянка
      </p>
      <p className="text-xs">
        Затраты  
        {props.parking === 'paid' &&  ` за 5 лет - ${sumTheArray(props.parkingExpensesArray)} `}
        {props.parking === 'free' &&  ` ${sumTheArray(props.parkingExpensesArray)} `} 
        грн
      </p>
      <div className="flex flex-row items-center justify-start px-1">
        
          <label className="bg-blue-100 px-1 rounded mt-1" htmlFor="contactChoice1">У дома
            <input type="radio" id="contactChoice1"
            className="border border-gray-500 px-2 py-1 ml-2 align-middle"
            name="parking" 
            value="free"
            onChange={props.calculateParking}
            checked={parking === 'free'? true : false }
             />
          </label>
        
      </div>
      <div className="flex flex-row items-center justify-start px-1">
        
          <label className="bg-blue-100 px-1 rounded mt-1" htmlFor="contactChoice2">Платный паркинг
            <input type="radio" id="contactChoice2"
            className="border border-gray-500 px-2 py-1 ml-2 align-middle"
            name="parking" 
            value="paid"
            onChange={props.calculateParking}
            checked={parking === 'paid'? true : false }
            />
          </label>
        
      </div>
    </div>
  )
}

export default Parking