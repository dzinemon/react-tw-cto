import React from 'react'

import {Link, useParams} from 'react-router-dom';

function Breadcrumbs(props) {

  let { param_manufacturer, param_model } = useParams();

  return (
    <div className="xl:container py-2 px-4 sm:p-4 mx-auto">
      <div className="sm:text-xs text-sm">
        <Link to="/" className="text-gray-700 hover:text-gray-500">Головна</Link>
        <span className="text-gray-400"> / </span>
        {!param_model && param_manufacturer && (
          <>
            <span className="text-gray-700 capitalize">{param_manufacturer}</span>           
          </>
        )}
        {param_model && param_manufacturer && (
          <>
          <Link to={`/${param_manufacturer}`} className="text-gray-700 hover:text-gray-500 capitalize">{param_manufacturer}</Link> 
          <span className="text-gray-400"> / </span>
          <span className="text-gray-700 capitalize">{param_model.replaceAll('_', ' ')}</span>
          </>
          )}
      </div>
    </div>
  )
}

export default Breadcrumbs