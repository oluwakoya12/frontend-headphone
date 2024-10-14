import React from 'react'
import { Link } from 'react-router-dom'
import { urlFor } from '../../client'
import { useNavigate } from 'react-router-dom'



function Product({product:{image, name, slug, price}}) {
  // const navigate = useNavigate()
  return (
    <div >
      <Link to={`/product/${slug.current}`}>
        <div className='product-card'>
          <img src={image && urlFor(image[0])} width={250} height={250} className='product-image' alt="product" />
          <p className='product-name'>{name}</p>
          <p className='product-price'>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product
