import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom' //компонент, которій показівает, что  унас будут происходить изменения в теге main


export default function Layout() {
  return (  //в теге main собираем главную информацию страницы
    <div> 
        
        <Nav />
       
        <main className='wrapper'> 
          <Outlet />
        </main>
        <Footer/>
    </div>
    
      
    
  )
}