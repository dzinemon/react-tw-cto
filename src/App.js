import React, { useState } from 'react';
// import logo from './logo.svg';
import Nav from './components/Nav';
import Breadcrumbs from './components/Breadcrumbs';
import Footer from './components/Footer';
import CarInfo from './components/CarInfo';
import CarInfoBar from './components/CarInfoBar';
import CarTable from './components/CarTable';
import CarDataGrid from './components/CarDataGrid';
import useWindowDimensions from './hooks/useWindowDimensions';

import Cars from './AUDI_A4.json';
import './App.css';

import {
  DEPRECIATION_RATES,
  INSURANCE_EXPENSES,
  FUEL_CONS_CHANGE,
  FIXED_INSURANCE,
  TAX,
  MAINTENANCE_EXPENSES,
  REPAIR_EXPENSES,
  ALL_FUELS
} from './hardcoded';


function App() {

  
  function handleChange(e) {
    e.preventDefault();
    updateCar(e.target.value)
  }
  
  function handleCheckClick(e) {
    setInsurance(!hasFullInsurance);
  }
  const { height, width } = useWindowDimensions();

  let isMobile = (width < 640)? true : false;

  const manufacturer = 'Audi'

  const currentCar = Cars[0]

  const [ model, setModel ] = useState(currentCar.model)
  const [ average_fuel_consumption, setAFC ] = useState(currentCar.average_fuel_consumption)
  const [ configuration, setConfiguration ] = useState(currentCar.configuration)
  const [ designation, setDesignation ] = useState(currentCar.designation)
  const [ price, setPrice ] = useState(currentCar.price)
  const [ horsepower, setHorsepower ] = useState(currentCar.horsepower)

  const [ fuel, setFuel ] = useState(currentCar.designation.includes('TFSI') ? 'petrol' : 'diesel' )

  const [ hasFullInsurance, setInsurance] = useState(true)

  function updateCar(el) {
    let updatedCar = Cars.filter(i => i.designation === el);
    setModel(updatedCar[0].model);
    setAFC(updatedCar[0].average_fuel_consumption);
    setConfiguration(updatedCar[0].configuration);
    setDesignation(updatedCar[0].designation);
    setPrice(updatedCar[0].price);
    setHorsepower(updatedCar[0].horsepower);
    setFuel(updatedCar[0].designation.includes('TFSI') ? 'petrol' : 'diesel');
  }


  // tax
  const taxAmount = (price * 20 / (100 + 20)).toFixed(0);

  const taxFreeAmount = price - taxAmount;

  const taxToPayPension = (tax) => {
    if (tax < 346830) {
      
      return TAX[0] * tax / 100
    } else if ( 346830 <= tax && tax < 609580) {
      
      return TAX[1] * tax / 100
    } else if (tax >= 609580) {
      
      return TAX[2] * tax / 100
    }
  }
  const taxExpensesArray = new Array(5);
  taxExpensesArray[0] = (taxToPayPension(taxFreeAmount)).toFixed(0);
  taxExpensesArray.fill(0, 1);

  // license plate 
  const plateExpensesArray = new Array(5);
  plateExpensesArray[0] = 605;
  plateExpensesArray.fill(0, 1);
// fuel

const fuelConsumptionArray = FUEL_CONS_CHANGE.map(i => {
  if (fuel === 'petrol') {
    return (150 * average_fuel_consumption * ALL_FUELS.petrol_95 * i).toFixed(0)
  }
  return (150 * average_fuel_consumption * ALL_FUELS.diesel * i).toFixed(0)
});

// depreciation
let valueOfACar = price;
const lossOfPriceArr = DEPRECIATION_RATES.map(i => {
  let purchasePrice = valueOfACar;
  valueOfACar = (valueOfACar * (1 - i/100)).toFixed(0)
  let depreciationAmount = (purchasePrice - valueOfACar).toFixed(0);
  return { valueOfACar, depreciationAmount }
});

// insurance
const insuranceExpenses = INSURANCE_EXPENSES.map((i, idx) => {
  const baseFixedIns = FIXED_INSURANCE;
  let insIndex;

  if (horsepower <= 70) {
    insIndex = 1
  } else if (horsepower > 70 && horsepower <= 100 ){
    insIndex = 1.1
  } else if (horsepower > 100 && horsepower <= 140 ){  
    insIndex = 1.2
  } else if (horsepower > 140 && horsepower <= 190 ){
    insIndex = 1.4
  } else if (horsepower > 190 && horsepower <= 240 ){  
    insIndex = 1.6
  } else if (horsepower > 240 ){  
    insIndex = 1.8
  }

  if (hasFullInsurance) {
    return (i * lossOfPriceArr[idx].valueOfACar / 100 + ( insIndex * baseFixedIns ) ).toFixed(0);
  }
  return ( insIndex * baseFixedIns ).toFixed(0);
});

// calculate Each Year

const fiveYears = () => {
  let totalPerYear = new Array(5)
  totalPerYear.fill(0,0)
  return totalPerYear.map((i, idx) => {
    return Number(REPAIR_EXPENSES[idx]) + Number(insuranceExpenses[idx]) + Number(MAINTENANCE_EXPENSES[idx]) + Number(lossOfPriceArr[idx].depreciationAmount) + Number(fuelConsumptionArray[idx]) + Number(taxExpensesArray[idx]) + plateExpensesArray[idx]
  })
}

const fiveyearsArray = fiveYears();

// cost of own 
const costOfOwn = fiveyearsArray.reduce((acc, cur) => {
  return acc + Number(cur)
}, 0);

const residualPrice = lossOfPriceArr[lossOfPriceArr.length - 1].valueOfACar

  return (
    <div className="App">
      <Nav />
      <div>
        width: {width} ~ height: {height}
      </div>
      <Breadcrumbs 
        manufacturer={manufacturer}
        model={model} 
        designation={designation}
      />
      <CarInfo
        configuration={configuration}
        designation={designation}
        price={price}
        horsepower={horsepower}
        cars={Cars}
        handleChange={handleChange}
        costOfOwn={costOfOwn}
        residualPrice={residualPrice}
      />
      <CarInfoBar 
        horsepower={horsepower}
        designation={designation}
        configuration={configuration}
      />

      <CarTable
        isMobile={isMobile}
        hasFullInsurance={hasFullInsurance}
        taxExpensesArray={taxExpensesArray}
        plateExpensesArray={plateExpensesArray}
        fuelConsumptionArray={fuelConsumptionArray}
        lossOfPriceArr={lossOfPriceArr}
        insuranceExpenses={insuranceExpenses}
        fiveyearsArray={fiveyearsArray}
        costOfOwn={costOfOwn}
      />
      <CarDataGrid 
        hasFullInsurance={hasFullInsurance}
        handleCheckClick={handleCheckClick}
      />
      <hr className="mt-20"></hr>
      <Footer />
    </div>
  );
}

export default App;
