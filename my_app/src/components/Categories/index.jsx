import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'


export default function CategoriesCard( { id, image, title, category }) {


  //const category_url = `/categories/${id}`
  
  
    return (
       
      <Link className={s.categories} to={`/categories/${id}`}>
         
         <img src={`http://localhost:3333/${image}`} alt={ title } />
         <p>{ category }</p> 
         <p>{ title }</p>
        </Link>
      
    )
}