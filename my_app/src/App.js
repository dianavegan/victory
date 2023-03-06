import './App.css';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import BasketPage from './pages/BasketPage';
import ProductsPage from './pages/ProductsPage';
import Footer from './components/Footer';
import ProductDescrPage from './pages/ProductDescrPage';
import SalePage from './pages/SalePage';
import PostForm from './components/PostForm';





function App() {
  return (
    <div>
    
    <Routes>
       <Route path='/' element={<Layout />}>
         <Route index element={<HomePage />}/>
         <Route path='/categories' element={<CatalogPage />}/>
         <Route path='/basket' element={<BasketPage />}/>
         <Route path='/contact' element={<Footer />}/>
         <Route path='categories/:category' element={<ProductsPage />}/>
         <Route path='products/:id' element={<ProductDescrPage />}/>
         <Route path='/sale' element={<SalePage />}/>
        
         
         
       </Route>
     </Routes>

     
    </div>
  );
}

export default App;

