import React, { useEffect, useState } from 'react'
import {client} from '../../../src/client'
import {Product,Herobanner, FooterBanner} from '../../Components'

function Home() {

  const [product, setProduct] = useState([])
  const [bannerData, setBannerData] = useState([])

  useEffect(() => {
    const productData = async ()=>{
      const query = "*[_type == 'product']"
      const product = await client.fetch(query);
      setProduct(product)
    }

    const bannerData = async ()=>{
      const query = "*[_type == 'banner']"
      const banner = await client.fetch(query);
      setBannerData(banner)
      console.log(banner)

    }

    productData()
    bannerData() 

  },[])



  return(
    <div>

      <Herobanner heroBanner={bannerData.length && bannerData[0]}  />


      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {product?.map((product) => <Product key={product._id} product={product} />)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
      
    </div>
  )
}

export default Home
