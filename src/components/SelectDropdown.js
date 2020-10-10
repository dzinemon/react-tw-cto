import React from 'react';

function SelectDropdown(props) {

  const CarsArray = Array.from(props.cars);

  const options = CarsArray.map((i,idx) => {
    return (
      <option key={idx.toString()} value={i.designation}>{i.designation}</option>
    )
  })

  return (
    <select 
      className="block appearance-none w-full bg-gray-100 border border-blue-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      id="model"
      onChange={props.handleChange}
      >
      {options}
    </select>
  )
}

export default SelectDropdown