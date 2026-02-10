import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Collections from './pages/collections'
import About from './pages/about'
import Contact from './pages/contact'
import Cart from './pages/cart'
import Product from './pages/product'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Navbar from './Components/Navbar'
const App = () =>{
  return (
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
          <Navbar/>
          <Routes>
            <Route path='/' element = {<Home/>}></Route>
            <Route path='/collections' element = {<Collections/>}></Route>
            <Route path='/about' element = {<About/>}></Route>
            <Route path='/contact' element = {<Contact/>}></Route>
            <Route path='/cart' element = {<Cart/>}></Route>
            <Route path='/product/:productId' element = {<Product/>}></Route>
            <Route path='/placeOrder' element = {<PlaceOrder/>}></Route>
            <Route path='/orders' element = {<Orders/>}></Route>
            <Route path='/login' element = {<Login/>}></Route>
          </Routes>
      </div>
  )  
} 
export default App