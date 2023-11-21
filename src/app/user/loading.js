import React, { Suspense } from 'react'


const loading = props => {
  return (
    <div><Suspense fallback={<p>cargando ..</p>}></Suspense></div>
  )
}



export default loading