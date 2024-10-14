import React from 'react'
import { Link } from 'react-router-dom'
import { urlFor } from '../../client'

function Herobanner({heroBanner}) {
 
  return(
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText}</h1>
        <img src={heroBanner.image && urlFor(heroBanner.image).url()} alt="headphones" className='hero-banner-image'/>

        <div>
          <Link to={`/product/${heroBanner.product}`}>
            <button type='button'>{heroBanner.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{heroBanner.description}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Herobanner
