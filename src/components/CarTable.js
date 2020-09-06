import React from 'react'
import formatNumber from '../utils/formatNumber'

import CarChart from './CarChart';

import {
  MAINTENANCE_EXPENSES,
  REPAIR_EXPENSES
} from '../hardcoded';

function CarTable(props) {
// tax
const taxExpensesArray = props.taxExpensesArray;
  const taxExpensesTDs = taxExpensesArray.map((i, idx) => {
    return (
      <td className="p-2" key={idx.toString()}>{formatNumber(i)}</td>
    )
  })

const totalTaxExpenses = taxExpensesArray.reduce((acc, cur) => {
  return acc + Number(cur)
}, 0)

// license plate

const plateExpensesArray = props.plateExpensesArray;

const plateExpensesTDs = plateExpensesArray.map((i, idx) => {
  return (
    <td className="p-2" key={idx.toString()}>{formatNumber(i)}</td>
  )
})

const totalPlateExpenses = plateExpensesArray.reduce((acc, cur) => {
return acc + Number(cur)
}, 0)

// fuel
  const fuelConsumptionArray = props.fuelConsumptionArray;
  const fuelConsumptionTDs = fuelConsumptionArray.map((i, idx) => {
    return (
      <td className="p-2" key={idx.toString()} >{formatNumber(i)}</td>
    )
  })

  const totalFuelConsumption = fuelConsumptionArray.reduce((acc, cur) => {
    return acc + Number(cur)
  }, 0)
  
// depreciation
  const lossOfPriceArr = props.lossOfPriceArr;
  const depreciationTDs = lossOfPriceArr.map((i,idx) => {
    return (
      <td className="p-2" key={idx.toString()} >{formatNumber(i.depreciationAmount)}</td>
    )
  });

  const totalDepreciation = lossOfPriceArr.reduce((acc, cur) => {
    return acc + Number(cur.depreciationAmount)
  }, 0);

// maintenance  
  const maintenanceTDs = MAINTENANCE_EXPENSES.map((i,idx) => {
    return (
      <td className="p-2" key={idx.toString()} >{formatNumber(i)}</td>
    )
  });

  const totalMaintenance = MAINTENANCE_EXPENSES.reduce((acc, cur) => {
    return acc + Number(cur)
  }, 0);

// insurance

  const insuranceExpenses = props.insuranceExpenses
  const insuranceTDs = insuranceExpenses.map((i, idx) => {
    return (
      <td className="p-2" key={idx.toString()} >{formatNumber(i)}</td>
    )
  })

  const totalInsurance = insuranceExpenses.reduce((acc, cur) => {
    return acc + Number(cur)
  }, 0)

// repairs
  const repairsTDs = REPAIR_EXPENSES.map((i,idx) => {
    return (
      <td className="p-2" key={idx.toString()} >{formatNumber(i)}</td>
    )
  });

  const totalRepairs = REPAIR_EXPENSES.reduce((acc, cur) => {
    return acc + Number(cur)
  }, 0);

// calculate Each Year
  const fiveyearsArray = props.fiveyearsArray;
  const costOfOwn = props.costOfOwn;
  const fiveYearTDs = fiveyearsArray.map((i,idx) => {
    return (
      <td className="p-2 font-semibold" key={idx.toString()} >{formatNumber(i)}</td>
    )
  });

  const AllCosts = [
    {name: 'totalDepreciation',
      value: totalDepreciation  
    },
    {name: 'totalPlateExpenses',
      value: totalPlateExpenses  
    },
    {name: 'totalInsurance',
      value: totalInsurance  
    },
    {name: 'totalMaintenance',
      value: totalMaintenance  
    },
    {name: 'totalFuelConsumption',
      value: totalFuelConsumption  
    },
    {name: 'totalTaxExpenses',
      value: totalTaxExpenses  
    },
     {name: 'totalRepairs',
      value: totalRepairs  
    }
  ]

  // const sortedCosts = AllCosts.sort((a, b) => b.value - a.value)
  const sortedCosts = AllCosts;
  
  return (
    <div>
      <CarChart 
        isMobile={props.isMobile}
        costOfOwn={costOfOwn}
        sortedCosts={sortedCosts}
      />
      <div className="xl:container mx-auto overflow-scroll">
      <section className="px-4 mt-6">
        <table className="table-auto text-sm sm:text-base w-full bg-gray-100 border-gray-200 border-2 rounded overflow-hidden border-collapse">
          <thead className="font-semibold bg-gray-200">
            <tr>
              <td className="p-2"></td>
              <td className="p-2 w-32">1-ый год</td>
              <td className="p-2 w-32">2-й год</td>
              <td className="p-2 w-32">3-й год</td>
              <td className="p-2 w-32">4-й год</td>
              <td className="p-2 w-32">5-й год</td>
              <td className="p-2 font-bold w-32">Всего</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 font-semibold">Страховка <span className="text-xs text-gray-600">{props.hasFullInsurance && `ОСАГО и КАСКО`} {!props.hasFullInsurance && `ОСАГО`}</span></td>
              {insuranceTDs}
              <td className="p-2 font-semibold">{formatNumber(totalInsurance)}</td>
            </tr>
            <tr className="bg-gray-200">
              <td className="p-2 font-semibold">Обслуживание</td>
              {maintenanceTDs}
              <td className="p-2 font-semibold">{formatNumber(totalMaintenance)}</td>
            </tr>
            <tr>
              <td className="p-2 font-semibold">Ремонт</td>
              {repairsTDs}
              <td className="p-2 font-semibold">{formatNumber(totalRepairs)}</td>
            </tr>
            <tr className="bg-gray-200">
              <td className="p-2 font-semibold">Налоги</td>
              {taxExpensesTDs}
              <td className="p-2 font-semibold">{formatNumber(totalTaxExpenses)}</td>
            </tr>
            <tr>
              <td className="p-2 font-semibold">Оформление</td>
              {plateExpensesTDs}
              <td className="p-2 font-semibold">{formatNumber(totalPlateExpenses)}</td>
            </tr>
            <tr className="bg-gray-200">
              <td className="p-2 font-semibold">Потеря Стоимости</td>
              {depreciationTDs}
              <td className="p-2 font-semibold">{formatNumber(totalDepreciation)}</td>
            </tr>
            <tr>
              <td className="p-2 font-semibold">Топливо</td>
              {fuelConsumptionTDs}
              <td className="p-2 font-semibold">{formatNumber(totalFuelConsumption)}</td>
            </tr>
          </tbody>
          <tfoot className="bg-gray-200">
            <tr>
              <td className="font-bold p-2 font-bold">Общая Стоимость Владения</td>
              {fiveYearTDs}
              <td className="p-2 font-bold">{formatNumber(costOfOwn)}</td>
            </tr>
          </tfoot>
        </table>
        <p className="text-xs text-gray-600 my-4">* Данные основаны на 5-ти летнем сроке владения и пробеге 15,000 км в год.</p>
      </section>
      </div>
    </div>
  )
}

export default CarTable