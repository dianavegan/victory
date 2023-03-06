import React from 'react'
import s from './index.module.css'
import { loadBasket } from '../../store/reducers/basket';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';

export default function ProductCard({ id, title, image, price, discont_price, description }) {

    const discont = discont_price ? Math.round(100 - (discont_price * 100)/price) : '';

    const dispatch = useDispatch();
    const add_to_basket = () => dispatch(loadBasket({ id, title, image, price,  discont_price }))

  return (
    <div className={s.product_card}>
         <img src={`http://localhost:3333/${image}`} alt={ title } />
         <div className={s.product_info}>
         <div className={s.price}>
         <p className={s.discount_price}>{ discont_price }$</p>
         <p className={s.price_first}>{ price }$</p>
         <p className={s.description }>-{discont}%</p>
         </div>
         <Link to='/basket'>
         <button onClick={add_to_basket}>To cart</button>
         </Link>
         <p>{ description }</p>
         
         </div>
    </div>
  )
}
