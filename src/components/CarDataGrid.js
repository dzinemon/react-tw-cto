import React from 'react'

function CarDataGrid(props) {
  return (
    <div className="xl:container mx-auto">
    <section className="px-4 mt-6">
      <h3 className="font-semibold text-md sm:text-xl text-gray-700 mb-2">Основные расходы</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-100 h-24 rounded p-2">
          <p className="font-semibold text-lg">
            Страховка
          </p>
          <div>
            <label className="leading-none text-xs" htmlFor="kasko">КАСКО</label>
            <input 
              id="kasko" 
              type="checkbox" 
              className="border border-gray-500 px-2 py-1 rounded mx-1 align-middle"
              onChange={props.handleCheckClick}  
              checked={(props.hasFullInsurance)}
            />
          </div>
          <div>
            <label className="leading-none text-xs" htmlFor="kasko">ОСАГО</label>
            <input defaultChecked id="kasko" type="checkbox" className="border border-gray-500 px-2 py-1 rounded mx-1 align-middle"/>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default CarDataGrid