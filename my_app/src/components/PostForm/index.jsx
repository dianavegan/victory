import React from 'react'
import s from './index.module.css'
import { useForm } from 'react-hook-form'


export default function PostForm() {
   

    const { register, handleSubmit, formState: { errors } } = useForm();
    
   
   const submit = data => console.log(data);
  
   
  
   const mobileRegister = register('mobile', {
    required: '*Enter phone number',
    pattern: {
        value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
        message: '*Enter the country code in the format +xx and a number of at least 10 digits' 
       
      }
   
   });

  
   
  return (
     <div className={s.order} id='/coupon'>
    <div className={s.first_order}>
      <h2>
      Place your first order and get a <span>10% discount</span>
      </h2>
      </div>
      <div className={s.discount_order}>
        <p>Leave your phone number and order a discount</p>

        <form onSubmit={handleSubmit(submit)}>
        <input 
             type="text" 
             name='mobile' 
             placeholder='Mobile number' 
             {...mobileRegister} />   
        <button>Get a discount</button>
        </form>
        <div className={s.error_massage}>
        {errors.mobile && <p>{errors.mobile?.message}</p>}
        </div>
      </div>
    
    </div>
  )
}
