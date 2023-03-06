import React, { useEffect } from 'react'
import s from './index.module.css'
import Sale from '../../components/Sale'
import { load_sale } from '../../reguests/sale_reg'
import { useDispatch, useSelector } from 'react-redux'


export default function SalePage() {

  const dispatch = useDispatch();

  const sale = useSelector(state => state.sale)

  useEffect(() => {
    dispatch(load_sale)
  }, []);

  

  return (
    <div className={s.sale} id='/sale'>
      <h1>Sale</h1>
      <div className={s.sale_cards}>
      {
       sale
       .filter(el => el.discont_price ? el.id : '')
       .map(el => <Sale key={el.id} {...el}  />)
       }
      </div>
    </div>
    
  )
}
