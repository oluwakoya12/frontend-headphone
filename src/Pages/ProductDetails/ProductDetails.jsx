import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { client, urlFor } from '../../client'
import {AiOutlineMinus, AiOutlinePlus, AiOutlineStar, AiFillStar} from 'react-icons/ai'
import { Product } from '../../Components'

function ProductDetails() {
    const { slug } = useParams()
    const [productData, setProductData] = useState([])
    const [moreproductData, setMoreProductData] = useState([])

    // const [count, setCount] = useState(0)


    useEffect(() => {
        fetchProduct();
    },[])

    const fetchProduct = async () => {
        const query = `*[_type == 'product' && slug.current == '${slug}'][0]`
        const product = await client.fetch(query)
        setProductData(product)


        const productQuery = "*[_type == 'product']"
        const moreProduct = await client.fetch(productQuery)
        setMoreProductData(moreProduct)
        console.log(moreProduct)  
    }

    
  return (
    <div>
        <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    <img src={productData?.image && urlFor(productData?.image[0]).url()} alt="" />
                </div>
                {/* <div className='small-iamges-container'>{
                    productData?.image && productData?.image.map((item, i) => (<img src={urlFor(item)} className=''  />))}
                </div> */}
            </div>
                <div className='product-detail-desc'>
                    <h1 className='text-4xl font-bold leading-tight text-gray-800 text-left'>{productData?.name}</h1>
                    <div className='reviews'>
                        <div className='flex'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>(20)</p>
                    </div>
                    <h4 className='text-xl font-bold my-0 leading-tight text-gray-800'>Details: </h4>
                    <p>{productData?.details}</p>
                    <p className='price'>${productData?.price}</p>
                    <div className='quantity'>
                        <h3>Quantity: </h3>
                        <p className='quantity-desc'>
                            <span className='minus' ><AiOutlineMinus /></span>
                            <span className='num' >0</span>
                            <span className='plus' ><AiOutlinePlus /></span>
                        </p>
                        
                    </div>
                    <div className='buttons'>
                        <button type='button' className='add-to-cart'>Add to Cart</button>
                        <button type='button' className='buy-now'>Buy now</button>
                    </div>
                </div>
        </div>
        <div className='maylike-products-wrapper'>
            <h2 className='text-2xl font-bold my-0 leading-tight text-gray-800'>You may also like</h2>
            <div className='marquee'>
                <div className='maylike-products-container track'>
                    {moreproductData?.map((item) => (<Product key={item?._id} product={item} />))}
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ProductDetails
