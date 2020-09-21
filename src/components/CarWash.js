import React from 'react';

function CarWash(props) {

  const {carwash,setNumberOfCarWash} = props;
  return (
    <div className="bg-gray-100  rounded p-2">
      <p className="font-semibold text-lg">
        АвтоМойка
      </p>
      <div className="bg-blue-100">
        <div>
          Автомойки {carwash} раз в месяц
        </div>
        
        <div>
        <input 
            type="range" 
            defaultValue="1" 
            min="0" 
            step="1" 
            max="10" 
            list="tickmarks" 
            onChange={setNumberOfCarWash}
            // readOnly
            />
          <datalist id="tickmarks">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </datalist>
        </div>
      </div>
    </div>
  )
}

export default CarWash