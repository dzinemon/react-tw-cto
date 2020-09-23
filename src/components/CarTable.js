import React from 'react'
import formatNumber from '../utils/formatNumber'

import CarChart from './CarChart';
import CarTableRow from './CarTableRow';

import sumTheArray from '../utils/sumTheArray'

import {
  MAINTENANCE_EXPENSES,
  REPAIR_EXPENSES,
  NAMING
} from '../hardcoded';

function CarTable(props) {
  const { 
    hasFullInsurance,
    taxExpensesArray,
    fuelConsumptionArray,
    // lossOfPriceArr,
    // parkingExpensesArray,
    insuranceExpenses,
    eachYearExpensesArray,
    otherExpensesArray,
    costOfOwn
  } = props;
  // tax
  const totalTaxExpenses = sumTheArray(taxExpensesArray);

  // fuel
  const totalFuelConsumption = sumTheArray(fuelConsumptionArray);

  // depreciation
  // const totalDepreciation = lossOfPriceArr.reduce((acc, cur) => {
  //   return acc + Number(cur.depreciationAmount);
  // }, 0);

  // const depreciationArray = lossOfPriceArr.map((i) => i.depreciationAmount);

  // maintenance
  const totalMaintenance = sumTheArray(MAINTENANCE_EXPENSES);

  // insurance
  const totalInsurance = sumTheArray(insuranceExpenses);

  // repairs
  const totalRepairs = sumTheArray(REPAIR_EXPENSES);

  //other expenses
  const totalOtherExpenses = sumTheArray(otherExpensesArray)

  // calculate Each Year
  const fiveYearTDs = eachYearExpensesArray.map((i, idx) => {
    return (
      <td className="p-2 font-semibold" key={idx.toString()}>
        {formatNumber(i)}
      </td>
    );
  });

  const AllCosts = [
    {
      name: "totalInsurance",
      value: totalInsurance,
      array: insuranceExpenses,
    },
    {
      name: "totalMaintenance",
      value: totalMaintenance,
      array: MAINTENANCE_EXPENSES,
    },
    {
      name: "totalRepairs",
      value: totalRepairs,
      array: REPAIR_EXPENSES,
    },
    {
      name: "totalFuelConsumption",
      value: totalFuelConsumption,
      array: fuelConsumptionArray,
    },
    {
      name: "totalTaxExpenses",
      value: totalTaxExpenses,
      array: taxExpensesArray,
    }
    
  ];
  let sortedCosts;
  if (totalOtherExpenses > 0) {
     sortedCosts = [...AllCosts, {
      name: "totalOtherExpenses",
      value: totalOtherExpenses,
      array: otherExpensesArray,
    }]
  } else {
     sortedCosts = AllCosts;
  }

  // const sortedCosts = AllCosts.sort((a, b) => b.value - a.value)
  // const sortedCosts = AllCosts;

  const tableRows = sortedCosts.map((i, idx) => {
    return (
      <CarTableRow
        hasFullInsurance={hasFullInsurance}
        key={idx}
        index={idx + 1}
        currentArray={i.array}
        currentName={NAMING[i.name]}
        currentValue={i.value}
      />
    );
  });

  return (
    <div className="overflow-hidden">
      <CarChart
        isMobile={props.isMobile}
        costOfOwn={costOfOwn}
        sortedCosts={sortedCosts}
      />
      <div className="xl:container mx-auto overflow-scroll">
        <section className="px-4">
          <table className="table-auto text-sm sm:text-base w-full bg-gray-100 border-gray-200 border-2 rounded overflow-hidden border-collapse">
            <thead className="font-semibold bg-gray-100">
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
            <tbody>{tableRows}</tbody>
            <tfoot className="bg-gray-200">
              <tr>
                <td className="font-bold p-2 font-bold">
                  Общая Стоимость Владения
                </td>
                {fiveYearTDs}
                <td className="p-2 font-bold">{formatNumber(costOfOwn)}</td>
              </tr>
            </tfoot>
          </table>
          <p className="text-xs text-gray-600 my-4">
            * Данные основаны на 5-ти летнем сроке владения и пробеге 15,000 км
            в год.
          </p>
        </section>
      </div>
    </div>
  );
}

export default CarTable;