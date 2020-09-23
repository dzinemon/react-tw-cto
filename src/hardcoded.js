const DEPRECIATION_RATES = [
  15, 14, 13, 12, 11
]

const INSURANCE_EXPENSES = [
  4.6, 4.8, 5, 5.2, 5.4 
]

const ALL_FUELS = {
  "petrol_95": 27.49,
  "diesel": 25.49
}

const FUEL_CONS_CHANGE = [
  1, 1.1, 1.15, 1.2, 1.25
]

const TAX = [
  3, 4, 5
]

const REPAIR_EXPENSES = [
  0, 0, 6205, 10115, 14095
]

const MAINTENANCE_EXPENSES = [
  6500, 9125, 6500, 9125, 6500
]

const PLATE_EXPENSES = 605;

const CARWASH_EXPENSES = 120

const FIXED_INSURANCE = 1280

const NAMING = {
  totalInsurance: 'Страхование',
  totalMaintenance: 'Обслуживание',
  totalRepairs: 'Ремонт',
  totalTaxExpenses: 'Налоги и Оформление',
  // totalPlateExpenses: 'Оформление',
  totalDepreciation: 'Потеря стоимости',
  totalFuelConsumption: 'Топливо',
  costOfOwn: 'Стоимость владения',
  totalOtherExpenses: 'Прочие расходы'
}

export {
  DEPRECIATION_RATES,
  FIXED_INSURANCE,
  INSURANCE_EXPENSES,
  FUEL_CONS_CHANGE,
  TAX,
  MAINTENANCE_EXPENSES,
  REPAIR_EXPENSES,
  ALL_FUELS,
  NAMING,
  CARWASH_EXPENSES,
  PLATE_EXPENSES
}