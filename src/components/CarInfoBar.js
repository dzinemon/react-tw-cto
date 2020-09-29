import React from 'react';

function CarInfoBar(props) {
  return (
    <div className="xl:container mx-auto">
      <div className="px-4">
        <h2 className="font-semibold text-lg sm:text-2xl text-gray-700">Вартість володіння за 5 років</h2>
        <p className="text-gray-600">
          Обрана модель: <strong>
          {props.designation} 
          <span className="text-gray-500"> {props.configuration}</span>
          <span className="text-gray-500"> {props.horsepower} к.с.</span>
          </strong>
        </p>
      </div>
    </div>
  )
}

export default CarInfoBar