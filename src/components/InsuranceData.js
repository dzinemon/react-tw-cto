import React from 'react'


function InsuranceData(props) {
  return (
    <span className="text-xs text-gray-600"> {props.hasFullInsurance && `ОСАГО и КАСКО`} {!props.hasFullInsurance && `ОСАГО`}</span>
  )
}


export default InsuranceData