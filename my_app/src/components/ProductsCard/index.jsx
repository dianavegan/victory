import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import { loadBasket } from '../../store/reducers/basket';
import { useDispatch } from 'react-redux';


export default function ProductsCard({ image, id, title, price, discont_price }) {

  const discont = discont_price ? Math.round(100 - (discont_price * 100)/price) : '';

  const product_descr_url = `/products/${id}`

  const dispatch = useDispatch();
  const add_to_basket = () => dispatch(loadBasket({ id, title, image, price,  discont_price }))
  return (

    
       <div className={s.products_card}>
     
      <div>
        <Link to={product_descr_url}>
          <img src={`http://localhost:3333/${image}`} alt={ title } />
        </Link>
        <Link to='/basket'>
          <button onClick={add_to_basket}>Add to cart</button>
        </Link>
      </div>
     
     
     <p>{ title }</p>
     <div className={s.price_info} >
       <p className={s.product_price}>{ price }$</p>
       <p className={s.discount}>{ discont_price  }$</p>
       <p>{ discont }%</p>
     </div>
    </div>
   
  )
}
