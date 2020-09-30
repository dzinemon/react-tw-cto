import React from 'react';

function CarCardItem(props) {

  const { image, modelName } = props;

  return(
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
      <img className="w-full h-32 object-cover object-center" src={image} alt="Sunset in the mountains"/>
      <div className="px-4 py-3">
        <div className="font-bold text-xl">{modelName}</div>
      </div>
    </div>
  )
}

export default CarCardItem