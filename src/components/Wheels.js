import React from 'react';

function Wheels() {
  return (
    <div className="bg-gray-100  rounded p-2">
      <p className="font-semibold text-lg">
      Wheels
      </p>
      <div className="flex flex-row items-center justify-start px-1">
        <div>
          <label className="bg-blue-100 px-1 rounded mt-1" htmlFor="tyres">Шины
            <input type="radio" id="tyres"
            className="border border-gray-500 px-2 py-1 ml-2 align-middle"
            name="tyres" 
            value="tyres"
            defaultChecked
             />
          </label>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start px-1">
        <div>
          <label className="bg-blue-100 px-1 rounded mt-1" htmlFor="tyresAndDisks">Шины и диски
            <input type="radio" id="tyresAndDisks"
            className="border border-gray-500 px-2 py-1 ml-2 align-middle"
            name="tyres" 
            value="tyresAndDisks"
            />
          </label>
        </div>
      </div>
    </div>
  )
}

export default Wheels