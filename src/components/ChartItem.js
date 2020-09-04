import React from 'react'
import formatNumber from '../utils/formatNumber'
import calculatePercentage from '../utils/calculatePercentage';
import {NAMING} from '../hardcoded'

function ChartItem(props) {

  const {costOfOwn, colorTone, parameter, parameterName, isOdd} = props;

  return (
    <div className={`chart-item flex flex-row sm:flex-col${isOdd? `-reverse`: ``} sm:flex-col sm:justify-end`} style={{width:`${calculatePercentage(parameter,costOfOwn)}%`}}>
      <div className={`chart-bar bg-blue-${colorTone}00 h-8`}></div>
      <div className={`section-caption flex flex-col${isOdd? `-reverse`: ``}`}>
        <div className={`pointer flex flex-row sm:flex-col${isOdd? `-reverse`: ``} items-center text-center`}>
          <div className={`line bg-blue-${colorTone}00`}></div>
          <div className={`circle bg-blue-${colorTone}00`}></div>
        </div>
        <div className="caption h-10 flex flex-col items-center text-center text-xs sm:text-base">
          <div className="text-sm leading-none relative w-40">
            {NAMING[parameterName]}
          </div>
          <span className="text-xs text-gray-700 relative w-40">{formatNumber(parameter)} <span className="text-gray-500">грн</span></span>
        </div>
      </div>
    </div>
  )
}

export default ChartItem