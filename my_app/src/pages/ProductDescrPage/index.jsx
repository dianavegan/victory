import React, { useEffect, useState } from 'react'
import { load_product } from '../../reguests/product_reg'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'
import s from './index.module.css'


export default function ProductDescrPage() {

  
    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const { id } = useParams();
   


    useEffect(() => {
      dispatch(load_product(id))
    }, []);

    console.log(product)
    
 
  return (
    <div className={s.product_descr_page}>
        <h1>Product</h1>
        {
          product.map(el => <ProductCard key={el.id} {...el}  />)
        }
      
        

   
    </div>
  )
}
