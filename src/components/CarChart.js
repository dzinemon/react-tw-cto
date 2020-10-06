import React from 'react'
import ChartItem from './ChartItem'

function CarChart(props) {
  const {
    costOfOwn,
    sortedCosts,
    isMobile
  } = props

  const ChartItems = sortedCosts.map((i,idx) => {

    if (idx%2 === 0) {
      return (
        <ChartItem 
          key={i.name} 
          colorTone={8 - idx} 
          parameterName={i.name} 
          costOfOwn={costOfOwn} 
          parameter={i.value} 
          isOdd={true}
          isMobile={isMobile}
          />
      )
    }

    return (
      <ChartItem 
        key={i.name} 
        colorTone={8 - idx} 
        parameterName={i.name} 
        costOfOwn={costOfOwn} 
        parameter={i.value} 
        isOdd={false}
        isMobile={isMobile}
      />
    )
  })

  return (
    <div className="xl:container mx-auto sm:block">
    <div className="px-4 my-6">
      <div className={`flex flex-col sm:flex-row chart-wrap ${isMobile?'vertical':'horizontal'} mx-auto sm:mr-10`}>
      {ChartItems} 
      </div>
    </div>
  </div>
  )
}


export default CarChart