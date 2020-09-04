import React from 'react';

function CarInfoBar(props) {
  return (
    <div className="xl:container mx-auto">
      <div className="px-4 mt-10">
        <h2 className="font-semibold text-lg sm:text-2xl text-gray-700">Стоимость владеня за 5 лет</h2>
        <p className="text-gray-600">
          Выбранная модель: <strong>
          {/* {props.manufacturer}  */}
          {/* {props.model}  */}
          {/* {props.configuration}  */}
          {props.designation} 
          </strong>
        </p>
      </div>
    </div>
  )
}

export default CarInfoBar