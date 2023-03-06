import React, { useEffect } from 'react'
import { load_categories } from '../../reguests/categories_reg'
import { useDispatch, useSelector } from 'react-redux'
import CategoriesCard from '../../components/CategoriesCard'
import s from './index.module.css'

export default function CatalogPage() {

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(load_categories)
  }, []);
  //console.log(categories)

  return (

    <div className={s.catalog_page}>
      <h1>Categories</h1>
      <div className={s.categories_page}>
      { 
       categories.map(el => <CategoriesCard key={el.id} {...el}  />)
      }
      </div>
     
    </div>
  )
}
