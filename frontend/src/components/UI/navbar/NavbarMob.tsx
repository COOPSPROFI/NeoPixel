import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './logo2.svg'


export default function NavbarMob() {
  return (
    <div className='w-full top-12 py-[30px] bg-[#1E1F21] laptop:absolute laptop:bg-transparent '>
    <div className='flex justify-center laptop:absolute relative laptop:invisible visible py-[20px] mx-5'>
  <img src={logo} alt="logo" />
</div>
<div className='flex laptop:justify-between laptop:items-center laptop:max-w-7xl laptop:mx-auto'>
<div className='absolute laptop:relative invisible laptop:visible'>
  <img src={logo} alt="logo" />
</div>
<div className='flex items-center w-full '>
<nav className="flex text-white text-sm flex-row gap-2 mx-auto laptop:gap-10 items-center laptop:leading-6 laptop:text-xl">
  <NavLink to="" className="text-blue-500">Главная</NavLink>
  <NavLink to="printers" className="hover:text-blue-600">Принтеры</NavLink>
  <NavLink to="/404" className="hover:text-blue-600">Мероприятия</NavLink>
  <NavLink to="/404" className="hover:text-blue-600">Контакты</NavLink>
</nav>
</div>
</div>
</div>
  )
}
