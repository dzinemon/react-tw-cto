import React from 'react'
import ChartItem from './ChartItem'

function CarChart(props) {
  const {
    costOfOwn,
    sortedCosts
  } = props

  const ChartItems = sortedCosts.map((i,idx) => {

    if (idx%2 === 0) {
      return (
        <ChartItem key={i.name} colorTone={9 - idx} parameterName={i.name} costOfOwn={costOfOwn} parameter={i.value} isOdd={true}/>
      )
    }

    return (
      <ChartItem key={i.name} colorTone={9 - idx} parameterName={i.name} costOfOwn={costOfOwn} parameter={i.value} isOdd={false}/>
    )
  })

  return (
    <div className="xl:container mx-auto hidden sm:block">
    <div className="px-4 mt-10">
      <div className="flex flex-col sm:flex-row chart-wrap horizontal mr-10">
      {ChartItems} 
      </div>
    </div>
  </div>
  )
}


export default CarChart