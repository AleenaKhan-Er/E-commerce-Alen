import React from 'react'
import {assets}  from '../assets/frontend_assets/assets'
import {Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const NavLinkStyle = ({ isActive }) =>
  `flex flex-col items-center gap-1 ${
    isActive
      ? "underline underline-offset-8 decoration-gray decoration-2"
      : "no-underline"
  }`
const Navbar = ()=>{

    const [visible,setVisible] = useState(false)

    return(
        <div className="flex items-center justify-between py-2  font-medium">
            <img src={assets.logo} className="w-28 " alt="logo" />

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' end className= {NavLinkStyle}>
                    <p>HOME</p>
                    
                </NavLink>
                <NavLink to='/collections' className={NavLinkStyle}>
                    <p>COLLECTION</p>
                    
                </NavLink>
                <NavLink to='/about' className={NavLinkStyle}>
                    <p>ABOUT</p>
                    
                </NavLink>
                <NavLink to='/contact' className={NavLinkStyle}>
                    <p>CONTACT</p>
                
                </NavLink>
                
            </ul>
            <div className='flex items-center gap-6'>
                <img src={assets.search_icon} className="w-5 cursor-pointer" alt="search" />
                <div className='group relative'>
                    <img className="w-5 cursor-pointer" src={assets.profile_icon} alt="profile" />
                    <div className='group-hover:block hidden absolute right-0 pt-4'>
                        <div className='flex flex-col g-2 w-36 py-3 px-5 bg-slate-100 text-gray-500'>
                            <p className='cursor-pointer hover:text-black'>My profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout </p>
                </div>
                </div>
            </div>
                        <Link to="/cart" className='relative'>
                        <img src={assets.cart_icon} alt="cart" className='w-5 min-w-5'/>
                        <div className='w-3 h-3 bg-black rounded-full text-white absolute text-center leading-4 text-[8px] -right-1 -bottom-1'>10</div>
                        </Link>
                        <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
                        <div className={` absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible? 'w-full' : 'w-0'}`}>
                            <div className='flex flex-col text-gray-600'>
                                <div onClick={()=>setVisible(false)} className='flex items-center gap-3 p-4 cursor-pointer'>
                                    <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                                    <p>Back</p>
                                </div>
                                
                                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 ' to="/">Home</NavLink>
                                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 ' to="/collections">Collections</NavLink>
                                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 ' to="/about">About</NavLink>
                                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 ' to="/contact">Contact</NavLink>
                            </div>
                        </div>
        </div>
        </div>
    )
}
export default Navbar