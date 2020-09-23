import React from 'react';

function Wheels(props) {
  return (
    <div className="bg-gray-100  rounded p-2">
      <p className="font-semibold text-lg">
        Колеса
      </p>
      <p className="text-xs">  
        {props.wheels === 'tyresNo' &&  ` никаких затрат `}
        {props.wheels === 'tyres' &&  ` покупка комплекта сезонных шин и 2 раза в год затраты на шиномонтаж, балансировка, снятие/установка`}
        {props.wheels === 'tyresPlus' &&  ` покупку комплекта комплект сезонных шин, дисков, датчиков давления, 2 раза в год затраты снятие/установка колес`} 
      </p>
      <div className="flex flex-row items-center justify-start px-1">
        <div>
          <label className="bg-blue-100 px-1 rounded mt-1" htmlFor="tyresNo">Езжу на заводской всегда
            <input type="radio" id="tyresNo"
            className="border border-gray-500 px-2 py-1 ml-2 align-middle"
            name="tyres" 
            value="tyresNo"
            defaultChecked
            onChange={props.calculateWheels}
             />
          </label>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start px-1">
        <div>
          <label className="bg-blue-100 px-1 rounded mt-1" htmlFor="tyres">Комплект сезонных Шин
            <input type="radio" id="tyres"
            className="border border-gray-500 px-2 py-1 ml-2 align-middle"
            name="tyres" 
            value="tyres"
            onChange={props.calculateWheels}
             />
          </label>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start px-1">
        <div>
          <label className="bg-blue-100 px-1 rounded mt-1" htmlFor="tyresPlus">Комплект шины с дисками и датчиками
            <input type="radio" id="tyresPlus"
            className="border border-gray-500 px-2 py-1 ml-2 align-middle"
            name="tyres" 
            value="tyresPlus"
            onChange={props.calculateWheels}
            />
          </label>
        </div>
      </div>
    </div>
  )
}

export default Wheels