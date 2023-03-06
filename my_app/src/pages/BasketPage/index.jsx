import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BasketCard from '../../components/BasketCard'
import { clearBasket } from '../../store/reducers/basket'
import { useForm } from 'react-hook-form'
import s from './index.module.css'



export default function BasketPage() {

  const basket = useSelector(state => state.basket)
  const dispatch = useDispatch();

  const clear_basket = () => dispatch(clearBasket());

  const total = basket.reduce((prev, {discont_price, count}) => prev + discont_price * count, 0);
  //console.log(basket)

  
  const { register, handleSubmit, formState: { errors } } = useForm();
   
  const submit = data => console.log(data);

  const mobileRegister = register('mobile', {
   required: '*Enter phone number',
   pattern: {
       value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
       message: '*Enter the country code in the format +xx and a number of at least 10 digits' 
   }
  });
//<button onClick={clear_basket}>Clear cart</button>
  return (
    <div>
    <h1>Shopping Card</h1>
    <div className={s.basket_page}>
      
    <div className={s.basket_page_card}>
      {
        basket.map(el => <BasketCard key={el.id} {...el}/>)
      }
    </div>
     
      

      <div className={s.order_details}>
        <h2>Order details</h2>
        <div className={s.total}>
         <p>Total: { total }</p>
        </div>
         <p className={s.number_text}>Leave your phone number and order a discount</p>
        <form onSubmit={handleSubmit(submit)}>
           <input 
             type="text" 
             name='mobile' 
             placeholder='Mobile number' 
             {...mobileRegister} />
           <button>Order</button>
        </form>
        <div className={s.error_massage}>
        {errors.mobile && <p>{errors.mobile?.message}</p>}
        </div>
      </div>
      </div>

    </div>
    
  )
}
