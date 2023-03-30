import React from 'react'


const DetalleDelProducto = ({product}) => {
  return (
    <div>
        <h2>
       <div>
       Detalle

<h2>{product.name}</h2>
<h2>{product.price}</h2>
       </div>

        </h2>

    </div>
  )
}

export default DetalleDelProducto