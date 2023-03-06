import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { incrementCount } from '../../store/reducers/basket'
import { decrementCount } from '../../store/reducers/basket'
import { deleteBasketCard } from '../../store/reducers/basket'



export default function BasketCard({ id, title, image, price, discont_price, count}) {

  const dispatch = useDispatch();
  const increment = () => dispatch(incrementCount(id));
  const decrement = () => dispatch(decrementCount(id));
  const delete_basket_card = () => dispatch(deleteBasketCard(id));

  const sum = discont_price * count;






  return (
    <div>
    <div className={s.basket}>
      <img src={`http://localhost:3333/${image}`} alt={ title } />
      <div className={s.name_incr}>
      <p>{ title }</p>
      <div className={s.triggers}>
        <button onClick={increment}>+</button>
        <p> 
         {count}
        </p>
        <button onClick={decrement}>-</button>
      </div>
      </div>
       <div className={s.price_basket_info}>
      <p>{ price }$</p>
      <p>{ discont_price }$</p>
      </div>
    
      <div className={s.delete}>
      <button onClick={delete_basket_card}>X</button>
      </div>
     
    </div>
    </div>
    
  )
}
