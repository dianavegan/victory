
import s from './index.module.css'
import { Link } from 'react-router-dom'
import Categories from '../../components/Categories'
import React, { useEffect } from 'react'
import { load_categories } from '../../reguests/categories_reg'
import { useDispatch, useSelector } from 'react-redux'
import PostForm from '../../components/PostForm'
import Sale from '../../components/Sale'
import { load_sale } from '../../reguests/sale_reg'











export default function HomePage() {
  const dispatch = useDispatch();

  const categories = useSelector(state => state.categories);

  const sale = useSelector(state => state.sale)

    useEffect(() => {
      dispatch(load_sale)
    }, []);


  useEffect(() => {
    dispatch(load_categories)
  }, []);
 
 


  return (
    <div>
    <div className={s.home_page}>

      <div className={s.utp}>
      <div className={s.text}>
            
            
            <p>
               Get a seasonal discount
            </p>
          </div>
          <h1>Taking care of the garden
             with great pleasure
          </h1>
          
          <Link to='/categories'>
               <button>More</button>
          </Link>
        </div>
              
               </div>
               <div className={s.catalog_page}>
      <div>
      

      <div className={s.categories_home_page}>
           <h1>Categories</h1>
           <Link to='/categories'>
           <button>All categories</button>
           </Link>
      </div>

      <div className={s.categories_page}>
      { 
       categories
       .filter(el => el.id > 0 && el.id <= 4)
       .map(el => <Categories key={el.id} {...el}  />)
      }
      </div>

      </div>
    </div>
    

    <div className={s.post_page}>
       <PostForm/>
    </div>
    <div className={s.sale_paragraph}>
     
    <h1>Sale</h1>
    <Link to='/sale'>
    <button>More</button>
    </Link>
    
    </div>
    <div className={s.home_page_sale}>
     
      { 
       sale
       .filter(el => el.discont_price ? el.id > 0 && el.id <= 3 : '')
       .map(el => <Sale key={el.id} {...el}  />)
      }
      </div>
    </div>
  )
}
