import React from 'react'

import {Link, useParams} from 'react-router-dom';

function Breadcrumbs(props) {

  let { param_manufacturer, param_model } = useParams();

  return (
    <div className="xl:container p-4 mx-auto">
      <div className="sm:text-xs text-sm">
        <Link to="/" className="text-gray-600 hover:text-gray-500">Головна</Link>
        <span className="text-gray-400"> / </span>
        <Link to={`/${param_manufacturer}`} className="text-gray-600 hover:text-gray-500 capitalize">Виробник <u>{param_manufacturer}</u></Link> 
        <span className="text-gray-400"> / </span>
        {/* <span className="text-gray-600">{props.model}</span>  */}
        {/* <span className="text-gray-400"> / </span> */}
        {param_model && <span className="text-gray-600 capitalize">Модель <u>{param_model}</u></span> }
      </div>
    </div>
  )
}

export default Breadcrumbs