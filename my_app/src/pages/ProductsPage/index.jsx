import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { load_products } from '../../reguests/products_reg'; 
import ProductsCard from '../../components/ProductsCard';
import s from './index.module.css';
import { searchPrise, sortProducts } from '../../store/reducers/products';



export default function ProductsPage() {

    const { category } = useParams();
    console.log(category)
    const dispatch = useDispatch();
    const products = useSelector(state => state.products)
    useEffect(() => {
      dispatch(load_products(category))
    }, []);


    const sort_products = event => dispatch(sortProducts(event.target.value));
    
    const search = event => {
      event.preventDefault();
      const { min, max } = event.target;
      const min_value = min.value || 0;
      const max_value = max.value || Infinity;
      dispatch(searchPrise({ min_value, max_value }))
    }


  return (
    <div>
      <h1>Products</h1>
      <div className={s.products_descr_page}>
      <div className={s.sorting}>
      <div>
        <span>Price:</span>
        <form className={s.search_form} onSubmit={search}>
          <input type="number" placeholder='from' name='min'/>
          <input type="number" placeholder='to' name='max' />
          <button>Serch</button>
        </form>
      </div>

         <div>
         <span>Sort by:</span>
         <select className={s.sort_select} onInput={sort_products}>
         <option value="default">default</option>
          <option value="title">title</option>
          <option value="price">price</option>
         </select>
         </div>
      </div>
      </div>
       <div className={s.products_page}>
       { 
       products
       .filter(el => !el.hide)
       .map(el => <ProductsCard key={el.id} {...el}  />)
      }
      </div>
    </div> 
     
  )
}
