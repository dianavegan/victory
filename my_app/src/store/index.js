import { createStore, combineReducers, applyMiddleware } from 'redux'
import { categoriesReducer } from './reducers/categories';
import thunk from 'redux-thunk'
import { productsReducer } from './reducers/products';
import { productReducer } from './reducers/product';
import { basketReducer } from './reducers/basket';
import { saleReducer } from './reducers/sale';


const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  product: productReducer,
  basket: basketReducer,
  sale:saleReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));