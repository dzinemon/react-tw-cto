import React from 'react'

function Breadcrumbs(props) {
  return (
    <div className="xl:container p-4 mx-auto">
      <div className="sm:text-xs text-sm">
        <span className="text-gray-600"><span role="img" aria-label="Home">🏠</span> Главная</span> <span className="text-gray-400">/</span>
        <span className="text-gray-600">{props.manufacturer}</span> <span className="text-gray-400">/</span>
        <span className="text-gray-600">{props.model}</span> <span className="text-gray-400">/</span>
        <span className="text-gray-600">{props.designation}</span> <span className="text-gray-400">/</span>
        <span className="text-gray-600">Cost to Own</span>
      </div>
    </div>
  )
}

export default Breadcrumbs